import { Provider } from 'react-redux';
import './App.css';
import UserDetails from './lesson5/UserDetails';
import store from './redux/store';
import UserDetails2 from './lesson5/UserDedails2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './lesson4/Login';
import { About } from './lesson4/About';
import { History } from './lesson4/History';
import { UseRefExa } from './lesson7/UseRefExa';
import { ReacthookFormExa } from './lesson7/ReactHookFormExa';
import NavigateWithLink from './lesson8/NavigateWithLink';
import UseIdExample from './lesson8/UseIdExample';
function App() {

  return (
    <div >
      <header>
        <center>
        {/* <Provider store={store}>
          <UserDetails></UserDetails>
          <p>///////////////////////////</p>
          <UserDetails2></UserDetails2>
        </Provider> */}


        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login></Login>}></Route>
            <Route exact path="/about/:userName/:password" element={<About></About>}></Route>
            {/* <Route exact path="/history" element={<History></History>}></Route> */}
          </Routes>
        </BrowserRouter>

        {/* <UseRefExa></UseRefExa> */}

        {/* <ReacthookFormExa></ReacthookFormExa> */}

        {/* <NavigateWithLink></NavigateWithLink> */}
        {/* <UseIdExample></UseIdExample> */}
        </center>
      </header>
    </div>
  );
}

export default App;
