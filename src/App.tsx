import Router from "./routes/routes";
import { Provider } from "react-redux";
import "./styles/index.scss";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
