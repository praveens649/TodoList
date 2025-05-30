import "animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import HowToUse from "./components/HowToUse";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <HowToUse />
                <Gallery />
                <Testimonial />
                <Contact />
                <Footer/>  
              </>
            }
          />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
