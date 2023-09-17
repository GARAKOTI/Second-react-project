import "./App.css";
import Header from "./components/Header_section/Header_container";
import Hero_Section from "./components/Hero_section/Hero_Section";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Header/>
      <Hero_Section/>
    </div>
  );
}

export default App;
