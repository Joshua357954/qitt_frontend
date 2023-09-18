import React, { PropTypes } from 'react';
import { FaChevronLeft as Right } from 'react-icons/fa'
import { BsSend as Chat } from 'react-icons/bs'


import { Link } from 'react-router-dom'

const FeedbackScreen = ({ className }) => {
    return (
        <div className="w-screen h-screen"> 
           <section className="w-full relative h-full">

           		<div className="w-full h-16 sm:h-[13%] bg-black  flex font-bold justify-center items-center">
	           		<Link className="flex flex gap-3 text-gray-50 items-center hover:text-gray-200" to="/"> <Right className="text-yellow-400"/> Go Back </Link>
           		</div>

           		<div className="bg-blue-20 h-[90%] w-full flex-col  gap-y-3 flex items-center pt-12 ">
           			<h1 className="text-3xl wt font-extrabold text-black">Feedback</h1>
           			<div className="h-14 w-14 flex justify-center items-center rounded-full bg-gray-900">
           			<Chat className="text-yellow-400" size={25}/></div>
           			
           			<div className="rounded-lg">
	           			<textarea className="resize-none w-full border-0 border-gray-200 pt-2 h-full focus:outline-blue-400 h-48 w-48 p-1" placeholder="Click Here To Leave Us A Review , Thank You">
	           				
	           			</textarea>
           			</div>

           		</div>

           </section>


        </div>
    );
};

export default FeedbackScreen;
			