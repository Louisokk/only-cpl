import './App.scss';
import Login from './Components/Login/Login';
import Panel from "./Components/Panel/Panel"
import { useState } from 'react';
import classNames from 'classnames';

function App() {

  const [data, setData] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <div className={classNames({
      "App": true,
      "App--loggedIn": loggedIn
    })}>
      {loggedIn=== false && (<Login setData={setData} setLoggedIn = {setLoggedIn}></Login>)}

      {loggedIn === true && (
        <Panel data={data} conversionFlow={data.conversionFlow}></Panel>
      )}
    </div>
  );
}

export default App;
