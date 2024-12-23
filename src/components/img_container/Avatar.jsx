import styles from "./ImgContainers.module.css"

function Avatar({avatar, legend, borderColor}){
    return (
        <div className={styles.img_Content}>
            <img src={avatar} alt={legend} className={styles.Avatar} style={{"--BorderColor": borderColor}} />
        </div>
    )
}

export default Avatar 