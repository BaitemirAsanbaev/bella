    import classes from "./News.module.css";
    import photo from "../../assets/img/News.png";
    const News = () => {
    return (
        <div className={classes.news}>
            
            <div className={classes.container}>
            
        <div className={classes.main}>
            
            <div className={classes.wrapper}>
            <div>
                {" "}
                <img src={photo} alt="phot" />
            </div>
            <div>
                <p>06.08.2020</p>
                <h3>Гарантия обмена и возврата товара</h3>
                <h4>
                100% гарантия возврата товара - 14 дней на возврат, без скандалов
                и истерик.
                </h4>
                <button>
                Подробнее <span></span>
                </button>
            </div>
            </div>
            {/* <div className={classes.wrapper}>
            <div>
                {" "}
                <img src={photo} alt="phot" />
            </div>
            <div>
                {" "}
                <p>06.08.2020</p>
                <h3>Гарантия обмена и возврата товара</h3>
                <h4>
                100% гарантия возврата товара - 14 дней на возврат, без скандалов
                и истерик.
                </h4>
                <button>
                Подробнее <span></span>
                </button>
            </div>
            </div> */}
        </div> 
        </div>
        </div>
    );
    };

    export default News;
