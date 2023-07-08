'use client'

import AdminLayout from "@/Layouts/AdminLayout";
import CommonLayout from "@/Layouts/CommonLayout";
import { usePathname } from "next/navigation";

export default function Common_Provider(props: any):JSX.Element{
    const all_route_info: string = usePathname();
  
  //const current_selected_layout = all_route_info.startsWith('/admin') ? <AdminLayout>{children}<AdminLayout/> : <CommonLayout>{children}</CommonLayout>
  const current_selected_layout = all_route_info.startsWith('/admin') ? (<AdminLayout>{props.children}</AdminLayout>) : (<CommonLayout>{props.children}</CommonLayout>)
    return (
        <>
            {current_selected_layout}
        </>
    )
}