import News from "./News"
import classes from "./News.module.css"
import { useState } from "react";


const New = () => {
     const [counter, setCounter] = useState(0)
     const [isred,setRed] = useState(false)

     

     function increment(){
         setCounter(counter+1)
         setRed(true)
         
     }

    return ( 
    <div className={classes.container}>
        <h2 className={isred ? "red" : ""}>Новости</h2>
        <h2>{counter}</h2>
        <button onClick={increment}> counter</button>
    <div className={classes.new}>
   <News/>
   <News/>
   <News/>
   <News/>
   <News/>
   <News/>
    </div>
    <div className={classes.slideButton}>
       <button></button>
       <button>1</button>
       <button>2</button>
       <button>3</button>
       <button>4</button>
       <button>...</button>
       <button></button>
    </div>
    </div>

     );
}
 
export default New;
