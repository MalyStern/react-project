import { Provider } from 'react-redux';
import './App.css';
import store from "./redux/store"
import Navigator from "./project/Navigators"; 
function App() {
  return (
    <>
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
    </>
  );
}

export default App;
