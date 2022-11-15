import React,{useState,useEffect} from 'react';
//import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

//import Head from './Head';

export default function Main(props) {
    const [show, setShow] = useState(false);

    const[data,setData] = useState([]);
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
  },[]);

  const[sensorData,setSensorData] = useState([{}]);
    const fetchSensorData = async () =>{
   await fetch("https://technoithub.in/api/view_ir.php")
    .then((response)=>response.json())
    .then((json)=>{
      setSensorData(json.IR)
      console.log(json);
    })
    };
    useEffect(()=>
  {
    fetchSensorData();
  },[]);

  const[sensorPIRData,setSensorPIRData] = useState([{}]);
    const fetchSensorPIRData = async () =>{
   await fetch("https://technoithub.in/api/view_pir.php")
    .then((response)=>response.json())
    .then((json)=>{
      setSensorPIRData(json.PIR)
      console.log(json);
    })
    };
    useEffect(()=>
  {
    fetchSensorPIRData();
  },[]);


  const[sensorTempData,setSensorTempData] = useState([{}]);
  const fetchSensorTempData = async () =>{
 await fetch("https://technoithub.in/api/view_temp.php")
  .then((response)=>response.json())
  .then((json)=>{
    setSensorTempData(json.TEMP)
    console.log(json);
  })
  };
  useEffect(()=>
{
  fetchSensorTempData();
},[]);


const[sensorGasData,setSensorGasData] = useState([{}]);
  const fetchSensorGasData = async () =>{
 await fetch("https://technoithub.in/api/view_gas.php")
  .then((response)=>response.json())
  .then((json)=>{
    setSensorGasData(json.GAS)
    console.log(json);
  })
  };
  useEffect(()=>
{
  fetchSensorGasData();
},[]);


  const params = useParams();

  useEffect(()=>{
     console.log(params.ir_value);
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <>
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
                    <input type="text" className="form-control" />
                  </div>
                  <div className form-group>
                    <label>Phone number</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className form-group>
                    <label>Age</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className form-group>
                    <label>Position</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className form-group>
                    <label>Area</label>
                    <input type="text" className="form-control" />
                  </div>
                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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

<main className="mt-5 pt-3">
          <br /><br/><br/>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">IR Sensor</div>
  <div className="card-body">
    <h5 className="card-title text-center">
         <p>{sensorData && sensorData[0].IR_VALUE}</p>
         {/* {
          
          sensorData.map((val)=>{
            return(
                <p>{val.IR_VALUE}</p>
          )})
          } */}
        {/* <script>console.log(sensorData[0].IR_VALUE);</script>  */}
    </h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">PIR sensor</div>
  <div className="card-body">
    <h5 className="card-title text-center">
    <p>{sensorPIRData && sensorPIRData[0].PIR_VALUE}</p>
    </h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Surrounding Temperature Sensor</div>
  <div className="card-body">
    <h5 className="card-title text-center">
    <p>{sensorTempData && sensorTempData[0].TEMPERATURE_VALUE}</p>
    </h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
</div>
<br/>
<div className="row">
      <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Humidity Value</div>
  <div className="card-body">
    <h5 className="card-title text-center">
    <p>{sensorTempData && sensorTempData[0].HUMIDITY_VALUE}</p>
    </h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Gas sensor</div>
  <div className="card-body">
    <h5 className="card-title text-center">
    <p>{sensorGasData && sensorGasData[0].GAS_VALUE}</p>
    </h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Oxygen Sensor</div>
  <div className="card-body">
    <h5 className="card-title text-center">
    <p>Coming Soon</p>
    </h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
</div>
<br/>
<div className="row">
<div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Vibration sensor</div>
  <div className="card-body">
    <h5 className="card-title text-center">
      <p>Coming Soon</p>
    </h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Water Level sensor</div>
  <div className="card-body">
    <h5 className="card-title text-center">
    <p>Coming Soon</p>
    </h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">RFID</div>
  <div className="card-body">
    <h5 className="card-title text-center"><p>Coming Soon</p></h5>
          
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
    </div>
  </div>
</div>

<Link className="btn btn-primary" to="/history" role="button" id='history'>History</Link>
 
  </div>
</main>


 

    </div>
    </>
  )
}
