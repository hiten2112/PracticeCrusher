import styles from './WorkSpace.module.css'
const Workspace = ()=>{
    return <div className={styles.container}>
            <div>
              <div className={styles.item}><p>M</p></div>
              <div className={styles.item_a}><p>Upgarde Your WorkSpace</p></div>
              <div className={styles.item_b}><h1>My WorkSpace</h1></div>
              <div className={styles.item_Pay}>
                <p>Pay monthly  <span className={styles.ellipse_box}>-20%</span> Pay Yearly <span className={styles.ellipse_box}>-20%</span></p>  
              </div>
               
            </div>           
            </div>
}
export default Workspace;