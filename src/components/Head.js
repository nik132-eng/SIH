import React,{ useState,useEffect } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Head()
{
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
},[])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return(
<>
<nav className="navbar navbar-expand-lg navbar-light  fixed-top">
  <div className="container-fluid">
    <button className="btn btn-primary navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
</button>


    <Link className="navbar-brand fw-bold text-uppercase text-light me-auto" to="/dashboard">Dashboard</Link>
    <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        {/* <li className="nav-item">
          <a className="nav-link active fw-bold text-uppercase text-dark" aria-current="page" href="/">Profile</a>
        </li> */}
        <li className="nav-item fw-bold text-uppercase ">
          <a className="nav-link text-dark" href="/">Sign out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="offcanvas offcanvas-show sidebar-nav  text-white" tabndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
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
    <hr/>

    <table className="vedtee">
      <tbody>
         {
          
         data.map((Workers)=>(
            <tr>
              <td><Link className="fw-bold mx-3 my-3 jk text-uppercase text-center text-white" 
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
{/* <main className="mt-5 pt-3">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center">Oxygen-level</div>
  <div className="card-body">
    <h5 className="card-title text-center">95</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center">Ceiling motion sensor</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center">Motion Sensor</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
</div>
<br/>
<div className="row">
      <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center">Body temperature</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center">Motion sensor</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center">Body-Temperature</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
</div>
<br/>
<div className="row">
      <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center">Header</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center ">Header</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem"}}>
  <div className="card-header fw-bold text-center">Header</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
</div>
  </div>
</main> */}
</>
);
}


export default Head;