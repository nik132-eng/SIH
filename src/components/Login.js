import React,{useState} from 'react'
//import {Form,Button} from 'react-bootstrap'
//import image from './src/cool-background.png';
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

export default function Login() {
   
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
   
  let history=useHistory();
   const login=()=>{
    axios.post("http://localhost:3000/login",{
      
      email:email,
      password:password
    }).then((response) => {

           if(response.data.message)
           {
               alert(response.data.message);
           }
           else{
              history.push("/dashboard");
           }
    });
};

  return (
      <>


      {/* <div className='body'>
       <form>
    <div className="loginbody">
        <div className='container'>
            <h1 id="heading1">Login</h1>
        <label htmlhtmlFor="email" id="label"><b>Email</b></label>
            <input type="email" placeholder="Enter email-id" name="email" required/>

        <label htmlhtmlFor="psd" id="label"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psd" required/>
                    
        <button type="submit">Login</button>
        </div>

        <div className="container"  style={{backgroundColor:'#f1f1f1'}}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psd">Forgot <a href="/">password?</a></span>
        <label><a href="/SignUp">Sign Up</a></label>
        </div>
     </div>
     </form>
     </div>

     //  Reactbootstrap

   <h1 id='heading1'>Login</h1> 
<div className="bodyl">
    
    <div className="container">
    <div className="row abc">
        <div className="formwala col-lg-6 col-md-6  col-12">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            <Link to="/signup">Sign Up</Link>
        </Form.Group> 
        <Button variant="primary" type="submit" className='button'>
            Submit
        </Button>
        </Form>
        </div>
        </div>
</div>
</div>    



  */}

<section>
    <div className='bodyl'>
    <div className="container">
      <div className="row abc">
        <div className="formwala col-lg-6 col-md-6 col-12">

    <h1 id='heading1'>Log In</h1>
    <div className="form-group">
    <label htmlFor="email" className="font-weight-bold">Enter email</label>
    <input type="email" name="email"   onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Enter email" id="email" />
  </div>
  <div className="form-group">
    <label htmlFor="password" className="font-weight-bold">Password</label>
    <input type="password" name="password"  onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Enter your password" id="password" />
  </div>
  <div className='form-group'>
  <button type="submit" onClick={login} name="btn_login" className="btn btn-warning font-weight-bold mx-3">Log In</button>
 <span id="abcd"> Not Registered yet ?<Link to="/signup" className='sl'><span className='mx-3'>Sign Up</span></Link></span>
 
 </div>

        </div>

    
      
      </div>
    </div>
    </div>
  </section>



 
  </>
  )
}

