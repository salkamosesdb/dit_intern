import { useState } from "react"
import axios from 'axios'
const LoginStu = () => {
    const [stuLogin,setStuLogin]=useState('')

    const inputHandler=(e)=>setStuLogin({...stuLogin,[e.target.name]:e.target.value})

    const submitHandler=async()=>{
        console.log(stuLogin)
        const res=await axios.post("http://localhost:5000/login/student",stuLogin)
        if(res.data.success){
            localStorage.setItem("email",stuLogin.email)
            localStorage.setItem("id",stuLogin._id)
            window.location.href="/studashboard"
        }
    }

    return (
        <>

                <div className="container-fluid bg-warning ">
                    <div className="py2 px-2  bg-warning">
                        <div className="row">
                            <div className=" col-md-2 mx-auto">
                                <img src="school.png" style={{ width: '100px', height: '100px' }} />
                            </div>
                            <div className=" col-md-10 mx-auto">
                                <h4 className="display-4 font-weight-bold">STUDENT MANAGEMENT SYSTEM</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container1 bg-light">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card shadow ">
                                <div className="card-header bg-primary">
                                    <h1 className="card-title text-center text-white">-:SIGN IN:- </h1>
                                </div>
                                <div className="card-body">
                                    <form action="" method="post">

                                        <div className="form-group">
                                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                                            <label for="name" className="font-weight-bold text-black">Username:</label>
                                            <input className="form-control border border-primary" type="text" name="username"
                                                id="username" placeholder="eg.20mridul06" required onChange={inputHandler} />
                                            <div className="valid-feedback">Valid.</div>
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>
                                        <div className="form-group">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <label for="name" className="font-weight-bold text-black">EMAIL:</label>
                                            <input className="form-control border border-primary" type="text" name="email" id="username"
                                                placeholder="abc@gmail.com" required onChange={inputHandler} />
                                            <div className="valid-feedback">Valid.</div>
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>

                                        <div className="form-group">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <label for="name" className="font-weight-bold text-black">Password:</label>
                                            <input className="form-control border border-primary" type="password" name="password" id="password"
                                                placeholder="****" required onChange={inputHandler} />
                                            <div className="valid-feedback">Valid.</div>
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr />
                          <button type="submit" className="btn btn-primary margin-left" value="submit" onClick={submitHandler}>SIGN IN</button>   
                    </div>
                </div>
            </div>
      </>
   )
}

export default LoginStu