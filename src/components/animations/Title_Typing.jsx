import styles from "./Animations.module.css"

function Title_Typing({title, titleSpan, subTitle, titleColor, titleSpanColor, subTitleColor}){
    return (
        <div className={styles.Title}>
            <h1 style={{"--titleColor":titleColor, "--titleSpanColor": titleSpanColor}}>{title}<span>{titleSpan}</span></h1>
            <h2 style={{"--subTitleColor": subTitleColor}}>{subTitle}</h2>
        </div>
    )
}

export default Title_Typing 