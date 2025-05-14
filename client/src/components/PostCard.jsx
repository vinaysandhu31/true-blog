import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
   
      <div className="col-sm-3 my-2">
        <div className="card" style={{width: "17rem"}}>
        <img style={styles.img} src={post.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">By {post.author?.username}</p>
          <p className="card-text">{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post._id}`} style={styles.readMoreLink}>Read More</Link>
        </div>
      </div>
      </div>


  );
}

const styles = {
  
  readMoreLink: {
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
    height:'200px',
    objectFit:'cover'
  }
};
