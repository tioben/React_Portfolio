import styles from "./Hero.module.css";
import AvatarImg from "../../../../assets/images/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Button1 from "../../../../components/buttons/Button1";
import Avatar from "../../../../components/img_container/Avatar";
import Title_Typing from "../../../../components/animations/Title_Typing";

function Hero() {
  return (
    <div className={styles.Main}>
      <Avatar 
      legend={"Avatar do usuário"} 
      avatar={AvatarImg}
      borderColor={"var(--font-lightcolor2)"} />
      <div>
        <Title_Typing 
        title={"Gustavo"}
        titleSpan={" Martins"}  
        subTitle={"Software Development"} 
        titleColor={"var(--font-lightcolor2)"} 
        titleSpanColor={"var(--font-darkcolor1)"} 
        subtitleColor={"var(--font-lightcolor2)"} />

        <div className={styles.hero_buttons}>
          <Button1 
          text="Download CV"
          buttonBackground={"var(--font-darkcolor1)"} 
          buttonColor={"var(--font-lightcolor2)"} 
          />
          <div>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
