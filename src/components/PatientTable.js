import React from "react";
import { useEffect, useState } from "react";
import writeToCSV from "../lib/utils/export";
import checkSymptom from "../lib/utils/check-symptoms";

export default function PatientTable() {
  const ward = JSON.parse(sessionStorage.getItem('ward'))
  const [patientList, setPatientList] = useState([]);
  const endPoint = "http://localhost:3307/table";
  const getPatient = () => {
		fetch(endPoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "*"
			},
			body: JSON.stringify({ward})
		})
    .then(response => response.json())
    .then(patientList => setPatientList(patientList))

  };
  useEffect(() => {
    getPatient();
  }, []);

  const csvHeaders = [
    "fullName",
    "id",
    "birthYear",
    "gender",
    "country",
    "city",
    "district",
    "ward",
    "address",
    "phoneNumber",
  ];

  const csvURL = writeToCSV(patientList, csvHeaders);

  return (
    <div className="flex flex-col container mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="flex justify-end">
          <button className="flex gap-x-1 items-center border border-primary p-2 text-primary rounded-xl font-bold hover:bg-primary hover:text-white focus:outline-none focus:text-white focus:bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            <a href={csvURL} download="data.csv">
              {" "}
              EXPORT{" "}
            </a>
          </button>
        </div>
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <thead className="bg-gray-50">
              <div className="grid grid-cols-5 px-6 py-3 items-center  border-black sm:rounded-lg">
                <div
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </div>
                <div
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  HỌ TÊN
                </div>
                <div
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  GIỚI TÍNH
                </div>
                <div
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  QUẬN
                </div>
                <div
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  PHƯỜNG
                </div>
              </div>
              {patientList.map((row) => (
                <div
                  key={row._id}
                  className="collapse min-w-full border rounded-box border-base-300 collapse-arrow"
                >
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <div className="grid grid-cols-5 px-6 py-3 items-center  border-black sm:rounded-lg">
                      <div
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {row.id}
                      </div>
                      <div
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {row.fullName}
                      </div>
                      <div
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {row.gender}
                      </div>
                      <div
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {row.district}
                      </div>
                      <div
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {row.ward}
                      </div>
                    </div>
                  </div>
                  <div className="collapse-content">
                    <p>
                      <span className="inline-grid grid-cols-4 gap-x-10 text-sm text-left font-medium text-gray-500">
                        <span>Địa chỉ: {row.address}</span>
                        <span>Quốc gia: {row.country}</span>
                        <span>Email: {row.email}</span>
                        <span>SĐT: {row.phoneNumber}</span>
                      </span>
                    </p>
                    <p>
                      <span className="inline-grid grid-cols-1 text-sm text-left font-medium text-gray-500">
                        <span>
                          Triệu chứng hiện hữu: {checkSymptom(row).join(", ")}
                        </span>
                        <span>Nhiệt độ: {row.fever}</span>
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </thead>
          </div>
        </div>
      </div>
    </div>
  );
}
