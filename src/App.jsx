import "./App.css";
import Header from "./components/Header_section/Header_container";
import Hero_Section from "./components/Hero_section/Hero_Section";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <main className="main_container">
        <Header />
        <Hero_Section />
      </main>
    </div>
  );
}

export default App;
