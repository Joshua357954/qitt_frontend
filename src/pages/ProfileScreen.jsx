import React from 'react';
import { ImAttachment as Attachement } from 'react-icons/im'
import Imgs from '../assets/images/serious-girl (1).jpg'
import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav.jsx'
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../components/MainLayout.jsx'
import { BsChevronLeft as Arrow  } from 'react-icons/bs'
import { logout } from '../features/authSlice.js';
import { CgLogOut } from 'react-icons/cg';
import { removeItem } from '../utils/utils.js';


const ProfileScreen = ({ className }) => {
	const userData = useSelector((state) => state.user);

	function getCurrentUniYear(startAcademicYear) {
		var yr = new Date().getFullYear() - parseInt(startAcademicYear.split('/')[0], 10) + 1;
		if (startAcademicYear == '2020/2021')
			return yr-2
		return yr-1
	}


	function displayDayAndMonth(dateString) {
		const dateObject = new Date(dateString);
		const day = dateObject.getDate();
		const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateObject);
		const suffix = (10 <= day % 100 && day % 100 <= 20) ? 'th' : { 1: 'st', 2: 'nd', 3: 'rd' }[day % 10] || 'th';
		return `${day}${suffix}   ${month}`;
	}

	const dispatch = useDispatch()

	const handleLogout = () => {
		removeItem('Qitt-Auth')
		dispatch(logout())
	}


    return (
        <MainLayout route="Profile">
    		<div className="h-full w-full flex flex-col py-2 items-center overflow-y-auto">
    			
    			<div className="flex flex-col w-full px-2 gap-2 items-center">
        			{/*#4169E1*/}
        			<div className="flex justify-center items-center gap-3 ">
	        			<div className="h-32 w-32 sm:h-36 sm:w-36 border-[1px] border-[#c0c0c0] rounded-full">
		        			<img src={userData.imageUrl || Imgs} className="w-full h-full rounded-full bg-cover object-cover"/>
	        			</div>

	        			<div className=" flex flex-col gap-2">
	        				<h2 className="text-2xl font-bold">{userData.name}</h2>
	        				<div className="bg-gray-100 p-1 w-[76px] text-sm rounded-lg flex items-center gap-2"><Attachement className="text-gray-700"/> 12823</div>
	        				<p className="truncate">{userData.email}</p>
	        			</div>
	        		</div>

	        		<div className="w-full sm:w-[70%] bg-purple-400 font-bold border-[1px] border-gray-900 p-3 flex justify-center items-center rounded text-black"> Account Settings </div>

        		</div>



    			<div className="w-full sm:w-[67%] pt-5 px-2 pb-3">
    			{/*og */}
					<h2 className="text-xl font-extrabold text-gray-800">Personal Info</h2>
	        		<fieldset className="flex border-0 border-gray-400 pt-2">
	        			
	        			<div className="flex flex-col border-r-2 border-gray-400 w-[40%]">
		        			<p className="font-bold">Gender</p> 
		        			<p className="font-light">{userData.gender}</p>
	        			</div>

	        			<div className="flex flex-col pl-4">
		        			<p className="font-bold">Birthday</p> 
		        			<p className="font-light">{displayDayAndMonth(userData.dateOfBirth)|| ""}</p>
	        			</div>

	        		</fieldset>
    			</div>

    			<div className="w-full sm:w-[67%] pt-3 px-2 ">
    			{/*ob*/}
					<h2 className="text-xl font-extrabold  text-gray-800">School Info</h2>
	        		<fieldset className="flex border-0 border-gray-400 pt-2">
	        			
	        			<div className="flex flex-col border-r-2 border-gray-400 w-[40%]">
		        			<p className="font-bold">Faculty</p> 
		        			<p className="font-light">{userData.faculty}</p>
	        			</div>

	        			<div className="flex w-[40%] flex-col pl-3  p ">
		        			<p className="font-bold">Department</p> 
		        			<p title="Computer Science" className="cursor-pointer font-light">{userData.courseName || userData.department}</p>
	        			</div>

	        			<div className="flex w-[30%] flex-col pl-4 border-l-2 border-gray-400">
		        			<p className="font-bold">Level</p> 
		        			<p className="font-light">{getCurrentUniYear(userData.session)}00lvl</p>
	        			</div>

	        		</fieldset>
    			</div>
	
				<div className="mt-12 sm:hidden flex justify-center gap-3 xl:mb-3 mb-2 text-red-500 hover:text-red-600 mr-6" onClick={handleLogout}>
					<CgLogOut className="text-xl font-medium"/>
					Logout
				</div>

    		</div>
        </MainLayout>

    );
};

export default ProfileScreen;



