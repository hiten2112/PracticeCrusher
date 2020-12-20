import styles from './Package.module.css'
import Package from "./Package.js"
function Packages()
{
    return  <div className ={styles.container_whole}>
            <div>
             <Package 
             heading="Starter" 
             desc="For individual and teams getting started" 
             rate="0"
             btn_txt="Current Plan" 
             desc_heading="Includes"/></div>
             <div>
             <Package 
             heading="Starter" 
             desc="For individual and teams getting started" 
             rate="0"
             btn_txt="Current Plan" 
             desc_heading="Includes"/>
             </div>
             <div>
             <Package 
             heading="Starter" 
             desc="For individual and teams getting started" 
             rate="0"
             btn_txt="Current Plan" 
             desc_heading="Includes"/>
             </div>
             </div>
}

export default Packages