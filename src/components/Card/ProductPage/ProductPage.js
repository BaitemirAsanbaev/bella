

const ProductPage = ({match}) => {
  const title = []
  switch (match.params.id) {
    case '1':
      title.push(<h1>first-product</h1>)
      break;
    case '2':
      title.push(<h1>second-product</h1>)
      break;
    case '3':
      title.push(<h1>third-product</h1>)
      break;
    case '4':
      title.push(<h1>fourth-product</h1>)
      break;
        
    default:
      break;
  }
  return ( <div>
    {title}
  </div> );
}
 
export default ProductPage;