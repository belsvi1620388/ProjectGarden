import React from 'react'
import s from './style.module.css'
import notFound from '../NotFound/notFound.png'; 

export default function NotFound() {
  return (
    <div className={s.container}>
      <img src={notFound} alt='' />
    </div>
  )
}


/*
const NotFound = () => {
  return 
  <div className={s.container}>
    <div>
      <img src={notFound} alt='Sticers' />
    </div>
  </div>
}
export default NotFound;
*/
/*
import luboeNazvanie from "../../../images/image.png"
import styles from "./appComponent.module.css";
import * as React from 'react';
 
const AppComponent = () => {
return(
<img className={styles.img}
         alt={"Короткое описание изображения"}
         src={luboeNazvanie}/>
):
}
 
export default App;
*/

// Если картина лежит в "/components/Users/img/johnson.jpg" и вы хотите прописать к ней путь в компоненте Users, то напишите так 
/*import johnsonImg from "./img/johnson.jpg"
...
<img src={johnsonImg} />*/

// https://s3-alpha-sig.figma.com/img/ee3c/6b0a/b32f2f53b90f69846a38a717c6ab7fa5?Expires=1678665600&Signature=XKamAxoaJHoisuBVjxU9PTyrzt55R-rCv0tDE9tJmlPTqS-6Gon7nWmHSMsNI5G23VzyONBKujlQv1-9SylkQblmy~C2rQagbZS1HLthHdOx27iqEiDlURbvmFjLg1SyGfZ8mUIvw9kALmXwOWb0qQjYPR8NXEU2grYBrtucXwtNMP4WBKuD-Wno-v9PFXUinfuMcwIWEq4xsVuYMbUstL-XGlJcemuuVHkLkalgpV9gv6MUjSqKfDy~BgG1Pi8M6Cx6r4O6QBYPlo7jWZHFxW37gJjLX8IYhmVmzA96uNuvILGsUv7y-ST1SS52ooeEnSFgMcp8Z9DnWeIgDNooQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4

// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7Lt6V-hg4IZ3WJcf0-VHwp9-SCzZ3u-PNw&usqp=CAU"