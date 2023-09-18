import styles from "./navbar.module.css";
const Navigation = () => {
  return (
    <div className="container">
      <div className={`${styles.navbar}`}>
        <img src="./Images/logo.png" alt="" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
