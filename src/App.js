import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <Analytics />
    </Provider>
  );
}

export default App;
