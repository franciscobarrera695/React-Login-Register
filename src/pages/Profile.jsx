import useAuth from "../hooks/useAuth"



const Profile = () => {
    const { auth, logout } = useAuth()
    console.log(auth)
   
  

    
    return (
        <div className="row vh-100 justify-content-center  align-items-center">
            <div className="col-md-6  ">
                <div className="card border-success shadow py-3 px-1 animate__animated animate__fadeInUp">

                    <div className="card-body">

                        <h1 className="card-title">Welcome {auth.name}</h1>
                        <button onClick={logout} className="btn btn-secondary mt-3">Logout</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile