import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuContent,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, ChevronDown } from "lucide-react"

export default function Navbar({ user }) {

    const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                <div className="text-xl font-bold">Notes</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-4">
                            <NavigationMenuItem>
                                <NavigationMenuLink>MyNotes</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>{user}</NavigationMenuTrigger>
                                <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-md">
                                    <div className="flex flex-col gap-2 w-24">
                                        <NavigationMenuLink>My Profile</NavigationMenuLink>
                                        <NavigationMenuLink>Logout</NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>


                    <div className="relative">
                        <Input
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-8"
                        />
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8">

                                <a className="text-lg font-medium" href="#">Home</a>

                                {/* Mobile Products Section */}
                                <div>
                                    <button
                                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                        className="flex w-full items-center justify-between text-lg font-medium"
                                    >
                                        Products
                                        <ChevronDown
                                            className={`ml-2 h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {mobileProductsOpen && (
                                        <div className="ml-4 mt-2 flex flex-col gap-2">
                                            <a href="/profile" className="text-base">My profile</a>
                                            <a href="/logout" className="text-base">Logout</a>
                                        </div>
                                    )}
                                </div>

                                <a className="text-lg font-medium" href="#">Pricing</a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    )
}
