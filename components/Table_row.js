import styles from './Compare.module.css'
function Row(props)
{
    return<div>
           <div className={styles.container_heading}>
               <p>WorkSpace</p>
           </div>    
           <div className={styles.container_in}>
                <p className={styles.item}>Hello</p>
                <p className={styles.item_next}>Hello</p>
                <p className={styles.item_next}>Hello</p>
            </div>
            <div className={styles.container_in_even}>
                <p className={styles.item}>Hello</p>
                <p className={styles.item_next}>Hello</p>
                <p className={styles.item_next}>Hello</p>
            </div>
            
          </div>
}
export default Row