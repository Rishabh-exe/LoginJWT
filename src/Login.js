import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {

    const history = useNavigate()

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/",{
                email,pass
            }).then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User Not Sign up")
                }
            })
            .catch(e=>{
                alert("wrong Details")
                console.log(e);
            })

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form action='POST'>
                <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'/><br></br>
                <input type='password' onChange={(e) => {setPass(e.target.value)}} placeholder='Password'/>
                <br></br>
                <input type='submit' onClick={()=>submit()}/>

            </form>
            <br></br>
            <p>OR</p>
            <br></br>
            <NavLink to={"/signup"}>Sign UP </NavLink>
        </div>
    )
}

export default Login