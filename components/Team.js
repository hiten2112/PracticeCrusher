import styles from "./Team.module.css"
const Team =()=>{
    return <div className={styles.container}>
              <div className={styles.head}>
                 <p className={styles.item}> Team like yours use Pitch Pro</p>
              </div>
              <div className={styles.container_in}>
                  <div className={styles.item}>
                      <p>ChartMogul</p>
                   </div>
                   <div className={styles.item}>
                       <p>MAD</p>
                   </div>
                   <div className={styles.item}>
                       <p>Unsplash</p>
                   </div>
              </div>
              <div className={styles.container_in}>
                  <div className={styles.item}>
                      <p>descript</p>
                   </div>
                   <div className={styles.item}>
                       <p>Flux</p>
                   </div>
                   <div className={styles.item}>
                       <p>Parse.ly</p>
                   </div>
              </div>
           </div>
}

export default Team