import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav.jsx'
import MainLayout from '../components/MainLayout.jsx'
import { BsChevronLeft as Arrow  } from 'react-icons/bs'

const Department = ({ className }) => {
	const [section,setSection] = useState('class')
	const clas = [
		{name:'Joshua',pix:'',exco:''},
		{name:'Divine',pix:'',exco:'Course Rep.'},
		{name:'David',pix:'',exco:''},
	]

	const corses = [
		{name:"GES 101.2",discription:"Computer Appreciation and Applications",lecturers:[]},
		{name:"GES 103.2",discription:"Nigeria people and cultures",lecturers:[]},
		{name:"CSC 182.2",discription:"Computer Applications",lecturers:[]},
		{name:"CSC 183.2",discription:"Introduction to problem solving using python language",lecturers:['Dr Linda']},
		{name:"MTH 114.2",discription:"Introduction to set, logic and Numbers",lecturers:[]},
		{name:"MTH 124.2",discription:"Coordinate Geometry",lecturers:['Dr. Alim']},
		{name:"PHY 112.2",discription:"Introduction to Electricity and Magnetism",lecturers:[]},
		{name:"PHY 103.2",discription:"Laboratory Practices II",lecturers:[]},
		{name:"STA 160.2",discription:"Discriptive Statistics",lecturers:[]},
		{name:"STA 190.2",discription:"Statistics Practical",lecturers:[]},

	] 

	const excos = [
		{name:"Divine Amafor",title:"Coures Representative"},
		{name:"Joy-Cliff Chinazaekpere",title:"Assistant Coures Representative"},
		{name:"Phildora Clerkson",title:"Treasurer"},
		{name:"Monalisa",title:"Director of Socials"},
		{name:"Wallcot",title:"Director of Sports"},
		{name:"Tamar",title:"Director of Welfare"},
		{name:"Pheobe",title:"Director of Information"},
	]

    return (
		<MainLayout route="Department (CSC)">
			<section className="flex flex-col items-center  w-full">
        		
        		<div className="w-full h-14 max-h-14 flex justify-center items-center mt-2">
        			<div className="w-[80%] h-full py-1 bg-purple-50 flex justify-between items-center px-2 rounded text-center ">
        				<div onClick={()=> setSection('class')} className={`w-[33%]  text-lg flex justify-center items-center text-black ${section == 'class' ? 'bg-purple-400 font-extrabold' : ''} h-full rounded`}> Class </div>
        				<div onClick={()=> setSection('excos')} className={`w-[33%]  text-lg flex justify-center items-center text-black ${section == 'excos' ? 'bg-purple-400 font-extrabold' : ''} h-full rounded`}> Excos </div>
        				<div onClick={()=> setSection('courses')} className={`w-[33%]  text-lg flex justify-center items-center text-black ${section == 'courses' ? 'bg-purple-400 font-extrabold' : ''} h-full rounded px-1 `}> Courses </div>

        			</div>
        		</div>

        		{section == 'class' ? 
        			<section className="w-full">
		        		<div className="px-2 h-[6%] bg-gren-100 flex gap-x-3 my-3">
		        			<Link to="/timetable" className="text-gray-600 underline underline-offset-2">Timetable</Link>
		        			<Link to="/assignment" className="text-gray-600 underline underline-offset-2">Assignment</Link>
		        			<p className="underline underline-offset-2">Student(280)</p>
		        		</div>

		        		<div className="w-ful bg-gray-3000 h-[60%] pt-5 overscroll-y-auto">
		        		{
		        			clas.map((item,idx) => {
		        			  	return <div className="pb-2 flex items-center gap-x-4 px-2">
			        				<div className="w-14 h-14 rounded-full  bg-purple-100"></div>
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
        			
	        			{ excos.map((item,idx) => {
	        				return <div key={idx} className="pb-2 flex items-center gap-x-4 px-2">
			        				<div className="w-14 h-14 rounded-full  bg-gray-600"></div>
			        				<div className="flex flex-col">
				        				<div className="font-bold">{item.name}</div>
				        				<div className="font-light">{item.title}</div>
				        			</div>
			        			</div>
			        		})
		        		}
		        	</section>
				: "" }


				{section == 'courses' ? 
        			<section className="w-full">

		        		<div className="w-full pt-5 pl-1">
		        			
		        			
		        			{ corses.map((item,idx) => {
		        				return <div key={idx} className="mb-3 border-l-[4px] border-gray-500 hover:bg-gray-50 pl-3 py-2 flex items-center gap-y-4">
				        				<div className="max-w-14 max-h-14 rounded-xl  bg-blue-900"></div>
				        				<div className="flex flex-col">
					        				<div className="font-black  text-lg">{item.name}</div>
					        				<div className="font-light">{item.discription}</div>
					        				{item.lecturers[0] && <div className="flex gap-x-2 items-center font-bold"><div className="w-3 h-3 rounded-full bg-blue-500"></div>{item.lecturers[0]}</div>}
					        			</div>
				        			</div>
				        		})
			        		}
		        		</div>

		        	</section>
				: "" }

        	</section>
        </MainLayout>
    );


};
export default Department;
