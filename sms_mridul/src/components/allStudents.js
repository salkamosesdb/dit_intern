import axios from 'axios';
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {Modal,Button} from 'react-bootstrap'

const AllStudents=()=>{
  const [show, setShow] = useState(false);
  const [data,setData]=useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [stuData,setStuData]=useState('')
  const [marks,setMarks]=useState('');
  const [refresh,setRefresh]=useState(false);

  useEffect(()=>{
      const dash=async()=>{
           const res=await axios.get("http://localhost:5000/login/teacher/teacherdashboard/displayallstudent")
           setStuData(res.data)
      }
      dash()
  },[refresh])

  const DeleteHandler=async(id)=>{
         const {data}=await  axios.delete("http://localhost:5000/login/teacher/teacherdashboard/delete_student/"+id)
         alert("Student Successfully Deleted")
         setRefresh(!refresh)
  }

  const UpdateHandler=async()=>{
         const {res}=axios.patch("http://localhost:5000/login/teacher/teacherdashboard/update_marks",{email:data.email,subjects:marks})
         handleClose()
         alert("Marks Successfully Updated")
         setRefresh(!refresh)
   }

    return(
        <>
          <div className="d-flex justify-content-center align-items-center text-center" style={{width:'100vw',height:'100vh'}}>
               <table style={{width:"80%"}}>
                  <tr>
                    <th className="bg-primary text-white py-3 px-1">Sr.no</th>
                    <th className="bg-primary text-white py-3 px-1">Name</th>
                    <th className="bg-primary text-white py-3 px-1">Class</th>
                    <th className="bg-primary text-white py-3 px-1">Sub1</th>
                    <th className="bg-primary text-white py-3 px-1">Sub2</th>
                    <th className="bg-primary text-white py-3 px-1">Sub3</th>
                    <th className="bg-primary text-white py-3 px-1">Email</th>
                    <th className="bg-primary text-white py-3 px-1">Actions</th>
                  </tr>
                 {stuData && stuData.map((data,index)=>{
                  return(
                    <tr >
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data.class}</td>
                    <td>{data.subjects.sub1}</td>
                    <td>{data.subjects.sub2}</td>
                    <td>{data.subjects.sub3}</td>
                    <td>{data.email}</td>
                    <td className="px-1 py-2"><button className="btn btn-primary" onClick={()=>{setData(data);handleShow()}}>Update Marks</button><button className="btn btn-danger ml-3" onClick={()=>DeleteHandler(data._id)}>Delete Student</button></td>
                  </tr>
                  )
                 })}

               </table>
          </div>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
               <div className='form-group'>
                 <lable>Sub 1</lable>
                 <input className='form-control' type="number" placeholder='Type Sub1 Marks' name="sub1" onChange={(e)=>setMarks({...marks,[e.target.name]:e.target.value})}/>
               </div>
               <div className='form-group'>
               <lable>Sub 2</lable>
               <input className='form-control' type="number" placeholder='Type Sub2 Marks' name="sub2" onChange={(e)=>setMarks({...marks,[e.target.name]:e.target.value})} />
             </div>
             <div className='form-group'>
             <lable>Sub 3</lable>
             <input className='form-control' type="number" placeholder='Type Sub3 Marks' name="sub3" onChange={(e)=>setMarks({...marks,[e.target.name]:e.target.value})} />
           </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  onClick={UpdateHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default AllStudents