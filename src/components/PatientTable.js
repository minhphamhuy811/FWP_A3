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
        <div className="flex justify-end pr-8 py-3">
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
            <div
              className="grid grid-cols-2 py-5 items-center bordered "
              style={{ backgroundColor: "#00142a" }}
            >
              <div className="grid grid-cols-5 pl-4">
                <div
                  scope="col"
                  className="text-center text-xs font-medium text-white uppercase tracking-wider"
                >
                  ID
                </div>
                <div
                  scope="col"
                  className="text-center text-xs font-medium text-white uppercase tracking-wider"
                >
                  HỌ TÊN
                </div>
                <div
                  scope="col"
                  className="text-center text-xs font-medium text-white uppercase tracking-wider"
                >
                  GIỚI TÍNH
                </div>
                <div
                  scope="col"
                  className="text-center text-xs font-medium text-white uppercase tracking-wider"
                >
                  QUẬN
                </div>
                <div
                  scope="col"
                  className="text-center text-xs font-medium text-white uppercase tracking-wider"
                >
                  PHƯỜNG
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div
                  scope="col"
                  className="text-center text-xs font-medium text-white uppercase tracking-wider"
                >
                  TÌNH TRẠNG
                </div>
              </div>
            </div>
            {patientList.map((row) => (
              <div
                key={row._id}
                className="collapse min-w-full border border-base-300 collapse-arrow"
              >
                <input type="checkbox" />
                <div className="collapse-title">
                  <div className="grid grid-cols-2 py-1 items-center border-black sm:rounded-lg">
                    <div className="grid grid-cols-5">
                      <div
                        scope="col"
                        className="text-center text-xs font-medium text-black uppercase tracking-wider"
                      >
                        {row.id}
                      </div>
                      <div
                        scope="col"
                        className="text-center text-xs font-medium text-black uppercase tracking-wider"
                      >
                        {row.fullName}
                      </div>
                      <div
                        scope="col"
                        className="text-center text-xs font-medium text-black uppercase tracking-wider"
                      >
                        {row.gender}
                      </div>
                      <div
                        scope="col"
                        className="text-center text-xs font-medium text-black uppercase tracking-wider"
                      >
                        {row.district}
                      </div>
                      <div
                        scope="col"
                        className="text-center text-xs font-medium text-black uppercase tracking-wider"
                      >
                        {row.ward}
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div
                        scope="col"
                        className="text-center text-xs font-medium text-black uppercase tracking-wider"
                      >
                        <span>
                          Triệu chứng hiện hữu: {checkSymptom(row).join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse-content">
                  <div className="grid grid-cols-2 px-3">
                    <div className="grid grid-cols-2">
                      <div className="text-sm text-left font-medium text-gray-500">
                        <p>Địa chỉ: {row.address}</p>
                        <p>Quốc gia: {row.country}</p>
                      </div>
                      <div className="text-sm text-left font-medium text-gray-500">
                        <p>Email: {row.email}</p>
                        <p>SĐT: {row.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="text-sm text-left font-medium ml-10 text-gray-500">
                      <div className="inline-grid grid-cols-1 text-sm text-left font-medium text-gray-500">
                        <p>Triệu chứng: {checkSymptom(row).join(", ")}</p>
                        <p>Nhiệt độ: {row.fever}{" "}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
