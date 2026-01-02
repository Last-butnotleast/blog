import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen p-8">
        <header className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-2">My Blog</h1>
          <p className="text-muted-foreground">Learning Bevy & Rust</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
