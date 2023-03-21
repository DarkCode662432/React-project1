import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/main-content";
import { Helmet, HelmetProvider } from "react-helmet-async";


function JavaScript(){
  return (
    <HelmetProvider>
      <Helmet><title>JavaScript Page</title></Helmet>

      <Header/>

      <MainContent pageName="Java Script"/>


      <Footer/>
    </HelmetProvider>
  );
}

export default JavaScript;
