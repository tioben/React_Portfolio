import styles from "./Hero.module.css";
import Avatar from "../../../../assets/images/avatar.png";
import Container from "../../../../components/container/Container.jsx";

function Hero() {
  return (
    <Container>
      <div className={styles.Main}>
        <img src={Avatar} alt="Avatar do usuário" className={styles.Avatar} />
      </div>
    </Container>
  );
}

export default Hero;
