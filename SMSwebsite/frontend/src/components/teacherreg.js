import { useState } from "react"
import axios from 'axios'
const Teacherreg=()=>{
    const [registerData,setRegisterData]=useState('')
    const inputHandler=(e)=>{setRegisterData({...registerData,[e.target.name]:e.target.value})}
    const submitHandler=async(e)=>{
        e.preventDefault()
        console.log(registerData)
        const res=await axios.post('http://localhost:5000/register',{...registerData})
        alert("user registered success fully")
    }

    return(
       <>
       
    <div className="container-fluid bg-primary">
        <div className="py-1 px-1  bg-primary">
            <div className="row">
                <div className=" col-md-2 mx-auto">
                    <img src="logo-1.png" style={{width:'200px',height:'200px'}}/>
                </div>
                <div className=" col-md-9 mx-auto">
                    <h6 className="display-4 font-weight-bold">STUDENT MANAGEMENT SYSTEM</h6>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="card shadow">
            <div className="card-header bg-success">
                <h1 className="card-title text-center text-white">-Teacher Register-</h1>
            </div>
            <div className="card-body">
                <form action="">

                    <div className="row">
                        
                    </div>
                    <div className="form-group">
                        <label for="name" className="font-weight-bold ">username:</label>
                        <input className="form-control border border-primary" type="text" name="username" id="username"
                            placeholder="no space" onChange={inputHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="name" className="font-weight-bold ">password:</label>
                        <input className="form-control border border-primary" type="text" name="password" id="password"
                            placeholder="no space" onChange={inputHandler}/>
                                                <div className="form-group">
                        <label for="name" className="font-weight-bold "> confirm password:</label>
                        <input className="form-control border border-primary" type="text" name="password" id="password"
                            placeholder="no space" onChange={inputHandler}/>
                    <div className="form-group">
                        <label for="name" className="font-weight-bold">EMAIL:</label>
                        <input className="form-control border border-primary" type="text" name="email" id="email"
                            placeholder="*****@gmail.com" onChange={inputHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="name" className="font-weight-bold ">name:</label>
                        <input className="form-control border border-primary" type="text" name="name" id=""
                            placeholder="no space" onChange={inputHandler}/>
                            </div>
                    
                   
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6 ">
                            <label for="classes" className="font-weight-bold">class</label>
                            <input className="form-control border border-primary input-lg" type="text" name="classes"
                                id="classes" placeholder="" onChange={inputHandler}/>

                        </div>
                    </div>
                    
                    <hr/>
                    <button type="submit" className="btn btn-success float-center" onClick={submitHandler}>SUBMIT</button>

               
            </div>
            </form>
        </div>
    </div>
    </div>

       </>
    )
}

export default Teacherreg