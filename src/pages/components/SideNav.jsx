import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import {BsBook} from 'react-icons/bs'
import { HiHome as Home } from 'react-icons/hi'
import { TbCalendarTime as Time } from 'react-icons/tb'
import { MdBook as Book, MdSchool as School, MdAssignment as Assign } from 'react-icons/md'
import { BsFillCameraFill as Camera,BsPlus,BsTools as Tool, BsChat as Chat, BsCheckLg as Check, BsTrashFill as Trash, BsEmojiSmile as Emoji, BsChevronRight as Arrow  } from 'react-icons/bs'
import { ImAttachment as Attachement } from 'react-icons/im'
import { FaUserFriends as Friends, FaFacebookMessenger as Message } from 'react-icons/fa'
 

const SideNav = () => {

	const SideNav_Items = [
		{name: 'Users',icon:<Friends className="text-xl  text-yellow-300 "/>, route:'/admin'},
		{name:"Timetable",icon:<Time className="text-xl  text-yellow-300 "/>, route:'/admin/timetable'},
		{name:"Assignment",icon:<Assign className="text-xl text-yellow-300 "/>, route:'/admin/assignment'},
		{name:"Past Questions",icon:<Tool className="text-xl  text-yellow-300 "/>, route:'/admin/feedback'},
        {name:"Feedback",icon:<Chat className="text-xl  text-yellow-300 "/>, route:'/admin/feedback'},

	]

    return (
        <aside className="h-full w-[30%] bg-gray-200 flex flex-col items-start">
        	
        	<div className="flex flex-col w-full py-1 h-fit justify-center items-center text-center bg-gray-200">
       			<h1 className="font-black text-black">Qitt</h1>
       			<p className="bg-red-600 text-sm w-fit text p-1 rounded text-gray-100"> Admin</p>
	       	</div>

        	<div className="w-full h-full px-2 pt-4">
        	{SideNav_Items.map((item, index)=> {
				return <Link to={item.route} key={index} className=" hover:text-gray-300 text-sm focus:text-gray-400 active:text-gray-300 bg-black bg-opacity-80 text-black rounded py-4 px-2 text-white flex items-center gap-x-2 mt-1">{item.icon}{item.name}</Link>
		        })
        	}
        	</div>
        </aside>
    );
};


export default SideNav;
