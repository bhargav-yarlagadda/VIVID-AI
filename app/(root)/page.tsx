'use client'

import { UserButton, useUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { useEffect } from "react"

const Home = () => {
  const { isSignedIn, isLoaded } = useUser()
  useEffect(()=>{
    if(isLoaded && !isSignedIn){
      return redirect('/sign-in')
    }
  },[isLoaded,isSignedIn])
  return (
    <div>Home
    <UserButton />
    </div>
  )
}

export default Home