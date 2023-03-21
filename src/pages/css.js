import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/main-content";
import { Helmet, HelmetProvider } from "react-helmet-async";


function Css(){
  return (
    <HelmetProvider>
      <Helmet><title>CSS Page</title></Helmet>
    
      <Header/>

      <MainContent pageName="CSS"/>

      <Footer/>
    </HelmetProvider>
  );
}

export default Css;
