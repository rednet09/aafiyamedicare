import "./App.css";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hospitals from "./components/Hospitals";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Doctors />
      <Hospitals />
      <Footer />
    </>
  );
}

export default App;
