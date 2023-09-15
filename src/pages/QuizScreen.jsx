import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'
import ScoreModal  from '../components/ScoreModal.jsx'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaChevronLeft as Right } from 'react-icons/fa'

const Question = ({num}) => {
	var [ans,setAns] = useState(false)

	function handleClick () {
		if (ans) setAns(false)
		else return setAns(true)
	}

	
	return (
		<div className="w-full ">
        			
			<p className="mt-5 mt-3 font-semibold flex items-center"><h2>Q{num+1}. &nbsp; &nbsp;&nbsp;&nbsp;</h2> What is the creepiest animal in the world .</p>
			
			<label className="ml-2 flex gap-x-4 font-light">
				<input value="male" checked={ans == true} onChange={handleClick} type="radio" className="mr-1"/>
				<p>Donkey</p>
			</label>
			<label className="ml-2 flex gap-x-4 font-light">
				<input value="male" checked={ans == true} onChange={handleClick} type="radio" className="mr-1"/>
				<p>Monkey</p>
			</label>
			<label className="ml-2 flex gap-x-4 font-light">
				<input value="male" checked={ans == true} onChange={handleClick} type="radio" className="mr-1"/>
				<p>Cow</p>
			</label>
			<label className="ml-2 flex gap-x-4 font-light">
				<input value="male" checked={ans == true} onChange={handleClick} type="radio" className="mr-1"/>
				<p>Buffalo</p>
			</label>

	    </div>
	)
}




const QuizScreen = ({ className }) => {
	
	const navigate = useNavigate()
	const {course,time} = useParams()
	const [submitted,setSubmitted] = useState(false)

	function leaveQuiz (e) {
		e.preventDefault()
		return navigate("/pastQuestion")
	}

	function closeModal () {
		setSubmitted(false)
	}

	function endQuiz () {
		setSubmitted(true)
	}



    return (
        <main className="w-screen h-screen select-none"> 
        	
        	<section className="w-full h-full overflow-y-auto">
	        	{/*Quiz Screen*/}
	        	<nav className="sticky top-0 right-0 w-full flex justify-between items-center h-16 bg-yellow-400 px-2">
	        		
	        		<div className="flex gap-x-5 items-center h-full ">

		        		<Link onClick={leaveQuiz}> <Right className="text-gray-700"/> </Link>
			        
		  	        	<div className="flex flex-col justify-center w-full px-2 bg-blue-1000 h-full">
			        		<p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{course}</p>
				        	<div className="text-sm text-gray-600 font-semibold">0 out 5</div>
			        	</div>
					</div>

	        		<div className="flex flex-col items-center">
	        			<p className="text-sm">Time Remaining</p>
	        			<p className="font-bold text-gray-800">{time}</p>
	        		</div>
	        	</nav>

	        	<section className="w-full flex justify-center items-center">
		        	<div className="w-full sm:w-[70%] px-3 sm:px-0 pb-4 pt-2 bg-blue-00 grid grid-cols-1 sm:grid-cols-2">
		        		
		        		{
		        			[0,0,0,0,0,0,0,0,0,0].map((item,idx) => {
		        				return <Question num={idx}/>
		        			})
		        		}
		        	</div>
		        </section>

				<div className="flex p-2  bg-yellow-10 w-full items-center flex flex-col ">
	        		<button onClick={endQuiz} style={{backgroundColor:'red'}} className="w-[40%] h-full hover:bg-red-400 text-white">
	        			Submit
	        		</button>
	        		{/*<p className="bg-blue-00 text-sm flex justify-start items-start text-center font-light"><MdClose className=" text-xl"/>By clicking this you agree to end your practice session</p>*/}
	        	</div>
        	</section>

        	{submitted ? <ScoreModal callback={closeModal} /> : ""}

        </main>
    );
};
// store quiz in local storage
export default QuizScreen;
