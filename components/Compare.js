import styles from "./Compare.module.css"
import Row from "./Table_row.js"
const Compare = ()=>{
    return <div >
            <div className={styles.container}>
                <p>Compare all features</p>
            </div>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <div className={styles.container}>
                 <button className={styles.btn_txt}><p>Upgrade to Pro</p></button>
            </div>
            
           </div>
}
export default Compare