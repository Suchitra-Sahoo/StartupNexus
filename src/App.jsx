import About from "./Components/components/About";
import Card from "./Components/components/Card";
import Contact from "./Components/components/Contact";
import Feature from "./Components/components/Feature";
import Footer from "./Components/components/Footer";
import Hero from "./Components/components/Hero";
import Navbar from "./Components/components/Navbar";
import Workshop from "./Components/components/Workshop";

function App() {
    return(
        <>
            <Navbar />
            <Hero />
            <Card />
            <About />
            <Feature />
            <Workshop/>
            <Contact />
            <Footer />
        </>
    )
}

export default App