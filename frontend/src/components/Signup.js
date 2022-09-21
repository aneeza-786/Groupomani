import '../styles/Login.css'
import { useState} from 'react'
import { createAccount } from "../services/signup";

function Signup() {
    const [data,setData] = useState({email:"", password:""});
    const {email,password} = data;
    const changeHandler = e => {setData({...data,[e.target.name]:[e.target.value]});}
    const submitHandler = e => {e.preventDefault(); createAccount();}

    return(
        <div className='login-form'>
            <form onSubmit={submitHandler}>
         
                    <input className='email' type="text" name="email" value={email} placeholder="EMAIL" onChange={changeHandler}/>
                    <input className='password' type="password" name="password" value={password} placeholder="MOT DE PASSE" onChange={changeHandler}/><br/>
             
                <button type="submit" name="submit" className='login-button'>S'inscrire</button>
            </form>
        </div>
    )
}

export default Signup