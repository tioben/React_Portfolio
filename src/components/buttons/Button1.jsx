import styles from "./Buttons.module.css"

function Button1({text, buttonColor, buttonBackground}){
    return (
        <div className={styles.Button1}>
            <button style={{"--buttonBackground": buttonBackground, "--buttonColor": buttonColor}}>{text}</button>
        </div>
    )
}

export default Button1 