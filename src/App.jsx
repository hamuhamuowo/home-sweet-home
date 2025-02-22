import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Write from "./components/Write";
import DetailPost from "./components/DetailPost";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail" element={<DetailPost />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
