import { MdCall, MdMessage } from "react-icons/md";
import Button from "../Button/Button_main";
import styles from "./Hero_Section.module.css";
import { HiMail } from "react-icons/hi";

const Hero_Section = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("name", event.target[0].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="20px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="20px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="20px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea name="text" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./Images/contact.svg" />
      </div>
    </section>
  );
};

export default Hero_Section;
