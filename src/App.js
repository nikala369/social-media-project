import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import style from "./App.module.scss";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <Header />
        <Navbar />
        <Route
          path="/Profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/Dialogs"
          render={() => (
            <Messages
              dispatch={props.dispatch}
              state={props.state.messagesPage}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
