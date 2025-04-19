"use client";

import Aside from "@/components/containers/Aside";

function Pagelayout({ children }) {
  return (
    <>
      <div className="col-span-3 col-start-1 hidden  px-2 py-4 md:grid">
        <Aside />
      </div>
      <main className="col-span-full grid p-2 py-4 md:col-span-9 md:col-end-13">
        {children}

        <div id="modal-root" />
      </main>
    </>
  );
}

export default Pagelayout;
