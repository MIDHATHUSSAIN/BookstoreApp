import { useState } from "react";
import FORM from "../components/login/form";
import axios from "axios";

function REGISTER (){
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const handleRegister = async()=>{
       await axios.post('http://localhost:5000/auth/register',{name,email,password}) 
       setname("")
       setemail("")
       setpassword("")
       alert("user register now login ")

    }
    return(
        <div>
              <FORM name = {name}
                    setname = {setname}
                    email = {email}
                    setemail = {setemail}
                    password = {password}
                    setpassword = {setpassword}
                    onSubmit = {handleRegister}
                    label = {"Sign Up"}
              ></FORM>
        </div>
    )
}
export default REGISTER;