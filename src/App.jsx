import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Realtors from "./components/Header/Realtors/Realtors";
import Homes from "./components/Homes/Homes";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Story from "./components/Story/Story";
import GridContainer from "./layout/GridContainer";

const App = () => {
  return (
    <GridContainer>
      <Navigation />
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </GridContainer>
  );
};

export default App;
