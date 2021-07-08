import SeeAll from "../../../components/SeeAll/SeeAll"
import news_img from "../../../assests/images/news-img.png"
import classes from "./NewsCard.module.scss"

const NewsCard = ({ posts, loading }) => {

  const output = posts.map(post => (
    <div className={classes.card}>
      <img src={news_img}/>
      <div className={classes.info}>
        <span>14.11.21</span>
        <h2 key={post.id}>
          {post.title}
        </h2>
        <p>{post.body}</p>
        <SeeAll news />
      </div>
    </div>
  ))

  if (loading) {
    return <>Loading...</>
  }
  return (<div className={classes.NewsCard}>
    {output}
  </div>);
}

export default NewsCard;