import React from "react"
import MobileNav from "@/components/shared/MobileNav"
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
   
      <MobileNav/>
      <div className="">
        <div className="px-8 py-4">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout