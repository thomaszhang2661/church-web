import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import PostPage from './pages/PostPage'
// import ResourcesPage from './pages/ResourcesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/post/:id" element={<PostPage />} />
      <Route path="/resources" element={<ResourcesPage />} /> */}
    </Routes>
  );
}

export default App;
