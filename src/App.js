import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from "./Components/Profile/Profile";
import style from './App.module.scss';
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <Header />
        <Navbar />
        <Route path="/Profile/" component={Profile} />
        {/* <Route path="/Messages/" component={Messages} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
