import React from 'react'
import logochxhcnvn from '../assets/logo_chxhcnvn.svg'
import logobyt from '../assets/logo_byt.svg'


export default function Dashboard() {
  return(
    <div className="flex">
    <div className="bg-primary min-h-screen max-w-full">
      <div className="border-b border-primary px-8 shadow-2xl">
        <div className="flex flex-col gap-y-2 py-4">
          <div className="flex justify-center gap-x-2">
          <img src={logochxhcnvn} className="h-14" alt=""/>
          <img src={logobyt} className="h-14 border-b border-transparent p-0.5 rounded-full bg-white" alt=""/>
          </div>
          <div className="text-white font-bold text-center text-xl">HỆ THỐNG QUẢN LÝ Y TẾ</div>
          </div>
      </div>
      <div className="min-h-screen" style={{backgroundColor: '#00142a'}}>
        <div className="flex flex-col">
          <button onClick="userToggle()"
                  className="flex text-xl text-white font-bold items-center gap-x-2 py-4 px-8 border border-transparent hover:bg-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            Patients
          </button>
          <button onClick="branchToggle()"
                  className="flex text-xl text-white font-bold items-center gap-x-2 py-4 px-8 border border-transparent hover:bg-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"/>
            </svg>
            Admin
          </button>
          <a href="/"
             className="flex text-xl text-white font-bold items-center gap-x-2 py-4 px-8 border border-transparent hover:bg-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"/>
            </svg>
            <div>Log Out</div>
          </a>
        </div>
      </div>
    </div>

      <div></div>


  </div>
  )
}
