"use client"
import { useState } from "react"
import Button from "../ui/Buttons"
import { useAuthContext } from "../context/AuthContext" 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const { registerUser, loginUser, googleLogin } = useAuthContext()
   
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

 

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
           
            <form onSubmit={handleSubmit} className="bg-gray-400 py-4 px-6 rounded-xl max-w-md w-full">
                <h2 className="text-gray-800">Login</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Email"
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-gray-900"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="password"
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-gray-900"
                    name="password"
                    onChange={handleChange}
                />
                <Button onClick={() => loginUser(values)} className=" bg-yellow-900 mr-4 text-white">Sign In</Button>
                <Button onClick={() => registerUser(values)} className=" bg-yellow-900 text-white">Sign Up</Button>
                <Button onClick={() => googleLogin()} className="mt-2 block bg-yellow-900 text-white">Continue with Google</Button>
            </form>
        </div>
    )
}

export default LoginForm