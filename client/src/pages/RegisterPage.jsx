import React from 'react'

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

const RegisterPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Create Account</CardTitle>
                    <CardDescription>
                        Enter your details to create an account
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="John Doe" />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                </CardContent>

                <CardFooter>
                    <Button className="w-full">Sign Up</Button>
                </CardFooter>
            </Card>
        </div>

    )
}

export default RegisterPage