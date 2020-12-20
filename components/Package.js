import styles from "./Package.module.css"
function Package(props)
{
    return <div className={styles.container}>
        <h1 className={styles.item}>{props.heading}</h1>
        <p className={styles.item}>{props.desc}</p>
        <p className={styles.item}>{props.rate}</p>
        <button className={styles.item,styles.btn_txt}>{props.btn_txt}</button>
        <p className={styles.item}>{props.desc_heading}</p>
    </div>
}
export default Package