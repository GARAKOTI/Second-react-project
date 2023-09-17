import { MdCall, MdMessage } from "react-icons/md";
import Button from "../Button/Button_main";
import styles from "./Hero_Section.module.css";
import { HiMail } from "react-icons/hi";

const Hero_Section = () => {
  return (
    <section className={` ${styles.container}`}>
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
      </div>
      <div className="hero_image">
        <img src="./Images/contact.svg" />
      </div>
    </section>
  );
};

export default Hero_Section;
