import "/src/styles/app.scss";

import Header from "./components/Header";

import Index from "./routes/Index";
import About from "./routes/About";
import Error from "./routes/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
