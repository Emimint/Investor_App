import styles from "./Header.module.css";


const Header = ({logo}) => {
  return (
    <header
      className={styles.header}
    >
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

    export default Header;