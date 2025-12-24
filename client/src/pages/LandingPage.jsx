import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white flex flex-col items-center justify-center px-4">

            {/* Logo / Brand */}
            <h1 className="text-4xl font-bold text-indigo-600 mb-8">Notes</h1>

            {/* Hero Section */}
            <div className="text-center max-w-xl space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    Welcome to Notes
                </h2>
                <p className="text-gray-700 text-lg md:text-xl">
                    The easiest way to manage your tasks, projects, and team productivity.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
                    <Button variant="default" size="lg">
                        <Link to='/login'>Login</Link></Button>
                    <Button variant="outline" size="lg">
                        <Link to='/register'>Register</Link></Button>
                </div>
            </div>
        </div>
    )
}
