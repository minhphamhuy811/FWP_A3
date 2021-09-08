import React from "react";

export default function AdminTable() {
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
                  EMAIL
                </div>
                <div
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  PHƯỜNG QUẢN LÝ
                </div>
                <div
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  SỬA
                </div>
                <div
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  XÓA
                </div>
              </div>
              <div className="min-w-full border rounded-box border-base-300 ">
                <div className="grid grid-cols-5 px-6 py-3 items-center  border-black sm:rounded-lg">
                  <div
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    123
                  </div>
                  <div
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    tra@admin.com
                  </div>
                  <div
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tân Phong
                  </div>
                  <div
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <button className="btn btn-warning">SỬA</button>
                  </div>
                  <div
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <button className="btn btn-error">XÓA</button>
                  </div>
                </div>
              </div>
            </thead>
          </div>
        </div>
      </div>
    </div>
  );
}
