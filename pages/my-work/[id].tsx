import { useRouter } from "next/router";
import React from "react";

const MyWork = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {" "}
      <div>
        PAGE:{" "}
        <div
          className=" cursor-pointer ml-5 rounded-full bg-green-200 text-green-500 text-sm px-6 py-2 flex justify-center items-center "
          id="page_value"
        >
          {router.query.id}
        </div>
        <div className=" hidden " id="telephone_value">
          99999990000
        </div>
      </div>
    </main>
  );
};

export default MyWork;
