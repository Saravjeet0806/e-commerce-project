import React, {useState, useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext.jsx'

const Register = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, email, password}),
            })
            const data = await res.json();
            if(res.ok){
                alert('User registered successfully')
                login(data)
                navigate('/')
            }
            else{
                alert(data.message)
            }
        }
        catch(error){
            console.error(error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4 py-10">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100"
            >

                <h2 className="text-3xl font-bold text-[#2563EB] text-center mb-8">
                    Create Account
                </h2>

                <div className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#374151] placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#374151] placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#374151] placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full mt-7 py-3 px-4 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                    Create Account
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-[#374151] mt-7">
                    Already have an account?{" "}
                    <Link
                        to='/login'
                        className="text-[#2563EB] font-semibold hover:text-blue-700 transition-colors"
                    >
                        Login
                    </Link>
                </p>

            </form>

        </div>
    )
}

export default Register
