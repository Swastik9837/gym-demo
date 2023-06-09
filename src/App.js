import React from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Banner from "./components/Banner";
import Header from "./components/Header";

import Footer from "./components/Footer";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />

      <Footer />
    </div>
  );
};

export default App;
