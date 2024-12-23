import styles from "./Hero.module.css";
import Avatar from "../../../../assets/images/avatar.png";

function Hero() {
  return (
    <div className={styles.Main}>
      <div className={styles.img_Content}>
        <img src={Avatar} alt="Avatar do usuário" className={styles.Avatar} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit
        cupiditate optio asperiores assumenda natus architecto, et quidem
        obcaecati commodi aut in. Autem aut laborum velit animi nulla deleniti
        temporibus.
      </p>
    </div>
  );
}

export default Hero;
