import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ErrorMessage from '@/components/ErrorMessage'
import axios from 'axios'
import LoadingSpinner from '@/components/LoadingSpinner'
import { Link } from "react-router-dom";

const RegisterPage = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name.trim()) {
            setError("Name is required");
            return;
        }
        if (!formData.password.trim()) {
            setError("Password is required");
            return;
        }

        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                }
            }

            setLoading(true);
            const { data } = await axios.post('http://127.0.0.1:8000/api/user/register', formData, config);

            setLoading(false);
            localStorage.setItem("UserInfo", JSON.stringify(data))
            setError('')

        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message)
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-muted/40">
            {error && <ErrorMessage message={error} />}
            {loading && <LoadingSpinner />}
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Create Account</CardTitle>
                    <CardDescription>
                        Enter your details to create an account
                    </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        {/* Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </CardContent>

                    <CardFooter className={`flex w-full items-center ${error === "user is already present"
                            ? "justify-between"
                            : "justify-center"
                        }`}>
                        {error === "user is already present" && <Button type="button" className="w-fit">
                            <Link to='/login' >Login</Link>
                        </Button>}
                        <Button type="submit" className="w-fit">
                            Register
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default RegisterPage