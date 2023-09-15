import React from 'react';
import { Link } from 'react-router-dom'
import { FiSend as SendIcon } from 'react-icons/fi'
import { HiHome as Home } from 'react-icons/hi'
import { TbCalendarTime as Time } from 'react-icons/tb'
import { MdBook as Book, MdSchool as School, MdAssignment as Assign } from 'react-icons/md'
import Imgg from '../assets/images/serious-girl (1).jpg'
import { BsFillCameraFill as Camera,BsPlus,BsTools as Tool, BsChat as Chat, BsCheckLg as Check, BsTrashFill as Trash, BsEmojiSmile as Emoji, BsChevronRight as Arrow  } from 'react-icons/bs'
import { ImAttachment as Attachement } from 'react-icons/im'
import { FaUserFriends as Friends, FaFacebookMessenger as Message } from 'react-icons/fa'
 
const HomeScreen = () => {

	const navbar_height = 17


	const Categories = [
		{title: "Timetable",icon: <Time size={20} className="text-gray-700 text-lg font-bold"/> ,link:'/timetable', discription: "Don't miss lectures anymore, with our top notch timetable", bg:"bg-yellow-400"},
		{title: "Resources",icon: <Tool size={20} className="text-gray-700 text-lg font-bold"/> ,link:'/', discription: "Get all you need to stay up-to-date in school, coming ...", bg:"bg-blue-400"}
	]
    return (

        <main className="h-[100vh] w-screen bg-gray-100 select-none">
        	

        	<nav className={`w-full h-[14%] sm:h-[17%] bg-gray-100 flex px-6 sm:px-10 justify-between items-center `}>
        		<div className="text-5xl font-extrabold select-none text-gray-800">Qitt</div>
        		<Link to='/auth' className="text-2xl hidden text-black hover:text-black sm:block"> Dashboard </Link>
        		

        		<div className="flex gap-x-4 items-center">
        			{/*<Link className="flex flex-col gap-y-1 border-2 border-gray-0700 bg-blue-100 rounded-md px-2 py-1 items-center">
	        			<Camera className="text-blue-500"/> 
	        			<p className="font-bold text-gray-700">Post</p>
        			</Link>*/}

	        		<Link to="profile">
	        			<div className="w-16 h-16 border-[2px] border-orange-100 rounded-full bg-gray-400">
			        		<img src={Imgg} className="w-full h-full rounded-full bg-cover  size"/>
			        	</div> 
	        		</Link>
	        	</div>

        	</nav>


        	<section className={`flex  flex-col-reverse sm:flex-row  w-full h-[83%] sm:px-16 pb-1` }> 
	        	
	        	<aside className="absolute bottom-0 left-0 bg-gray-800 sm:static sm:rounded-lg h-16 sm:h-full w-full sm:w-[30%] border-r-2 border-gray-200 px-5 flex flex-row sm:flex-col justify-around items-center">
	        		
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

	        		<Link to="/pastQuestion" className="flex flex-col items-center gap-y-2 px-3 py-4 rounded-lg  bg-gray-590"> 
	        			<Book className="text-xl sm:text-2xl  bg-yellow-00 text-yellow-300 rounded-md"/>
	        			<p className="text-gray-100 text-sm sm:text-lg font-semibold sm:font-bold">Past &nbsp; Q/A's</p>
	        		</Link>

	        		<div className="sm:px-4 ">
	        			<div className="hidden sm:block">
		        			
		        			<div className="flex w-full gap-2 px-1"> 
			        			<p className="font-bold text-white ">Feedback</p> 
			        			<SendIcon  className="text-yellow-300 text-2xl"/>
			        		</div>

		        			<textarea className="text-white text-sm outline-none focus:border-none w-full bg-transparent p-1 resize-none focus:outline-none focus:border-2 border-l-gray-700" 
		        			placeholder="Click to leave your reviews ..">
		        				
		        			</textarea>
	        			</div>

	        			<Link to="/feedback" className="sm:hidden flex gap-y-2 flex-col gap-y-1 items-center text-gray-800">
		        			<SendIcon className="text-yellow-300 text-2xl"/>
		        			<p className="text-gray-100 text-sm font-semibold sm:font-bold">Feedback</p>
	        			</Link>

	        		</div>

	        	</aside>  


	        {/*  Right Panel */}
	        	<section className="flex flex-col items-center gap-y-3 h-full w-full sm:w-[70%] px-4 py-0">
	        	
	        	{/* Top Section */}
	        		<div className="imgg relative w-full h-[34%] sm:h-[55%] border-[2px] border-gray-500 flex rounded-lg bg-yellow-200 px-4 sm:pt-5">
	        			<h2 className="font-extrabold text-4xl sm:text-5xl wt text-gray-800 mt-5 p-2 drop-shadow-2xl ">Hi, Josh</h2>
	        			
	        			<div className="absolute top-[1px] right-0 w-[43%] sm:w-[40%] flex flex-col gap-y-2 pt-2 pr-2">
		        			
		        			<Link to="/assignment" className=" bg-gray-700 py-4 px-4  rounded-lg flex gap-x-2 items-center">
			        			<Assign   className=" text-xl font-bold text-yellow-400"/> 
			        			<p className="truncate font-bold text-white">Assignment</p>
			        		</Link>

			        		<Link to="/department" className="bg-gray-700 py-4 px-4  rounded-lg flex gap-x-2 items-center ">
			        			<Friends  className=" text-[20px]  text-yellow-400"/>	
			        			<p className="truncate font-bold text-white">CSC</p>
			        		</Link>

	        			</div>

	        		</div>

	        	{/* Categories */}
	        		<div className="w-full h-[48%] pb-2 sm:pb-0 sm:h-[100%] flex justify-between">	
	        			
						{
							Categories.map((item,idx) => {
								
								return <Link key={idx} to={item.link} className={`${item.bg} border-[2px] sm:border-[3px] border-gray-600 h-full w-[49%] rounded-lg bg-blue-30 px-2  py-6 flex flex-col justify-start gap-4`}>
		        				
			        				<div className={`${item.iconBg} bg-gray-100 w-5/12 sm:w-3/12   flex justify-center items-center px-1 py-5 rounded-2xl`}> 
				        				{item.icon}
			        				</div>
		
			        				<div className="flex flex-col">
				        				<h2 className="text-xl font-extrabold mb-2 text-gray-900">{item.title}</h2>
				        				<p className="font-medium text-gray-700 text-[14px]">{item.discription}</p>
									</div>
		
			        			</Link>
			        		})
		        		}


	        		</div>
	 
	        	</section>

        	</section>

        </main>
    );
};


export default HomeScreen;
