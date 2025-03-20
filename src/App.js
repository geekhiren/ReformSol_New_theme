import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Pages/Services ';
import ServiceDetails from './Pages/ServiceDetails';
import OurTeam from './Pages/OurTeam';
import CaseStudy from './Pages/CaseStudy';
import CaseDetails from './Pages/CaseDetails';
import Blogs from './Pages/Blog';
import AboutUs from './Pages/AboutUs';
import BlogDetails from './Pages/BlogDetails';
import Contact from './Pages/Contact';

function App() {
  return (

    <>
      <BrowserRouter>
        {/* <Loading /> */}
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={AboutUs} />
          <Route path="/services" Component={Services} />
          <Route path="/service/:serviceSlug" Component={ServiceDetails} />
          <Route path="/blog" Component={Blogs} />
          {/* <Route path="/our-team" Component={OurTeam} />
          <Route path="/case-study" Component={CaseStudy} />
          <Route path="/case-study/:caseStudySlug" Component={CaseDetails} />
          <Route path="/blog/:blogSlug" Component={BlogDetails} />
          {/* <Route path="*" Component={Home} /> */}
          <Route path="/contact" Component={Contact} />
        </Routes>
        {/* <ScrollToTop /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
