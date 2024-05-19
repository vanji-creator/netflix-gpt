import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import Contact from "./components/Contact";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
