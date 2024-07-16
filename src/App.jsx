import "/src/styles/app.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Work from "./components/Work";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Introduction />
      <Work />
    </div>
  );
}

export default App;
