import News from "./News"
import classes from "./News.module.css"



const New = () => {


    return ( 
    <div className={classes.container}>
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
