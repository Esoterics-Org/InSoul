import styles from "./Message.module.scss"

const Message = ({msg, isSelfMsg}) => {
  return (
    <div
      className={styles["message-container"]}
    >
      <div 
        className={styles.message}
        style={{
          backgroundColor: isSelfMsg ? "#95daad" : "#93b9ff",
          marginLeft: isSelfMsg ? "auto" : "unset"
        }}
      >{msg}</div>
    </div>
  );
}
 
export default Message;