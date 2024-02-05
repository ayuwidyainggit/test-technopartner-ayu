import "./App.css";
import WebRoute from "./route/WebRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <WebRoute />
    </Provider>
  );
}

export default App;
