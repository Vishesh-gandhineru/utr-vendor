
import Link from "next/link"
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import SideBar from "./SideBar"
import React , {ReactElement} from "react"


export default function DashboardLayout({ children }: { children: React.ReactNode }): React.ReactElement {



  return (
    <div className="flex h-screen w-full">
      <ResizablePanelGroup className="max-w-full h-full" direction="horizontal">
        <ResizablePanel defaultSize={15} minSize={5} maxSize={15}>
         <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
            {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

