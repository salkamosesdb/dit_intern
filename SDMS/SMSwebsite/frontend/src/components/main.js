const Main = () => {
return (
<>
   <div class="container-fluid bg-primary">
      <div class="py-1 px-1  bg-primary">
         <div class="row">
            <div class=" col-md-2 mx-auto">
               <img src="school.png" style={{ width: '100px' , height: '100px' }} />
            </div>
            <div class=" col-md-9 mx-auto">
               <h6 class="display-4 font-weight-bold">STUDENT MANAGEMENT SYSTEM</h6>
            </div>
         </div>
      </div>
   </div>
&nbsp;&nbsp;&nbsp;&nbsp;
   <body>
      <div class="container">
         <div class="jumbotron-fluid">
            <center>
               <form action="" method="post">
                  <div class="w3-container  w3-teal">
                     <a href="/loginStu">
                        <input type="button" class="btn btn-primary t" value="Login as Student" /> </a>
                     <a href="/loginTea">
                        <input type="button" class="btn btn-primary" value="Login as teacher" /> </a>

                     <a href="/registerTeacher">
                        <input type="button" class="btn btn-primary " value="Rergister as teacher" /> </a>

                  </div>
               </form>
            </center>
         </div>
      </div>
    </body>  
</>
)
}

export default Main