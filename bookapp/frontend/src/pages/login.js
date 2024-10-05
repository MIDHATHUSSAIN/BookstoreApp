import { useState } from "react";
import FORM from "../components/login/form";
import axios from "axios";

function LOGIN (){
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const  handleLogin = async ()=>{
            await axios.post('http:localhost:5000/auth/login',{email,password})
            setemail("")
            setpassword("")
    }
    return(
        <div>
              <FORM email = {email}
                    setemail = {setemail}
                    password = {password}
                    setpassword = {setpassword}
                    onSubmit = {handleLogin}
                    label = {"Sign In"}

              ></FORM>
        </div>
    )
}
export default LOGIN;