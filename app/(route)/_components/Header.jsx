"use client"
import { Button } from "@/components/ui/button"
import { UserButton, useUser } from "@clerk/nextjs"
import { BellDot, Search } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const {user, isLoaded} = useUser();
  return (
    <div className="p-4 bg-white flex flex-row justify-between">
        {/* Search Bar */}
        <div className="flex flex-row gap-4 border rounded-md p-2">
            <Search className="h-5 w-5"/>
            <input className="outline-none" type="text" placeholder="Search..." />
        </div>
        {/* Get Started & Bell Button */}
        <div className="flex items-center gap-6">
            <BellDot/>
            {
              (user && isLoaded) ? <UserButton/> : <Link href={'/sign-in'}><Button>Get Started</Button></Link>
            }
        </div>
    </div>
  )
}

export default Header
