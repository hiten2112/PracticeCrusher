import Navbar from '../components/Navbar'
import Workspace from '../components/WorkSpace'
import Packages from '../components/Packages'
import Team from "../components/Team"
import Compare from "../components/Compare"
import styles from "./index.module.css"
const App =()=>{
   return <div className={styles.section}>
              <div><Navbar /></div>
              <div className={styles.content_top}>
              <div className={styles.content}>
                <div className={styles.item}><Workspace /></div>
                <div className={styles.item}><Packages /></div>
                <div className={styles.item}><Team /></div>
              </div>
              </div>
              <div className={styles.content_top}>
              <div className={styles.content}>
                <div className={styles.item}><Compare /></div>
              </div>
              </div>
           </div>
          
        
}

export default App
