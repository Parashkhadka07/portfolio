import React from "react";

import Navbar from "./Components/Navbar/navbar";
import Body1 from "./Components/Body/Body1";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body1 />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
