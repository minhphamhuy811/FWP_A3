import React from "react";
import logochxhcnvn from "../assets/logo_chxhcnvn.svg";
import logobyt from "../assets/logo_byt.svg";
import PatientTable from "../components/PatientTable";
import { useSessionStorage } from '../middleware/UseStorage'
import { Link } from "react-router-dom";

export default function Dashboard() {

  const [ward, setWard] = useSessionStorage('ward', '')

  function logout() {
    sessionStorage.removeItem("token");
  }
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-primary h-1/4 lg:min-h-screen flex-shrink md:flex-shrink-0">
        <div className="border-b" style={{borderColor: '#00142a'}}>
          <div className="flex flex-col gap-y-5 py-4">
            <div className="flex justify-center gap-x-2">
              <img src={logochxhcnvn} className="h-14" alt="" />
              <img
                src={logobyt}
                className="h-14 border-b border-transparent p-0.5 rounded-full bg-white"
                alt=""
              />
            </div>
            <div className="text-white font-bold text-center text-xl">
              HỆ THỐNG QUẢN LÝ Y TẾ
            </div>
          </div>
        </div>
        <div className="lg:min-h-screen" style={{ backgroundColor: "#00142a" }}>
          <div className="flex flex-col md:justify-center md:items-center md:flex-row lg:justify-start lg:items-stretch lg:flex-col">
            <div className="text-center py-4 px-6 bg-primary">
              <div className="text-white font-bold text-xl mb-2">Bạn đang quản lý Phường:</div>
              <div className="text-white text-xl italic">
                <select className="option-input p-3" id="ward" value={ward} onChange={e => {setWard(e.target.value); location.reload(); return false;}}>
                  <option hidden>-Chọn-</option>
                  <option>Bình Thuận</option>
                  <option>Phú Mỹ</option>
                  <option>Phú Thuận</option>
                  <option>Tân Hưng</option>
                  <option>Tân Kiểng</option>
                  <option>Tân Phong</option>
                  <option>Tân Phú</option>
                  <option>Tân Quy</option>
                  <option>Tân Thuận Dông</option>
                  <option>Tân Thuận Tây</option>
                </select>
              </div>
            </div>
            <Link to={'/admin-login'} onClick={logout}
             className="flex text-xl text-white font-bold items-center gap-x-2 py-4 px-6 border border-transparent hover:bg-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            <div >
              Log Out</div>
          </Link>
          </div>
        </div>
      </div>

      <div id="patients" className="flex flex-col flex-shrink w-full">
        <div className="border-b border-transparent shadow-sm">
          <div className="flex justify-between w-full items-center">
            <div className="py-12">
              <div className="text-4xl font-bold mx-10">Patients</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 px-4 gap-y-4">
          <PatientTable />
        </div>
      </div>
    </div>
  );
}
