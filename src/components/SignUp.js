import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function SignUp() 
{
 
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [contact,setContact]=useState("")
  const [password,setPassword]=useState("")

  const register=()=>{
      axios.post("http://localhost:3000/register",{
        name:name,
        email:email,
        contact:contact,
        password:password
      }).then((response) => {
            console.log(response);
      });
  };

//   const[data,setData]=useState({
//     name:"",email:"",contact:"",password:""
// })

// const handleChange = (e) => {
//   const value = e.target.value;
//   setData({
//     ...data,
//     [e.target.name]: value
//   });
// };

//   // async function Submit()
//   // {
//   //      let item={name,email,contact,password};
//   //     //   fetch(`https://technoithub.in/api/ManagerRegister.php`, {
//   //     //       headers : { 
//   //     //         'Content-Type': 'application/json',
//   //     //         'Accept': 'application/json'
//   //     //        },
//   //     //        method:'POST',
//   //     //        body: JSON.stringify({item}),
      
//   //     //     })
//   //     //     .then((response) => response.json())
//   //     //     .then((messages) => {console.log("messages");});
     
     
//   //     let result=axios.post(`https://technoithub.in/api/ManagerRegister.php`,item)
//   //                                 .then((response)=>{console.log(response.status);
//   //                                   console.log(response.data.token);
//   //                                 })
//   //      //result=await result.json();
//   //      console.log("result",result)
//   //       }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       name:data.name,
//      email: data.email,
//      contact:data.contact,
//       password: data.password
//     };
//     console.log(data)
//     let result=axios.post("https://technoithub.in/api/ManagerRegister.php", userData).then((response) => {
//       console.log(response)
//       // console.log(response.status);
//       // console.log(response.data.token);
//     });
//     console.log(result)
//   };
  



  
return(
 <section>
    <div className='bodys'>
    <div className="container">
      <div className="row abc">
        <div className="formwala col-lg-6 col-md-6 col-12">
      
    <h1 id="heading1">Sign Up</h1>
    <div className="form-group">
    <label htmlFor="name" className="font-weight-bold">Name</label>
    <input type="text" name="name"
            
            onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="Enter name" id="name" />
  </div>
  <div className="form-group">
    <label htmlFor="email" className="font-weight-bold">Email</label>
    <input type="text" name="email"  onChange={(e)=>{setEmail(e.target.value)}}  className="form-control" placeholder="Enter email" id="email" />
  </div>
  <div className="form-group">
    <label htmlFor="contact" className="font-weight-bold">Contact Number</label>
    <input type="text" name="contact"  onChange={(e)=>{setContact(e.target.value)}} className="form-control" placeholder="Enter mobile number" id="mobile" />
  </div>
  <div className="form-group">
    <label htmlFor="password" className="font-weight-bold">Password</label>
    <input type="password" name="password"  onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Set your password" id="password" />
  </div>
  
  <div className='form-group'>
  <button type="submit"  name="btn_signup" className="btn btn-warning font-weight-bold mx-3" onClick={register}><Link to="/" className='ssl'><span className='mx-3'>Sign Up</span></Link></button>
     <span id="abcd">Already registered ?<Link to="/" className='sl'><span className='mx-3'>Log in</span></Link> </span> 
  </div> 
        
        </div>
      </div>
    </div>
    </div>
  </section>
)
}