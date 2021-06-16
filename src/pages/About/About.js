import classes from "./About.module.scss"
import bw_bella from "../../assets/images/bw-bella.png"
import d1 from "../../assets/images/dress-1.png"
import d2 from "../../assets/images/dress-2.png"
import logo from "../../assets/images/bella-logo.svg"

const About = () => {
  return ( <div className={classes.About}>
    <h1>О нас</h1>
    <div className={classes.container}>
      <div>
        <div className={classes.bw_img}>
          <img alt="dress" src={bw_bella}/>
        </div>
        <div className={classes.title}>
          <img alt="logo" src={logo}/>
        </div>
      </div>

      <div>
        <div className={classes.section_1}>
          
          <div className={classes.dress_1}>
            <img alt="dress" src={d1}/>
          </div>
          <div className={classes.info_1}>
            <p>gContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
        </div>
        <div className={classes.section_2}>

            <div className={classes.info_2}>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            <div className={classes.dress_2}>
              <img alt="dress" src={d2}/>
            </div>
        </div>
      </div>
      </div>
  </div> );
}
 
export default About;