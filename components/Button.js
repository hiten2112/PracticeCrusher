import styles from './Button.module.css'

 const Button=()=> {
  return (
    <button className="lg:dark:hover:bg-white ..."
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
     >
    
      Destroy
    </button>
  )
}
export default Button