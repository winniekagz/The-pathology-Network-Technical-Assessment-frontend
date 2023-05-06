import React from 'react'
import { Icon } from "@iconify-icon/react"
// interface btn{
//     onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
//     label:string
// }
export default function AuthLoadingButton() {
    return (
        <div className="flex items-center justify-center h-[40px] space-x-2 py-2 px-4 w-full my-2 bg-dark-blue rounded-sm" v-if="loading">

            <div className="w-2 h-2 bg-[#fffefe] rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-[#fffefe] rounded-full animate-ping delay-300 duration-1000 ease-in-out"></div>
            <div className="w-2 h-2 bg-[#fffefe] rounded-full animate-ping delay-150"></div>

        </div>
    )
}