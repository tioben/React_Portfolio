import styles from "./Buttons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function NavegateIcons({}) {
  return (
    <div className={styles.iconsContainer}>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default NavegateIcons;
