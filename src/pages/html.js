import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/main-content";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Html(){
  return (
    <HelmetProvider>
      <Helmet><title>HTML Page</title></Helmet>

      <Header/>

      <MainContent pageName="HTML"/>


      <Footer/>
    </HelmetProvider>
  );
}

export default Html;
