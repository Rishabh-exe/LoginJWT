import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 
function Signup() {
    const history = useNavigate()
    
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup",{
                email,pass
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User Already exists")
                    
                }
                else if(res.data=="notexist"){
                    history('/home',{state:{id:email}})
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
            <h1>Sign UP</h1>
            <form >
                <input type='email' onChange={(e) => { setemail(e.target.value) }} placeholder='Email'/><br></br>
                <input type='password' onChange={(e) => { setpass(e.target.value) }} placeholder='Password'/>
                <br></br>
                <input type='submit' onClick={()=>submit()}/>

            </form>
            <br></br>
            <p>OR</p>
            <br></br>
            <NavLink to={"/"}>LogIn </NavLink>
        </div>
    )
}

export default Signup