import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/main-content";

function Home(){
  return (
    
    <HelmetProvider>
      <Helmet><title>Home Page</title></Helmet>
      
      <Header/> 
    
      <MainContent pageName="HOME"/>
    
      <Footer/>
    </HelmetProvider>
  );
}

export default Home;
