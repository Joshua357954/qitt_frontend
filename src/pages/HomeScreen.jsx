import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import MainLayout from '../components/MainLayout.jsx'


// FaGraduationCap (fa6)
import PastQA from '../assets/images/question-and-answer-svgrepo-com.svg'
import Resources from '../assets/images/database-server-svgrepo-com.svg'
import Department from '../assets/images/graduation-cap-svgrepo-com.svg'
import Feed1 from '../assets/images/community-comments-svgrepo-com.svg'
import Feed2 from '../assets/images/survey-rating-feedback-svgrepo-com.svg'
import PastQuestion from '../assets/images/question-and-answer-svgrepo-com.svg'
import { FiSend as SendIcon } from 'react-icons/fi'
import { HiHome as Home } from 'react-icons/hi'
import { RiTimerFlashLine as Timer} from 'react-icons/ri'
import { TbCalendarTime as Time } from 'react-icons/tb'
import { MdBook as Book,MdOutlineLocationOn as Location, MdSchool as School, MdAssignment as Assign } from 'react-icons/md'
import { BsFillCameraFill as Camera,BsPlus,BsTools as Tool, BsChat as Chat, BsCheckLg as Check, BsTrashFill as Trash, BsEmojiSmile as Emoji, BsChevronRight as Arrow  } from 'react-icons/bs'
import { ImAttachment as Attachement } from 'react-icons/im'
import { baseUrl ,formatCode, formatTimetableEntry } from '../utils/utils.js'
import { FaUserFriends as Friends, FaFacebookMessenger as Message } from 'react-icons/fa'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTimetable } from '../features/userSlice.js';

const HomeScreen = () => {
	const dispatch = useDispatch()
	const userData = useSelector((state) => state.user);
	const { timetable } = useSelector((state) => state.users)
	
	const Classes = [{time:"9:00am - 11:00am",color:'bg-green-400',course:"GES 101",venue:"MBA 1",current:true},
				{time:"11:00am - 1:30pm",color:'bg-orange-400',course:"Physcis 103",venue:"Physics Lab"},
				{time:"12:00pm - 1:00pm",color:'bg-yellow-400',course:"STA 160",venue:"Maths Hall"}, 
				{time:"3:00pm - 4:00pm",color:'bg-red-400',course:"CSC 183",venue:"Maths Hall"}, 
		 ]


	const dept = 'computer_science';
	const year = '100';
	const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
	const currentDayIndex = new Date().getDay();
	const currentDay = daysOfWeek[currentDayIndex].toLowerCase();

	useEffect(() => {

		const fetchData = async () => {
			try {
				const response = await axios.get(`${baseUrl}/api/timetable/all/${dept}/${year}`);
				// console.log(response.data.allTimetables);
				dispatch(addTimetable((response.data.allTimetables)))
			} catch (error) {
				console.error('Error fetching data:', error);
			}
			};
		fetchData();
	}, [timetable == []]); 
	
	
	const timetableData = () => {
		const foundDay = timetable.filter(item => Object.keys(item)[0].toLowerCase() == currentDay)
		// timetable.find(dayObj => Object.keys(dayObj)[0] == currentDay);
		return foundDay[0][currentDay.toUpperCase()]
	};
	  

	const sections = [
	  {
	    title: "Resources",
	    description: "Get all the resources you need to get better",
	    image: Resources,
	    link:'/resources',
	    gradientClass: "from-[#ff9800] to-orange-200",
	  },
	  {
	    title: userData.courseName || 'Dept',
	    description: "Top Educational Notch experience",
	    image: Department,
	    link:'/department',
	    gradientClass: "from-[#2ecc71] to-green-200",
	  },
	  {
	    title: "Past Q/A",
	    description: "Empower with seamless assessments",
	    image: PastQA,
	    link:'/pastQuestion?q=practice',
	    gradientClass: "from-[#f06292] to-pink-200",
	  },
	  {
	    title: "Feedback",
	    description: "Your Feedback is very important to us. #Qitt",
	    image: Feed2,
	    link:'/feedback',
	    gradientClass: "from-[#3498db] to-blue-200",
	  },
	];

	const shadowStyle = {
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.15  )'
	};


    return (

        <MainLayout route="">
			{/* Properties Grid */}
			<section className="w-full h-full flex flex-col bg-gray-50  ">
				{/* inner Container*/}
				<div className="w-full h-[65%] pt-0 sm:pt-0 pb-2 grid grid-cols-2 grid-rows-2 gap-3 sm:gap-6">
					{/* Blocks */}
					{sections.map((section, index) => (
				        <Link to={section.link} key={index} style={shadowStyle} className={`w-full bg-gray-50 border-gray-100 flex flex-col p-3 pt-4 {section.gradientClass} h-full sm:h-full  rounded-md`}>
				          <div className="w-full">
				            <h2 className="font-bold text-gray-900 text-xl sm:text-2xl">{section.title}</h2>
				            <p className="mt-1 text-sm font-normal text-gray-700">{section.description}</p>
				        </div>
				          {/* Second Partition*/}
				          <div className="w-full flex justify-end items-end h-full">
				            <img src={section.image} className="h-[65px] sm:h-[70px]" alt={`Section ${index}`} />
				          </div>
				        </Link>
				      ))}
				</div>

				<h2 className="font-semibold text-xl mt-4 my-2">Today's Classes</h2>
				
				<div className="bg-white w-full flex gap-2 pb-1 overflow-x-auto">
				  {timetableData()?.map((item, index) => (
				    <div key={index} className="flex border-l-2 border-l-gray-400 flex-col gap-0 bg-gray-50 px-2 py-1 rounded border-2 border-gray-50">
				      <p className="font-bold pl-[.1rem] flex justify-between" style={{ whiteSpace: 'nowrap' }}>{formatCode(item.course)} <span>{item.current ? "🔥" : "⌛"}</span></p>
				      <div className="flex items-center">
				        <Timer className="text-md text-[#FFDAB9]" />
				        <p className="font-normal ml-2" style={{ whiteSpace: 'nowrap' }}>{formatTimetableEntry(item.time)}</p>
				      </div>
				      <div className="flex items-center">
				        <Location className="text-lg text-[#8FBC8F] ]" />
				        <p className="ml-2" style={{ whiteSpace: 'nowrap' }}>{item.venue}</p>
				      </div>
				    </div>
				  ))}
				</div>
				
			</section>

		</MainLayout>
    );
};


export default HomeScreen;
