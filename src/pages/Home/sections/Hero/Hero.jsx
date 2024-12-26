import styles from "./Hero.module.css";
import AvatarImg from "../../../../assets/images/avatar.png";
import DownloadButton from "../../../../components/buttons/DownloadButton";
import Avatar from "../../../../components/img_container/Avatar";
import Title_Typing from "../../../../components/animations/Title_Typing";
import NavegateIcons from "../../../../components/buttons/NavegateIcons";

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
          <DownloadButton
          text="Download CV"
          buttonBackground={"var(--font-darkcolor1)"} 
          buttonColor={"var(--font-lightcolor2)"} 
          />
          <NavegateIcons />
        </div>
      </div>
    </div>
  );
}

export default Hero;
