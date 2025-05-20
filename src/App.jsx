import "./App.scss";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Card/>
      </main>
      <Footer />
    </>
  );
}

export default App;
