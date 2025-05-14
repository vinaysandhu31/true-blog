
import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer'
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <div className="container">
      <div className='row'>
        {posts.map(post => <PostCard key={post._id} post={post} />)}
      </div>
      <Footer/>
    </div>
  );
}
