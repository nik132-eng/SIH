import React,{ useState ,useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HistoryTable from './HistoryTable';

export default function History() {
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

 const params = useParams();

 useEffect(()=>{
    console.log(params.worker_name);
 })

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
<div>
    <HistoryTable />
    



</div>
    </div>
  )
}
