import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav.jsx'
import { BsChevronLeft as Arrow  } from 'react-icons/bs'

const Department = ({ className }) => {
	const [section,setSection] = useState('class')
	const clas = [
		{name:'Joshua',pix:'',exco:''},
		{name:'Divine',pix:'',exco:'Course Rep.'},
		{name:'David',pix:'',exco:''},
	]
    return (
        <main className="w-screen h-screen select-none"> 
        	
        	<section className="w-full h-full">
        		
        		<PageNav url="/" name="CSC"/>

        		<div className="w-ful h-[9%] sm:h-[13%] bg-ed-100 flex justify-center items-center mt-2">
        			<div className="w-[75%] h-full py-1 bg-gray-100 flex justify-between items-center px-2 rounded text-center ">
        				<div onClick={()=> setSection('class')} className={`w-[33%]  text-lg flex justify-center items-center text-black ${section == 'class' ? 'bg-yellow-400 font-extrabold' : ''} h-full rounded`}> Class </div><div className="h-full ml-1 w-1 bg-gray-100"></div>
        				<div onClick={()=> setSection('excos')} className={`w-[33%] rounded flex justify-center text-black ${section == 'excos' ? 'bg-yellow-400 font-extrabold' : ''} items-center  h-full`}> Excos </div><div className="h-full w-1 bg-gray-100"></div>
        				<div onClick={()=> setSection('courses')} className={`w-[33%] rounded flex justify-center text-black ${section == 'courses' ? 'bg-yellow-400 font-extrabold' : ''} items-center  h-full`}> Courses </div>
        			</div>
        		</div>

        		{section == 'class' ? 
        			<section className="w-full">
		        		<div className="px-2 h-[6%] bg-gren-100 flex gap-x-3 pt-2">
		        			<Link to="/timetable" className="text-gray-600 underline underline-offset-2">Timetable</Link>
		        			<Link to="/assignment" className="text-gray-600 underline underline-offset-2">Assignment (5)</Link>
		        			<p className="underline underline-offset-2">Student(280)</p>
		        		</div>

		        		<div className="w-ful bg-gray-3000 h-[60%] pt-5 overscroll-y-auto">
		        		{
		        			clas.map((item,idx) => {
		        			  	return <div className="pb-2 flex items-center gap-x-4 px-2">
			        				<div className="w-14 h-14 rounded-full  bg-blue-500"></div>
			        				<div className="flex flex-col">
				        				<div className="font-bold">{item.name}</div>
				        				{!item.exco ? "" : <div className="font-light">{item.exco}</div>}
				        			</div>
		        			</div>
			        		})
		        		}
		        		</div>
		        	</section>
				: "" }


				{section == 'excos' ? 
        			<section className="w-full pt-5">
        			
	        			{ clas.map((item,idx) => {
	        				return <div key={idx} className="pb-2 flex items-center gap-x-4 px-2">
			        				<div className="w-14 h-14 rounded-full  bg-blue-900"></div>
			        				<div className="flex flex-col">
				        				<div className="font-bold">Divine Amafor</div>
				        				<div className="font-light">Course Representative </div>
				        			</div>
			        			</div>
			        		})
		        		}
		        	</section>
				: "" }


				{section == 'courses' ? 
        			<section className="w-full">

		        		<div className="w-full pt-5">
		        			
		        			
		        			{ clas.map((item,idx) => {
		        				return <div key={idx} className="pb-2 flex items-center gap-x-4 px-2">
				        				<div className="w-14 h-14 rounded-xl  bg-blue-900"></div>
				        				<div className="flex flex-col">
					        				<div className="font-bold">CSC 132</div>
					        				<div className="font-light">Data Processing and fundamentals of computing</div>
					        			</div>
				        			</div>
				        		})
			        		}
		        		</div>

		        	</section>
				: "" }

        	</section>
        </main>
    );


};
export default Department;
