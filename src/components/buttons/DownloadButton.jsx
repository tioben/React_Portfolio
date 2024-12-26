import styles from "./Buttons.module.css";

function DownloadButton({ text, buttonColor, buttonBackground }) {
  return (
    <div className={styles.DownloadButton}>
      <button
        style={{
          "--buttonBackground": buttonBackground,
          "--buttonColor": buttonColor,
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default DownloadButton;
