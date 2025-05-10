import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSinglePost } from '../services/api';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [userId,setUserId]=useState('');
  useEffect(() => {
    getSinglePost(id).then((res) => setPost(res.data));
     // Get username from localStorage
     const storedData = JSON.parse(localStorage.getItem('user'));
       setUserId(storedData?.user?.id);
  
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
   <div className="container my-4">
     <div className="card">
        <img style={styles.img} src={post.image} className="card-img-top" alt="Sorry for inconvinence"/>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><strong>Author:</strong> {post.author?.username}</p>
            {userId===post.author._id?<Link to={`/edit/${post._id}`} style={styles.editLink}>Edit Post</Link>:''}
            
          </div>
      </div>
   </div>
  );
}

const styles = {
 
  editLink: {
    fontSize: '1.1rem',
    color: '#4CAF50',
    fontWeight: 'bold',
    textDecoration: 'none',
    border: '1px solid #4CAF50',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  img:{
    height:'100%',
    width:'100%',
    maxHeight:'400px',
    maxWidth:'100%',
    objectFit:'cover'
  }
};
