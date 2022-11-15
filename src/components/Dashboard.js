import React,{useState,useEffect} from 'react'
//import Head from './Head'
import  './dashboardcss.css'
import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {

  const [show, setShow] = useState(false);
  const[data,setData] = useState([]);
  const [username,setUserName]=useState("")
  const [phoneno,setPhoneno]=useState("")
  const [age,setAge]=useState("")
  const [position,setPosition]=useState("")
  const [area,setArea]=useState("")

    const fetchData = () =>{
    fetch("https://technoithub.in/api/fetch_workers.php")
    .then((response)=>response.json())
    .then((json)=>{
      setData(json.Workers)
    })
    };
    useEffect(()=>
  {
    fetchData();
  },[])

  


  const register=()=>{
    axios.post("http://localhost:3001/addworker",{
      username:username,
      phoneno:phoneno,
      age:age,
      position:position,
      area:area
    }).then((response) => {
          console.log(response);
    });
};


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>

      


<nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
  <div className="container-fluid">
    <button className="btn btn-primary navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
</button>
    <Link className="navbar-brand fw-bold text-uppercase text-light me-auto" to="/dashboard">Dashboard</Link>
    <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Link className="nav-link text-dark fw-bold" to="/">Sign out</Link>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item fw-bold text-uppercase ">
          <Link className="nav-link text-dark mx-3" to="/">Sign out</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="offcanvas offcanvas-start sidebar-nav  text-white" tabndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
   <div className="container">
<button className=" btn btn-light text-uppercase text-dark fw-bold xq" datatarget="#mymodel" datatoggle="modal" onClick={handleShow}>Add workers</button>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add workers details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
                  <div className form-group>
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={(e)=>{setUserName(e.target.value)}}/>
                  </div>
                  <div className form-group>
                    <label>Phone number</label>
                    <input type="text" className="form-control" onChange={(e)=>{setPhoneno(e.target.value)}}/>
                  </div>
                  <div className form-group>
                    <label>Age</label>
                    <input type="text" className="form-control" onChange={(e)=>{setAge(e.target.value)}}/>
                  </div>
                  <div className form-group>
                    <label>Position</label>
                    <input type="text" className="form-control" onChange={(e)=>{setPosition(e.target.value)}} />
                  </div>
                  <div className form-group>
                    <label>Area</label>
                    <input type="text" className="form-control" onChange={(e)=>{setArea(e.target.value)}} />
                  </div>
                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{
                register();
                handleClose();
          }}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  <div className="offcanvas-body">
    <div className="dis-grid xa">
    

    <table className="vedtee">
      <tbody>
         {
          
         data.map((Workers)=>(
            <tr>
              <td className='workertable'><Link className="fw-bold mx-3 my-3 jk text-uppercase text-center text-white" 
                to= {{
                pathname: `/main/${Workers.name}` 
              }}
              >{Workers.name}</Link><br/>
               </td>
            </tr>
         ))
         }
      </tbody>
   </table>

  </div>
  </div>
</div>
      


      
      <div className="container1">
<main className="mt-5 pt-3">
<div className="row">
  <div className="col-lg-6 col-md-6 col-12">
    <div className="card xyz">
      <div className="card-body bg-primary">
        <h2 className="card-title fw-bold text-center text-uppercase text-white">No of workers registered</h2>
        <p className="card-text text-center now">3</p>
      </div>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-12">
    <div className="card wl xyz">
      <div className="card-body">
        <h2 className="card-title fw-bold text-center text-uppercase text-white">warning levels</h2>
        <div className="wlt">
        <p className="fw-bold  text-uppercase text-white">Oxygen level must be:<i>90</i></p>
        <p className="fw-bold  text-uppercase text-white">Motion movement must be there within: <i>1hour</i></p>
        <p className="fw-bold  text-uppercase text-white">Heart-Beat must be between <i>60-100</i> beats per minute</p>
        <p className="fw-bold  text-uppercase text-white"></p>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
</div>
    </div>
  )
}
