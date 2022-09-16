import '../styles/Login.css'
import { useState } from 'react'

function Login() {
    const [data,setData] = useState({username:"", password:""});
    const {username,password} = data;
    const changeHandler = e => {setData({...data,[e.target.name]:[e.target.value]});}
    const submitHandler = e => {e.preventDefault(); console.log(data);}

    return(
        <div className='login-form'>
            <form onSubmit={submitHandler}>
         
                    <input className='email' type="text" name="username" value={username} placeholder="EMAIL" onChange={changeHandler}/>
                    <input className='password' type="password" name="password" value={password} placeholder="MOT DE PASSE" onChange={changeHandler}/><br/>
             
                <button type="submit" name="submit" className='login-button'>Connexion</button>
            </form>
        </div>
    )
}

export default Login