import styles from './Navbar.module.css'
import Image from 'next/image'

const Navbar = ()=>{
    return <div id={styles.navbar} className={styles.container}>
            <button>
             <div className={styles.container_section_left}>
                 <div className={styles.container_section_left_image}>
                     <Image 
                        src="/back-button.png"
                        layout="fixed"
                        height={16}
                        width={16}
                     />
                  </div>
                  <div className={styles.container_section_left_text}>
                      <p>Back</p>
                  </div>
             </div>
             </button>
             <div className={styles.container_section_center}>
                 <Image 
                    src="/Crusher_blue.svg"
                    layout="fixed"
                    height={200}
                    width={200}
                 />
             </div>
             <div className={styles.container_section_right}></div>
           </div>
         
}
export default Navbar