
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import EditPost from './pages/EditPost';
import Login from './pages/Login';
import Register from './pages/Register';
 import Footer from './pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost/>} />
        <Route path="/post/:id" element={<PostDetails/>} />
        <Route path="/edit/:id" element={<EditPost/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
