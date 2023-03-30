import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
function App() {

  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => fetchBlogPosts(1), []);

  return (
    <div className="text-center w-full h-full flex flex-col justify-between">
      <Header />
      <Blogs />
      <Pagination />

    </div>
  );
}

export default App;
