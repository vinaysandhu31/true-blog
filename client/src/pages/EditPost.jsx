import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSinglePost, updatePost } from '../services/api';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    getSinglePost(id).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, { title, content });
      navigate(`/post/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Edit Post</h2>
        <input 
          type="text" 
          placeholder="Enter post title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={styles.input}
          required 
        />
        <textarea 
          placeholder="Edit post content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          style={styles.textarea}
          required 
        />
        <button type="submit" style={styles.button}>Update</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: '20px',
  },
  form: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    gap: '15px',
  },
  heading: {
    marginBottom: '10px',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '150px',
    resize: 'vertical',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};
