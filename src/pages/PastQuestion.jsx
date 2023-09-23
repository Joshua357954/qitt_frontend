import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import { FaChevronRight as Arrow } from 'react-icons/fa';

const PastQuestion = ({ className }) => {
	const [selection,setSelection] = useState('courses')

	const [course,setCourse] = useState('')
	const [time,setTime] = useState('')

	const cours = [0,0,0,0,0,]
    return (
       <main className="w-screen h-screen select-none"> 
        	
        	<section className="w-full h-full overflow-y-auto">
        		<PageNav url="/" name="Past Questions"/>
        	


        	<div className="w-full h-20  mt-5 px-2 ">
        		<div className="w-[70%] sm:w-[40%] bg-gray-200 h-[80%] px-[4px] rounded  py-1 ">
	        		<div className="flex items-center text-center rounded w-full  h-full ">
	        			<div onClick={() => setSelection('courses')} className={`w-[48%] rounded h-full text-lg sm:text-lg text-gray-900 ${selection == 'courses' ? 'font-bold bg-blue-300' : ''} flex items-center justify-center`}>Courses</div>
	        			<div className="w-2 bg-gray-200 h-full rounded"></div>
	        			<div onClick={() => setSelection('practice')} className={`w-[48%] rounded h-full text-lg sm:text-lg text-gray-900 ${selection == 'practice' ? 'font-bold bg-blue-300' : ''} flex items-center justify-center`}>Practice</div>
	        		</div>
        		</div>
        	</div>

			
			{selection == 'courses' ? 
    			<section className="w-full pt-4 bg-gray-40 overflow-y-auto">
    			
        			{ cours.map((item,idx) => {
        				return <div key={idx} className="pb-2 flex items-center gap-x-4 px-2">
		        				<div className="w-14 h-14 rounded-xl full  bg-indigo-400"></div>
		        				<div className="flex flex-col">
			        				<div className="font-bold">STA 190</div>
			        				<div className="font-light">4 documents | PDF </div>
			        			</div>
		        			</div>
		        		})
	        		}
	        	</section>
			: "" }


			{selection == 'practice' ? 
    			<section className="w-full pt-4 bg-gray-40 px-2 gap-y-4 flex flex-col items-center">
    				<div className="flex gap-x-4">
	    				<h2>Course : </h2>
	        			<select onChange={({target}) => setCourse(target.value) } className="bg-transparent flex focus:outline-none"name="api-verbs">
							<option value='STA 126'>STA 126</option>
							<option value='MATHS 114'>MATHS 114</option>
							<option value='MATHS 124'>MATHS 124</option>
							<option value='PHY 178'>PHY 178</option>	
							<option value='GES 100'>GES 100</option>	
						</select>
					</div>

					<div className="flex gap-x-4">Time : 
	        			<select  onChange={({target}) => setTime(target.value) } className="bg-transparent flex focus:outline-none"name="api-verbs">
							<option value='10 mins'>10 mins</option>
							<option value='20 mins'>20 mins</option>
							<option value='30 mins'>30 mins</option>
							<option value='40 mins'>40 mins</option>	
							<option value='50 mins'>50 mins</option>	
							<option value='1 hour'>1 hour</option>	
						</select>
					</div>


					<div className="w-full px-2 sm:w-[50%] flex justify-between items-center h-20 bg-gray-50 mt-8 rounded ">
						<Link to={`/past_question_practice/${course}/${time}`} className="h-[83%] px-7 text-lg gap-x-3 px-4 flex items-center font-semibold focus:text-white hover:text-gray-100 rounded text-white bg-gray-800">Start <Arrow className="text-white"/> </Link>
						<button className="bg-gray-200"> <small className="bg-gray-00 p-0 text-gray-400 text-sm"> Practice </small> <p>With Friends</p> </button>
					</div>

					<Link className="underline">Check ScoreBoard</Link>
	        	</section>
			: "" }

			</section>
       	</main>
        		
    );
};


export default PastQuestion;
