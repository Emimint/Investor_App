import styles from "./InputCard.module.css";

const InputGroup = ( props ) => {
    const classes = "card " + props.className;
  return <div className={styles["input-group"]}>{props.children}</div>;
};

export default InputGroup;
