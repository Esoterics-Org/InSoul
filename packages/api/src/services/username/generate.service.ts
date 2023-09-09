import {
  Config,
  uniqueNamesGenerator,
  adjectives,
  animals,
  colors,
} from "unique-names-generator";
import * as DB from "@db";
import { UsernameRecord } from "@prisma/client";

const randomNameGenerator = () => {
  const customConfig: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: "-",
    length: 3,
  };

  return uniqueNamesGenerator(customConfig);
};

const checkExpiry = (expiry: Date) => {
  return new Date() >= expiry;
};

const checkPastUserName = (
  pastUserName: UsernameRecord[],
  username: string
) => {
  const pastUsernameString: string[] = [];

  pastUserName.map((username) => {
    pastUsernameString.push(username.username.toLowerCase());
  });

  return pastUsernameString.includes(username.toLowerCase());
};

const generateUniqueUserName = async (email: string) => {
  let flag = true;
  let pastMatched = false;
  let username = randomNameGenerator();
  while (flag) {
    console.log(username);
    // Check if the current username matches with the newly generated one
    const user = await DB.User.getUserFromEmail(email);

    while (user!.username === username) {
      username = randomNameGenerator();
    }

    // If the current generated username matches with the past usernames of the same user then OK
    if (checkPastUserName(user!.pastUsernames, username)) {
      // Then remove it from the past username list
      const usrnm = user!.pastUsernames.find(
        (usr) => usr.username.toLowerCase() === username.toLowerCase()
      );
      await DB.Username.deleteUserNameRecord(usrnm!.id);
      flag = false;
    }
    // Check if the current generated username matches with the past usernames
    const pastUsernameOfOtherUsers =
      await DB.Username.getPastUsernameOfOtherUser(email);

    pastUsernameOfOtherUsers.map(async (pstusr) => {
      console.log("Hi");
      if (pstusr.username === username) {
        console.log("past username matched 2");
        // In this case check if the username is expired then OK
        if (checkExpiry(pstusr.expiry)) {
          // If the username is expired then remove the username from the past username list
          await DB.Username.deleteUserNameRecord(pstusr.id);
          flag = false;
          return;
        } else {
          // If the username is not expired then generate new one
          username = randomNameGenerator();
          pastMatched = true;
        }
      }
    });

    if (!pastMatched) {
      flag = false;
    }
  }
  return username;
};

export { generateUniqueUserName };
