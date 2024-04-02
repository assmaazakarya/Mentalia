/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

function Checking() {
  return (
    <>
      <div className=" h-screen">
        <div className=" p-6  md:mx-auto">
          <svg viewBox="0 0 24 24" className="text-cyan-500 w-16 h-16 mx-auto my-6">
            <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p> Have a great day!  </p>
            <div className="py-10 text-center">
              <Link to="/meals">
                <a className="px-12 rounded-full bg-violet-500 hover:bg-violet-400 text-white font-semibold py-3">
                  GO BACK
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Checking;
