import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Dash2=()=>{
    const email=localStorage.getItem("email")
    const [dashData,setDashData]=useState('')
    useEffect(()=>{
        const dash=async()=>{
             const res=await axios.post("http://localhost:5000/login/teacher/teacherdashboard",{email:email})
             setDashData(res.data[0])
        }
        dash()
    },[])

    return(
        <div>
    <div class="container-fluid bg-primary">
        <div class="py-1 px-1  bg-primary">
            <div class="row">
                <div class=" col-md-2 mx-auto">
                    <img src="school.png" style={{width:"200px", height:"200px"}}/>
                </div>
                <div class=" col-md-9 mx-auto">
                    <h6 class="display-4 font-weight-bold">STUDENT MANAGEMENT SYSTEM</h6>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="card shadow">
            <div class="card-header bg-success">
                <h1 class="card-title text-center text-white">-teachers profile-</h1>
            </div>
            <div class="card-body">
                <form action="">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <img src="profile.png" style={{width:"200px", height:"200px"}}/>
                        </div>
                    </div>
                    <div class="row">

                        <div class="form-group col-md-6">
                            {dashData && <label for="name" class="font-weight-bold">Name: {dashData.name}</label>}

                        </div>
                        <div class="col-md-6">
                            {dashData && <label for="name" class="font-weight-bold">Email: {dashData.email}</label>}

                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="class" class="font-weight-bold"> class_taken: </label>
                        </div>
                        
                    </div>
                    <div>

                        <p id="view_mark"></p>
                        <Link to="/allstudents"><button  class="btn btn-success float-center"
                        >all students</button></Link>
                        <p id="all student"></p>
                        <p id="all student"></p>

                        
                    </div>
                    <hr/>
                    <div>
                       
                          <Link to="/editteacher"> <input type="button" class="btn btn-primary float-right" value="Edit profile"/> </Link> 
                    </div>
                    
                   <Link to="/registerstudents"> <button type="submit" class="btn btn-success float-center">register a student</button></Link>

                </form>
            </div>

        </div>
    </div>
    </div>

    )
}

export default Dash2; 