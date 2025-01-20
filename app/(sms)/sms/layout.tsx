"use client"
import { AppSidebar } from '@/components/app-sidebar'
import Hint from '@/components/features/Hint'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React, { useState } from 'react'

function SmsLayout({children} : {children : React.ReactNode}) {
  const [open , setOPen] = useState(true);
  return (
    <>
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className=''>
        <header className="flex h-16 bg-gray-100 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 p-4">
          <Hint label={open ? "collapse" : "expand"}>
          <SidebarTrigger className="-ml-1  " onClick={()=>setOPen((prev) => !prev)} />
          </Hint>
        </header>
       {children}
      </SidebarInset>
    </SidebarProvider>
    </>
  )
}

export default SmsLayout
