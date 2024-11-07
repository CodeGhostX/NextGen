"use client"
import { UserButton, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react";
const page = () => {
  const router = useRouter();
  const {user, isLoaded} = useUser();
  useEffect(()=>{
    if(user){
      router.push('/dashboard');
    }
    else {
      isLoaded && router.push('/courses');
    }
  }, [user])

  return (
    <div className="grid grid-cols-3">
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  )
}

export default page
