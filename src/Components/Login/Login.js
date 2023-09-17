import React, {useState} from 'react'
import './Login.scss'
import Logo from "../../assets/onlycpl_transparent.PNG"

function Login({setData, setLoggedIn}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");


    const login = (username, password) => {
        fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify({
              username: username,
              password: password
            }),
            headers: {
              'Content-Type': 'application/json'
            },
          }).then((res) => {
            return res.json(); // Hier gibt es das JSON-Promise zurück
          }).then((data) => {
            console.log(JSON.parse(data)); // Hier können Sie auf die JSON-Daten zugreifen
            if(data.message) {
                setStatus(data.message);
            }else {
                setData(JSON.parse(data));
                setStatus("");
                setLoggedIn(true);
            }
          });
    }

  return (
    <div className='login'>
        <div className='container'>
            <div className='container__svgs'>
                <img className='container__svgs-logo' src={Logo}></img>
            </div>
            <div className='container__content'>
                <div className='container__form'>
                    <input type='text' name='username' placeholder='Username' className='container__inputField' onChange={(e)=>setUsername(e.target.value)} value={username}></input>
                    <input type='password' name='password' placeholder='Password' className='container__inputField' onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                    <input type='submit' value='Login' className='container__sumbitButton' onClick={()=>login(username, password)}></input>
                    <p className="status-message">{status}</p>
                </div>
                <div className='container__links'>
                    <a href='#emptyLink' className='container__link'>Need Account?</a>
                    <span className='container__separator'></span>
                    <a href='#emptyLink' className='container__link'>Register</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login