import React, { PropTypes } from 'react';
import { FaChevronLeft as Right } from 'react-icons/fa'
import { BsSend as Chat } from 'react-icons/bs'
import MainLayout from '../components/MainLayout.jsx'
import PageNav from '../components/PageNav.jsx'

import { Link } from 'react-router-dom'

const FeedbackScreen = ({ className }) => {
    return (
        <div className="w-full h-full"> 
           <section className="w-full relative h-full">

           		{/* <div className="w-full h-16 sm:h-20 flex font-bold justify-start px-6 items-center bg-gray-100"> */}
	           		<PageNav url="Feedback  😍" /> 
           		{/* </div> */}

           		<div className="bg-blue-20 h-[90%] w-full flex-col  gap-y-3 flex items-center pt-12 ">
           			<div className="h-14 w-14 flex justify-center items-center rounded-full bg-gray-900">
           			<Chat className="text-yellow-400" size={25}/></div>
           			
           			<div className="rounded-lg">
	           			<textarea className="resize-none border-0 border-gray-200 pt-2  focus:outline-blue-400 h-48 w-56 p-1" placeholder="Click Here To Leave Us A Review , Thank You">
	           				
	           			</textarea>
           			</div>

           		</div>

           </section>


        </div>
    );
};

export default FeedbackScreen;
			