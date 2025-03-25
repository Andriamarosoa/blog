import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SaveBlog from './pages/saveBlog';
import HomePage from './pages/homepage';
import Headers from './components/header/header'
import Footer from './components/footer/footer';
import Profilayout from './layout/profile';
import MyPost from './pages/myPost';
import { BlogListPage } from './pages/blogList';
import Profile from './pages/profile';
import { UserProvider } from './providers/userProvider';
import BlogDetail from './pages/blogDetail';
import Register from './pages/register';
function App() {
  return (
    <BrowserRouter>
      <Headers className="lg:px-20" />
      <div className="container lg:px-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<UserProvider strict={false}><BlogDetail /></UserProvider>} />
          <Route path="/blog/:id/edit" element={
            <UserProvider >
              <Profilayout>
                <SaveBlog />
              </Profilayout>
            </UserProvider>
          } />
          <Route path="/register" element={<UserProvider strict={false}><Register /></UserProvider>} />


          <Route path="/app" element={<UserProvider><Profilayout/></UserProvider>} >
            <Route path="save-blog" element={<SaveBlog />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-post" element={<MyPost />} />
            {/* <Route path="/login" element={<BlogListPage />} /> */}
          </Route>
        </Routes>
      </div>
      <Footer  className="lg:px-20" />
    </BrowserRouter>
  );
}

export default App;
