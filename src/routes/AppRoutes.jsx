import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/HomePage/Home";
import Profile from "../pages/ProfilePage/Profile";
import Photos from "../pages/HomePage/AlbumsSection/Photos";
import PostDetail from "../pages/HomePage/PostsSection/PostDetail";
import Posts from "../pages/HomePage/PostsSection/Posts";
import Albums from "../pages/HomePage/AlbumsSection/Albums";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/recentposts" element={<Posts />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path="/photos/:albumId" element={<Photos />} />
    </Routes>
  );
};

export default AppRoutes;

{
  /* <Route exact path="/" component={HomePage} />
<Route path="/albums" component={Albums} />
<Route path="/photos/:albumId" component={Photos} />
<Route path="/recentposts" component={RecentPosts} />
<Route path="/post/:postId" component={PostDetail} />
<Route path="/login" component={Login} />
<Route path="/userprofile" component={UserProfile} /> */
}
