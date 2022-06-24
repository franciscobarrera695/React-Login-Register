import { Link } from 'react-router-dom'
import { useState } from 'react'
import Alert from '../components/Alert'
import clientAxios from '../config/Axios.config'
const Register = () => {




    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
            setError('')
        if ([user.name, user.email].includes('')) {
            setError('hay campos vacios')
            return
        }else if(user.password.length < 6 ){
            setError('el password con mas de 6 letras')
            return
        }
        try {
            await clientAxios.post('/register', {
                name: user.name,
                email: user.email,
                password: user.password
            })
            setError('')
        } catch (error) {
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
                            <h3>Register</h3>
                        </div>
                        <form className=" card-body  " onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="your name..."
                                    onChange={handleChange} />

                            </div>
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
                                <p className='my-2  text-secondary'>Already have an Account <Link className='fw-bold text-decoration-none  text-black' to="/login">Login Now!</Link></p>
                                <a href="#" className='my-2 text-decoration-none text-black fw-bold'>Forgot Password?</a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register