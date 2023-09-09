import styles from "./Message.module.scss"

const Message = ({msg, isSelfMsg}) => {
  return (
    <div
      className={styles["message-container"]}
    >
      <div 
        className={styles.message}
        style={{
          backgroundColor: isSelfMsg ? "#74D295" : "#5E97FF",
          marginLeft: isSelfMsg ? "auto" : "unset"
        }}
      >{msg}</div>
    </div>
  );
}
 
export default Message;