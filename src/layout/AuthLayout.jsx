import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"



const AuthRouteLayout = () => {

    const { auth, loading } = useAuth()
    if (loading) {
        return "cargando"
    }
    
    return (
        <>
         
            {auth._id ? (
                <div className="container">
                    <Outlet />
                </div>
            ) : <Navigate to="/login" />}
        </>
    )

}
export default AuthRouteLayout