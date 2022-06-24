import { Link ,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Alert from '../components/Alert'
import clientAxios from '../config/Axios.config'
import useAuth from '../hooks/useAuth'
const Register = () => {


    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
      
        if ([user.email,user.password].includes('')) {
            setError('hay campos vacios')
            return
        }
        try {
            const { data } = await clientAxios.post('/login', {
                email: user.email,
                password: user.password
            })

            sessionStorage.setItem('x-access-token', data.token);
            setAuth(data.user)
            navigate('/')
        } catch (error) {
            console.log(error)
            if (error.response) {
                setError(error.response.data.message)
                return
            }
            setError(error.message)
        }
        
    }

    return (
        <div className="container">
            <div className="row vh-100 justify-content-center  align-items-center">
                <div className="col-md-4 ">
                    {error && <Alert message={error} />}
                    <div className='card rounded shadow animate__animated animate__pulse'>
                        <div className=" text-center card-header">
                            <h3>Login</h3>
                        </div>
                        <form className=" card-body " onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    onChange={handleChange} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="*********"
                                    onChange={handleChange} />

                            </div>
                            <div className="my-2 ">
                                <button type="submit" className="px-3 btn btn-primary ">Register</button>
                                <p className='my-2 text-secondary'>Don't have an Account <Link className='text-decoration-none fw-bold text-black' to="/register">Register Now!</Link></p>
                                <a href="#"  className='my-2 text-decoration-none text-black fw-bold'>Forgot Password?</a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register