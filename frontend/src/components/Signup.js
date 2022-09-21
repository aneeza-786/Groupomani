import '../styles/Login.css'
import {useState} from 'react'

function Signup() {
    const [data,setData] = useState({email:"", password:""});
    const {email,password} = data;
    console.log(data);
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
};

export function createAccount(data){
 return fetch('http://localhost:3000/api/auth/signup', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({data})
 })
   .then((response) => response.json()
    .then(({data}) => console.log(data))
    .catch((error) => console.log(error)))
}

export default Signup