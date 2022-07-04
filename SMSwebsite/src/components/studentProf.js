const StudentProf = () => {
    return (
        <>

            <div class="container-fluid bg-primary">
                <div class="py-1 px-1  bg-primary">
                    <div class="row">
                        <div class=" col-md-2 mx-auto">
                            <img src="logo-1.png" style={{ width: '200px', height: '200px' }} />
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
                        <h1 class="card-title text-center text-white">-Students profile-</h1>
                    </div>
                    <div class="card-body">
                        <form action="">

                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name" class="font-weight-bold">First Name:</label>
                                    <input class="form-control border border-primary" type="text" name="name" id="name"
                                        placeholder="Enter your name" />
                                </div>
                                <div class="col-md-6">
                                    <label for="name" class="font-weight-bold">Last Name:</label>
                                    <input class="form-control border border-primary" type="text" name="name" id="name"
                                        placeholder="Enter your name" />
                                </div>

                                <hr />
                                <button type="submit" class="btn btn-success float-center">SUBMIT</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StudentProf