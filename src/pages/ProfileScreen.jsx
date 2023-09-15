import React from 'react';
import { ImAttachment as Attachement } from 'react-icons/im'
import Imgs from '../assets/images/serious-girl (1).jpg'
import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav.jsx'
import { BsChevronLeft as Arrow  } from 'react-icons/bs'


const ProfileScreen = ({ className }) => {
    return (
        <main className="w-screen h-screen"> 
        	
        	<section className="w-full h-full">
        		
        		<PageNav url="/" name="Profile"/>

        		<div className="flex justify-center  items-center h-[90%] sm:h-[87%] ">
	        		<div className="h-full w-full sm:w-[60%] bg-yellow-00 pt-3 flex flex-col py-2 items-center overflow-y-auto">
	        			
	        			<div className="flex flex-col w-full px-2 gap-2 items-center">
		        			
		        			<div className="flex justify-center items-center gap-3 ">
			        			<div className="h-32 w-32 sm:h-36 sm:w-36 border-[1px] border-yellow-300 rounded-full">
				        			<img src={Imgs} className="w-full h-full rounded-full bg-cover object-cover"/>
			        			</div>

			        			<div className=" flex flex-col gap-2">
			        				<h2 className="text-2xl font-bold">Griney</h2>
			        				<div className="bg-gray-100 p-1 w-[76px] text-sm rounded-lg flex items-center gap-2"><Attachement className="text-gray-700"/> 12823</div>
			        				<p className="truncate">boyijoshua72@gmail.com</p>
			        			</div>
			        		</div>

			        		<div className="w-full text-gray-800 sm:w-[67%] bg-yellow-400 sm:bg-yellow-300 font-bold border-[1px] border-gray-800 p-3 flex justify-center items-center rounded "> Account Settings </div>

		        		</div>



	        			<div className="w-full sm:w-[67%] pt-5 px-2 pb-3">
							<h2 className="text-xl font-extrabold og text-gray-800">Personal Info</h2>
			        		<fieldset className="flex border-0 border-gray-400 pt-2">
			        			
			        			<div className="flex flex-col border-r-2 border-gray-400 w-[40%]">
				        			<p className="font-bold">Gender</p> 
				        			<p className="font-light">Male</p>
			        			</div>

			        			<div className="flex flex-col pl-4">
				        			<p className="font-bold">Birthday</p> 
				        			<p className="font-light">12 May</p>
			        			</div>

			        		</fieldset>
	        			</div>

	        			<div className="w-full sm:w-[67%] pt-3 px-2 ">
							<h2 className="text-xl font-extrabold ob text-gray-800">School Info</h2>
			        		<fieldset className="flex border-0 border-gray-400 pt-2">
			        			
			        			<div className="flex w-[30%] flex-col border-r-2 border-gray-400 w-[40%]">
				        			<p className="font-bold">Faculty</p> 
				        			<p className="font-light">Science</p>
			        			</div>

			        			<div className="flex w-[40%] flex-col pl-3  p ">
				        			<p className="font-bold">Department</p> 
				        			<p title="Computer Science" className="cursor-pointer font-light">CSC</p>
			        			</div>

			        			<div className="flex w-[30%] flex-col pl-4 border-l-2 border-gray-400">
				        			<p className="font-bold">Level</p> 
				        			<p className="font-light">100 Lvl</p>
			        			</div>

			        		</fieldset>
	        			</div>


	        		</div>
        		</div>
        		 
        	</section>

         </main>
    );
};

export default ProfileScreen;



