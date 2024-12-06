import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <div className="">
        <div className="px-8 py-4">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout