import { ChangeEvent, useState } from "react";
import styles from "./Auth.module.scss";
import { BASE_URL } from "../../global/constant/api";
import useAuth from "../../hooks/useAuth";

const Auth = () => {
  const { login, register } = useAuth();
  const [authState, setAuthState] = useState("Login");
  const [loginInput, setLoginInput] = useState({
    identifier: "",
    password: "",
  });
  const [registerInput, setRegisterInput] = useState({
    email: "",
    password: "",
    communityId: "",
    communityName: "",
  });
  const [communities, setCommunities] = useState([]);

  const handleLoginInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegisterInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCommunitySelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setRegisterInput((prevState) => ({
      ...prevState,
      communityId: event.target.value
    }));
  };

  const handleSearchCommunities = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterInput((prevState) => ({
      ...prevState,
      communityName: event.target.value,
    }));
    const response = await fetch(
      `${BASE_URL}/community?search=${event.target.value}`,
      {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      setCommunities(data.message);
    }
  };

  const handleCreateCommunity = async () => {
    const response = await fetch(`${BASE_URL}/community`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: registerInput.communityName }),
    });
    const data = await response.json();
    if (response.status === 201) {
      setRegisterInput((prevState) => ({
        ...prevState,
        communityId: data.message.communityId,
      }));
    }
  };

  const handleAuth = async () => {
    if (authState === "Login") {
      await login(loginInput);
    }else {
      await register(registerInput);
    }
  };

  return (
    <main>
      <section className={styles["form-ui"]}>
        <div className={styles["up"]}>
          <img src="/auth-superman.jpg" alt="auth" />
        </div>
        <div className={styles["down"]}>
          <h1>{authState}</h1>
          {authState === "Login" && (
            <>
              <div>
                <input
                  type="text"
                  name="identifier"
                  value={loginInput.identifier}
                  placeholder="Email"
                  onChange={handleLoginInputChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  placeholder="Password"
                  onChange={handleLoginInputChange}
                />
              </div>
            </>
          )}
          {authState === "Register" && (
            <>
              <div>
                <input
                  type="text"
                  name="email"
                  value={registerInput.email}
                  placeholder="Email"
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search for Communities"
                  onChange={handleSearchCommunities}
                />
                <button onClick={handleCreateCommunity}>
                  Create Community
                </button>
                <div>
                  <div>Results</div>
                  <select
                    defaultValue={"default"}
                    onChange={handleCommunitySelect}
                    name="communityId"
                  >
                    <option value="default" disabled>
                      Please select one
                    </option>
                    {communities.map((comm) => (
                      <option key={comm.id} value={comm.id}>
                        {comm.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={registerInput.password}
                  placeholder="Password"
                  onChange={handleRegisterInputChange}
                />
              </div>
            </>
          )}
          <button onClick={handleAuth}>{authState}</button>
          <br />
          {authState === "Login" ? (
            <span>
              New User?{" "}
              <button
                onClick={() => {
                  setAuthState("Register");
                }}
              >
                Register
              </button>
            </span>
          ) : (
            <span>
              Existing User?{" "}
              <button
                onClick={() => {
                  setAuthState("Login");
                }}
              >
                Login
              </button>
            </span>
          )}
        </div>
      </section>
    </main>
  );
};

export default Auth;
