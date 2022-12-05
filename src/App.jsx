import Footer from "./components/footer";
import Header from "./components/header";
import SectionMain from "./components/main";

import "./style/style.css";

export default function App () {

  return (
    <div className="container">
      <Header/>
      <SectionMain />
      <Footer />
    </div>
  );
}


