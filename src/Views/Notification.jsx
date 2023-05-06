import React, { useEffect } from 'react'
import Pagination from '../Components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { LocalStorage } from '../Hooks/useLocalStorage'
import GetNotificationAction from '../redux/Actions/Notification/Notification'

export default function Notifications() {
    const dispatch = useDispatch()
    const {data,loading} = useSelector(state => state.notification)
    const user=LocalStorage("user")
console.log("data",data)
    useEffect(() => {
        dispatch(GetNotificationAction(user._id))
    }, [])
    return (
        <div className="p-5 mt-24 h-screen bg-light">
            <div class="overflow-x-auto shadow-sm rounded-sm">
                <div class="flex items-center justify-between pb-4 flex-col shadow p-3">
                    <div className=" ">
                        <h1 class='text-dark-blue text-header font-normal'>All Notifications</h1>
                    </div>

                    <ol class="relative border-l border-blue ">
                       
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-blue-green rounded-full mt-1.5 -left-1.5 border border-blue-green  "></div>
                            <time class="mb-1 text-sm font-normal leading-none text-blue-green ">March 2022</time>
                            <h3 class="text-lg font-semibold text-dark-blue">Marketing UI design in Figma</h3>
                            <p class="text-base font-normal text-gray-800 ">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li class="ml-4">
                            <div class="absolute w-3 h-3 bg-blue rounded-full mt-1.5 -left-1.5 border border-blue"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-blue">April 2022</time>
                            <h3 class="text-lg font-semibold text-dark-blue">E-Commerce UI code in Tailwind CSS</h3>
                            <p class="text-base font-normal text-gray-800">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                        
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-blue-green rounded-full mt-1.5 -left-1.5 border border-blue-green  "></div>
                            <time class="mb-1 text-sm font-normal leading-none text-blue-green ">March 2022</time>
                            <h3 class="text-lg font-semibold text-dark-blue">Marketing UI design in Figma</h3>
                            <p class="text-base font-normal text-gray-800 ">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li class="ml-4">
                            <div class="absolute w-3 h-3 bg-blue rounded-full mt-1.5 -left-1.5 border border-blue"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-blue">April 2022</time>
                            <h3 class="text-lg font-semibold text-dark-blue">E-Commerce UI code in Tailwind CSS</h3>
                            <p class="text-base font-normal text-gray-800">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>


                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-blue-green rounded-full mt-1.5 -left-1.5 border border-blue-green  "></div>
                            <time class="mb-1 text-sm font-normal leading-none text-blue-green ">March 2022</time>
                            <h3 class="text-lg font-semibold text-dark-blue">Marketing UI design in Figma</h3>
                            <p class="text-base font-normal text-gray-800 ">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                    </ol>
                </div>


            </div>
           
        </div>
    )
}


