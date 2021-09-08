import React from "react";
import { useEffect, useState } from "react";

export default function PatientTable() {
  const [patientList, setPatientList] = useState([]);
  const endPoint = "http://localhost:3307/getall";
  const getPatient = () => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((patientList) => setPatientList(patientList));
  };
  useEffect(() => {
    getPatient();
  }, []);

  function checkSymptom(symptomObj) {
    let symptomENG = [
      "cough",
      "fever",
      "headache",
      "soreThroat",
      "stuffNose",
      "difficultyBreathing",
      "chestache",
      "muscleache",
      "ageusia",
      "anosmia",
      "nausea",
      "stomachache",
    ];
    let symptomVN = [];
    symptomENG.forEach((symptomKey) => {
      if (symptomObj[symptomKey] == true) {
        switch (symptomKey) {
          case "cough":
            symptomVN.push("Ho");
            break;
          case "headache":
            symptomVN.push("Đau đầu");
            break;
          case "soreThroat":
            symptomVN.push("Đau rát họng");
            break;
          case "stuffNose":
            symptomVN.push("Ngạt mũi");
            break;
          case "difficultyBreathing":
            symptomVN.push("Khó thở");
            break;
          case "chestache":
            symptomVN.push("Đau tức ngực");
            break;
          case "muscleache":
            symptomVN.push("Đau mỏi người/cơ");
            break;
          case "ageusia":
            symptomVN.push("Mất vị giác");
            break;
          case "anosmia":
            symptomVN.push("Mất khứu giác");
            break;
          case "nausea":
            symptomVN.push("Buồn nôn");
            break;
          case "stomachache":
            symptomVN.push("Đau bụng");
            break;
        }
      }
    });
    if (!symptomVN.length) {
      symptomVN.push("Không có");
    }
    return symptomVN;
  }

  return (
    <div className="flex flex-col container mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                          Triệu trứng hiện hữu: {checkSymptom(row).join(", ")}
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
