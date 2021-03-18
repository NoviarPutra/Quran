import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComp from "./pages/Components/Navbar/NavbarComp";
import DetailChapter from "./pages/DetailChapter/DetailChapter";
import Quran from "./pages/Quran/Quran";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={Quran} />
        <Route exact path="/detail-chapter/:id" component={DetailChapter} />
      </Switch>
    </Router>
  );
}

export default App;
