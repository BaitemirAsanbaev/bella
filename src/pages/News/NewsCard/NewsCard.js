const NewsCard = ({posts, loading}) => {

  const output = posts.map(post => (
    <li key={post.id} className='list-group-item'>
      {post.title}
    </li>
  ))

  if(loading){
    return <>Loading...</>
  }
  return ( <div>
      {output}
  </div> );
}
 
export default NewsCard;