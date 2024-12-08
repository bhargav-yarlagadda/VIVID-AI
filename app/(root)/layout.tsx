import React from "react"
import Sidebar from "@/components/shared/Sidebar"
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <Sidebar/>
      <div className="">
        <div className="px-8 py-4">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout