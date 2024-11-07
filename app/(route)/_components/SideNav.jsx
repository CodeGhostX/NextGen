"use client"
import { useUser } from "@clerk/nextjs";
import { BadgeIcon, BookOpen, GraduationCap, Grid, Mail, Store } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
    const {user} = useUser();
    const menu=[
        {
            id:0,
            name:"Dashboard",
            icon:Grid,
            path:'dashboard',
            auth:user
        },
        {
            id:1,
            name:"All Courses",
            icon:BookOpen,
            path:'courses',
            auth: true
        },
        {
            id:2,
            name:"Store",
            icon:Store,
            path:'store',
            auth:true
        },
        {
            id:3,
            name:"Membership",
            icon:BadgeIcon,
            path:'premium',
            auth:true
        },
        {
            id:4,
            name:"Be Instructor",
            icon:GraduationCap,
            path:'instructor',
            auth: true
        },
        {
            id:5,
            name:"Newsletter",
            icon:Mail,
            path:'newsletter',
            auth: true
        }
    ]
    const path = usePathname();
    return (
        <div  className="p-5 bg-white shadow-sm border h-screen">
            <Image src="/Logo.png" alt="nextgen" width={170} height={80} />
            <hr className="mt-3" />
            <div className="mt-6">
                {menu.map((item, index)=>{
                    return (item.auth) && <Link href={item?.path}>
                        <div className={`group flex gap-3 mt-1 p-3 text-lg items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-xl transition-all ease-in-out duration-300
                            ${path.includes(item.path) && 'bg-primary text-white'}
                            `}>
                            <item.icon className="group-hover:animate-bounce"/>
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default SideNav
