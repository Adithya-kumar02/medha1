import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Sections/Home/Home';
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section7";
import Section8 from "./Sections/Section8";
import Team from "./Sections/team"; // Make sure this path is correct
import Cultural from "./Sections/Cultural"; // Make sure this path is correct
import Register from "./Sections/Register"; // Make sure this path is correct



const styles = {
  App: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url("./images/bg5.png")`,
    backgroundPosition: "100% 100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  Layout: {
    width: "100%",
    minHeight: "100vh",
  }
};

function App() {
  return (
    <Router>
      <div className="App" style={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div style={styles.Layout}>
              <Home />
              <Section2 />
              <Section3 />
              <Section5 />
              <Section8 />
              <Section7 />
              <Section6 />
            </div>
          } />
          <Route path="/team" element={<Team />} />
          <Route path="/Cultural" element={<Cultural />} />
          <Route path="/Register" element={<Register />} />

          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;