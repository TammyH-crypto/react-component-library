import "./App.scss";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
