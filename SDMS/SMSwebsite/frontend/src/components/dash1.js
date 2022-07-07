import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {Modal,Button} from 'react-bootstrap';


const Dash1 = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const email=localStorage.getItem("email")
    const [dashData,setDashData]=useState('')

    useEffect(()=>{
        const dash=async()=>{
            console.log(email)
             const res=await axios.post("http://localhost:5000/login/student/studentdashboard",{email:email})
             console.log(res.data)
             setDashData(res.data)
        }
        dash()
    },[])
    return(

<div>
    <div class="container-fluid bg-primary">
        <div class="py-1 px-1  bg-primary">
            <div class="row">
                <div class=" col-md-2 mx-auto">
                    <img src="school.png" style={{ width:'200px',height:'200px'}}/>
                </div>
                <div class=" col-md-9 mx-auto">
                    <h6 class="display-4 font-weight-bold">STUDENT MANAGEMENT SYSTEM</h6>
                </div>
            </div>
        </div>
    </div>

    {dashData && <div class="container">
        <div class="card shadow">
            <div class="card-header bg-success">
                <h1 class="card-title text-center text-white">-Students profile-</h1>
            </div>
            <div class="card-body">
                <form action="">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <img src="profile.png" style={{ width:"200px", height:"200px"}}/>
                        </div>
                    </div>
                    <div class="row">

                        <div class="form-group col-md-6">
                            <label for="name" class="font-weight-bold">Name: {dashData.name}</label>

                        </div>
                        <div class="col-md-6">
                            <label for="name" class="font-weight-bold">Email:{dashData.email}</label>

                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="class" class="font-weight-bold"> class: {dashData.class} </label>
                        </div>
                        <div class=" col-md-6">
                            <label for="Roll_no" class="font-weight-bold"> Section: {dashData.section} </label>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-success float-center"
                            onClick={(e)=>{e.preventDefault();handleShow()}}>view_mark</button>
                        
                        
                    </div>
                    <hr/>
                    <div>
                        <Link to="/editstudent">
                            <input type="button" class="btn btn-primary float-right" value="Edit profile"/> </Link>
                    </div>
                  

                </form>
            </div>

        </div>
        </div>}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {dashData && <Modal.Body>
             <div className='form-group'>
               <lable>Sub 1</lable>
               <input className='form-control' type="number" placeholder='Type Sub1 Marks' name="sub1" disabled  value={dashData.subjects.sub1}/>
             </div>
             <div className='form-group'>
             <lable>Sub 2</lable>
             <input className='form-control' type="number" placeholder='Type Sub2 Marks' name="sub2" disabled value={dashData.subjects.sub2}/>
           </div>
           <div className='form-group'>
           <lable>Sub 3</lable>
           <input className='form-control' type="number" placeholder='Type Sub3 Marks' name="sub3" disabled value={dashData.subjects.sub3} />
         </div>
        </Modal.Body>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
</div>
    )
}

export default Dash1;