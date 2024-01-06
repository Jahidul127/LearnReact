import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContexProvider from "./context/UserContexProvider";

function App() {
  return (
    <UserContexProvider>
      <h1>Hello we are using react</h1>
      <Login />
      <Profile />
    </UserContexProvider>
  );
}

export default App;
