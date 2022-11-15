// const [name,setName]=useState("")
  // const [email,setEmail]=useState("")
  // const [contact,setContact]=useState("")
  // const [password,setPassword]=useState("")

  const[data,setData]=useState({
    name:"",email:"",contact:"",password:""
})

const handleChange = (e) => {
  const value = e.target.value;
  setData({
    ...data,
    [e.target.name]: value
  });
};

  // async function Submit()
  // {
  //      let item={name,email,contact,password};
  //     //   fetch(`https://technoithub.in/api/ManagerRegister.php`, {
  //     //       headers : { 
  //     //         'Content-Type': 'application/json',
  //     //         'Accept': 'application/json'
  //     //        },
  //     //        method:'POST',
  //     //        body: JSON.stringify({item}),
      
  //     //     })
  //     //     .then((response) => response.json())
  //     //     .then((messages) => {console.log("messages");});
     
     
  //     let result=axios.post(`https://technoithub.in/api/ManagerRegister.php`,item)
  //                                 .then((response)=>{console.log(response.status);
  //                                   console.log(response.data.token);
  //                                 })
  //      //result=await result.json();
  //      console.log("result",result)
  //       }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name:data.name,
     email: data.email,
     contact:data.contact,
      password: data.password
    };
    console.log(data)
    axios.post("https://technoithub.in/api/ManagerRegister.php", userData).then((response) => {
      console.log(response)
      // console.log(response.status);
      // console.log(response.data.token);
    });
    //console.log(result)
  };