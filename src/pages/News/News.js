import { useEffect, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";
import Pagination from "./Pagination/Pagination";
import axios from "axios"

const News = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPag = () => {
      setCurrentPage(currentPage + 1)
  }
  const prevPag = () => {
    setCurrentPage(currentPage - 1)
  }

  return ( <div>
    <NewsCard posts={currentPosts} loading={loading}/>
    <Pagination         
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        next={nextPag}
        prev={prevPag}/>
  </div> );
}
 
export default News;