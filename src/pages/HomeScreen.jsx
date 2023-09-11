import React from 'react';
import { Link } from 'react-router-dom'
import { FiSend as SendIcon } from 'react-icons/fi'
import { HiHome as Home } from 'react-icons/hi'
import { TbCalendarTime as Time } from 'react-icons/tb'
import { MdSchool as School, MdAssignment as Assign } from 'react-icons/md'
import Imgg from '../assets/images/serious-girl (1).jpg'
import { BsChat as Chat, BsCheckLg as Check, BsTrashFill as Trash, BsEmojiSmile as Emoji, BsChevronRight as Arrow  } from 'react-icons/bs'
import { ImAttachment as Attachement } from 'react-icons/im'
import { FaUserFriends as Friends, FaFacebookMessenger as Message } from 'react-icons/fa'
 
const HomeScreen = () => {

	const navbar_height = 17
    return (

        <main className="h-[100vh] w-screen bg-gray-100 select-none">
        	

        	<nav className={`w-full h-[14%] sm:h-[17%] bg-gray-100 flex px-6 sm:px-10 justify-between items-center `}>
        		<div className="text-5xl font-extrabold select-none">Qitt</div>
        		<div className="text-2xl hidden sm:block"> Dashboard </div>
        		<Link to="profile">
        			<div className="w-16 h-16 border-[2px] border-orange-100 rounded-full bg-gray-400">
		        		<img src={Imgg} className="w-full h-full rounded-full bg-cover  size"/>
		        	</div> 
        		</Link>
        	</nav>


        	<section className={`flex  flex-col-reverse sm:flex-row  w-full h-[83%] sm:px-16`}> 
	        	
	        	<aside className="absolute bottom-0 left-0 bg-gray-700 sm:static sm:rounded-lg h-16 sm:h-full w-full sm:w-[30%] border-r-2 border-gray-200 px-5 flex flex-col justify-around items-center">
	        		
	        		{/*<div className="hidden w-full bg-sky-50 py-4 px-4 flex gap-x-2 justify-between items-center rounded">
	        			
	        			<div className="flex items-center gap-x-2 text-[19px] text-gray-700 font-semibold">
		        			<div className="w-9 h-9 rounded-full bg-gray-400">
		        				<img src={Imgg} className="w-full h-full rounded-full bg-cover  size"/>
		        			</div> 
		        			Profile
	        			</div>

	        			<Arrow  className="text-[20px] font-bold text-gray-700"/>
		        		
	        		</div>
					*/}

	        		{/*<div className="hidden flex w-full flex-col gap-y-4">

		        		<div className="text-gray-600 bg-gray-100  font-bold py-3 px-4 rounded-lg flex gap-x-2 items-center">
		        			<Home  className="text-blue-400 text-[20px]"/> Home
		        		</div>

		        		<div  className="text-gray-100 bg-gray-0 py-3 px-4 rounded-lg flex gap-x-2 items-center">
		        			<Friends  className="text-blue-400 text-[20px]"/> CSC	
		        		</div>

	        		</div>*/}

	        		<div className="sm:px-4 ">
	        			<div className="hidden sm:block">
		        			<div className="flex w-full gap-2 px-1"> <p className="font-bold text-white ">Feedback</p> <SendIcon color="yellow" className="text-2xl"/> </div>

		        			<textarea className="text-white text-sm outline-none focus:border-none w-full bg-transparent p-1 resize-none focus:outline-none focus:border-2 border-l-gray-700" 
		        			placeholder="Click to leave your reviews ..">
		        				
		        			</textarea>
	        			</div>

	        			<Link to="/feedback" className="sm:hidden flex flex-col gap-y-1 items-center text-gray-800">
		        			<Chat className="text-yellow-300"/>
		        			<p className="text-gray-100">Feedback</p>
	        			</Link>
	        		</div>

	        	</aside>  


	        {/*  Right Panel */}
	        	<section className="bg-gray-100 flex flex-col items-center gap-y-3 h-full w-full sm:w-[70%] px-4 py-2">
	        	
	        	{/* Top Section */}
	        		<div className="imgg relative w-full h-[34%] border-[2px] border-gray-500 rounded-lg bg-yellow-200 px-4 sm:pt-5">
	        			<h2 className="font-extrabold text-4xl sm:text-5xl wt text-gray-800 mt-5">Hi, Josh</h2>
	        			
	        			<div className="absolute top-[1px] right-0 w-[40%] flex flex-col gap-y-2 pt-2 pr-2">
		        			
		        			<Link to="/" className=" bg-gray-700 py-4 px-4  rounded-lg flex gap-x-2 items-center">
			        			<Check color="yellow"  className=" text-xl font-bold"/> 
			        			<p className="truncate font-bold text-gray-50">Past Questions</p>
			        		</Link>

			        		<Link to="/department" className="bg-gray-700 py-4 px-4  rounded-lg flex gap-x-2 items-center ">
			        			<Friends color="yellow"  className=" text-[20px]"/>	
			        			<p className="truncate font-bold text-gray-50">CSC</p>
			        		</Link>

	        			</div>

	        		</div>

	        	{/* Categories */}
	        		<div className="w-full h-[45%] sm:h-[60%] flex justify-between bg-pink-0">
	        			
	        			<Link to="/timetable" className="bgc border-[3px] border-green-400 h-full w-[49%] rounded-lg bg-blue-30 px-2  py-6 flex flex-col justify-start gap-4">
	        				
	        				<div className="bg-green-50 w-[40%] sm:w-[30%] flex justify-center items-center  py-5 rounded-2xl"> 
		        				<Time size={20} className="text-green-500 text-lg font-bold"/> 
	        				</div>

	        				<div className="">
		        				<h2 className="text-xl font-extrabold mb-2 text-gray-700">Timetable</h2>
		        				<p className="font-extralight text-black text-sm">Don't miss lectures anymore, with our top notch timetable</p>
							</div>

	        			</Link>


	        			<Link to="/assignment" className="bgc  border-[3px] border-blue-400 h-full w-[49%] rounded-lg bg-blue-30 px-2 py-6 flex flex-col justify-start gap-4">
	        				
	        				<div className="bg-blue-50 w-[40%] sm:w-[30%] flex justify-center items-center px-2 py-5 rounded-2xl"> 
		        				<Assign size={20} className="text-blue-400"/> 
	        				</div>

	        				<div className="">
		        				<h2 className="text-xl font-extrabold mb-2 text-gray-700">Assignment</h2>
		        				<p className="font-extralight text-black text-sm">Getting assignment done has just gotten better , let's go </p>
							</div>

	        			</Link>
	        		
	        		</div>
	 
	        	</section>

        	</section>

        </main>
    );
};


export default HomeScreen;
