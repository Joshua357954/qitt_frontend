import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import Bcgg  from "../assets/images/serious-girl (1).jpg"
import {BsChat as Chat, BsChevronRight} from 'react-icons/bs'
import { FaChevronRight as Arrow   } from 'react-icons/fa'





const TextInput = ({name}) => {
	return (
		<div className="flex flex-col pl-2 w-[97%]">
			<label className="font-light font-medium wtt text-gray-500">{name}</label>
			<input className="focus:outline-gray-400 focus:border-gray-500 py-2 px-1 text-2xl font-black"/>
		</div>
	)
}


const AuthScreen = () => {
    return (
        <main className="w-screen h-screen ">
        	<section className="w-full flex justify-center items-center h-full">
	        {/* One */}
        		<div className="w-0 sm:w-[40%] h-full bg-blue-100 ">
        			<img src={Bcgg} className="w-full h-full object-cover bg-cover "/>
        		</div>


        	{/* Two */}
        		<div className="  backdrop-filter-sm w-full sm:w-[60%] h-full bg-gray-100 flex flex-col items-center">
        			<div className="w-full flex flex-col justify-center items-center pt-10">
        				<h1 className="ot text-5xl font-extrabold text-blue-500">Qitt</h1>
        				<p className="font-bold text-md wt">Everything in one kitt</p>
        			</div>

        			<div className="w-full  px-2 pt-6 flex flex-col gap-y-7">
        				<TextInput name={"Display Name"} />
        				<TextInput name={"Reg Number"} />
        			</div>
        		
        		<div className="w-full flex justify-center pt-8">
	        		<Link to="/" className="w-[70%] flex rounded-md text-gray-800 hover:text-gray-800 justify-center gap-2 font-bold items-center  py-4 bg-yellow-400 border-2 border-gray-900">
	        			Sign In  <Arrow className="font-bold"/>
	        		</Link>
        		</div>

        		</div>
        		
        	</section>

        </main>
    );
};


export default AuthScreen;
