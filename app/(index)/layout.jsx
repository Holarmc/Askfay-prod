"use client";
import React from "react";
import Aside from "@/components/containers/Aside";

function Pagelayout({ children, modal }) {
  return (
    <>
      <div className="col-span-3 col-start-1 hidden  px-2 py-4 md:grid">
        <Aside />
      </div>
      <main className="col-span-full grid p-2 py-4 md:col-span-9 md:col-end-13">
        {children}
        {modal}
        <div id="modal-root" />
      </main>
    </>
  );
}

export default Pagelayout;
