import "/src/styles/app.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Introduction />
    </div>
  );
}

export default App;
