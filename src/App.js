import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import style from "./App.module.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <Header />
        <Navbar />
        <Route
          path="/Profile"
          render={() => <Profile state={props.state.profilePage}
                        addPost={props.addPost} />}
        />
        <Route
          path="/Dialogs"
          render={() => (
            <Messages
              state={props.state.messagesPage}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;