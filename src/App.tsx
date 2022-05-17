import { Provider } from "react-redux";
import store from "./redux/store";
import AppRoutes from "./Routes";

export default function App() {
  return <Provider store={store}>
      <AppRoutes />
  </Provider>
}