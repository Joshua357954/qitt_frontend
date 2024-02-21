import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import PageNav from '../components/PageNav.jsx'
import MainLayout from '../components/MainLayout.jsx'
import { BsChevronLeft as Arrow } from 'react-icons/bs'
import { baseUrl, formatCode, formatTime } from '../utils/utils.js'
import { FaChevronRight as AR,FaChevronLeft as AL } from 'react-icons/fa'
import axios from 'axios'


const TimetableScreen = ({ className }) => {

	const [day,setDay] = useState('monday')
	const [isExam,setIsExam] = useState(false)
	const [daysClases,setDaysClasses] = useState([])


	const dept = 'computer_science';
	const year = '100';

	useEffect(() => {

		const fetchData = async () => {
		  try {
			const response = await axios.get(`${baseUrl}/api/timetable/all/${dept}/${year}`);
			console.log(response.data.allTimetables);
			setDaysClasses(response.data.allTimetables)

		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchData(); // Call the fetchData function when the component mounts
	  }, []); 

	// const daysClases = [
	// 	{ 'monday': [ {time:"8:00am - 10:00am",color:'bg-green-400',course:"MTH 124",venue:"MBA 1"},
	// 		{time:"10:00am - 12:00pm",color:'bg-orange-400',course:"STA 160",venue:"Maths Hall"},
	// 		{time:"3:00pm - 5:00pm",color:'bg-yellow-400',course:"PHY 112",venue:"MBA 1"},
	// 	 ] },

	// 	{ 'tuesday': [ {time:"9:00am - 10:00am",color:'bg-green-400',course:"CSC 183",venue:"CSC Hall 2"},
	// 			{time:"4:00pm - 5:00pm",color:'bg-orange-400',course:"MTH 114",venue:"MBA 1"},
	// 	] },

	// 	{ 'wednesday': [{time:"9:00am - 11:00am",color:'bg-green-400',course:"GES 101",venue:"MBA 1"},
	// 			{time:"11:00am - 1:30pm",color:'bg-orange-400',course:"Physcis 103",venue:"Physics Lab"},
	// 			{time:"12:00pm - 1:00pm",color:'bg-yellow-400',course:"STA 160",venue:"Maths Hall"}, 
	// 			{time:"3:00pm - 4:00pm",color:'bg-red-400',course:"CSC 183",venue:"Maths Hall"}, 
	// 	 ] },


	// 	{ 'thursday': [{time:"9:00am - 11:00am",color:'bg-green-400',course:"MTH 114",venue:"MBA 1"},
	// 			{time:"10:00am - 11:00am",color:'bg-orange-400',course:"STA 190",venue:"Maths Lab @Annex 2"}, 
	// 			{time:"9:00am - 11:00am",color:'bg-yellow-400',course:"GES 103",venue:"Tetfund 7 in 1"},
	// 			{time:"2:00pm - 4:00pm",color:'bg-red-400',course:"CSC 182",venue:"CSC Hall 2"},  
	// 	  ] },

	// 	{ 'friday': [ {time:"8:00am - 9:00am",color:'bg-green-400',course:"CSC 182",venue:"CSC Hall 2"},
	// 			{time:"10:00am - 11:00am",color:'bg-orange-400',course:"PHY 112",venue:"MBA 1"}, 
	// 			{time:"3:00pm - 5:00pm",color:'bg-yellow-400',course:"MTH 124",venue:"MBA 2"}, 
	// 	  ] },
	// ]

	const daa = {'name':'josh'}

	const examTB = [
		{ 'monday' : 
			[{date:"4th", time:"9am - 12pm", course: 'STA 160'},
			{date:"4th", time:"9am - 12pm", course: 'STA 160'}]
		},
		{ 'tuesday' : [{date:"6th", time:"9am - 12pm", course: 'GES 102'}]}
	]

	const courses = [ {time:"8:00am - 10:00am",color:"bg-red-300",course:"CHEM 132",venue:"MBA 2"},
	{time:"1:00pm - 3:00pm ",color:"bg-orange-300",course:"MATH 125",venue:"FOS "},
	{time:"3:00pm - 4:00pm",color:"bg-yellow-400",course:"STA 116",venue:"MBA 1"},
	{time:"4:00pm - 6:00pm",color:'bg-green-400',course:"CSC 132",venue:"NSA"} ]

	const days = ['monday','tuesday','wednesday','thursday','friday']
 

   return (

   		<MainLayout route="Timetable">

    		<div className="w-full h-[96%] flex flex-col justify-center ">
    		    	    {/*{<div onClick={() => setIsExam(!isExam)} className="bg-white text-sm md:text-md font-bold px-2 py-3 flex items-center gap-2 rounded-md  text-black">{isExam ? <AL className="font-extrabold"/> : "" } {!isExam ? 'Exam' : 'Lecture'} {!isExam ? <AR className="font-extrabold"/>: ""} </div>}*/}
		

    			<div className="w-full transition-all ease-in-out h-full flex flex-col items-center pt-5">
    				
    				{isExam ? <div className="mx-auto flex items-center gap-4 text-sm mb-4 bg-black text-white p-2 rounded font-bold">
		    			<p className="bg-white text-black px-2 py-1 ">Week 1</p>
	    				<p>Week 2</p>
	    			</div> : ""}

    				<div className="w-full justify-start sm:justify-center flex overflow-x-auto h-12 gap-2 mb-5">
    					{
    						days.map((item,idx) => {
								return <div key={idx} onClick={() => setDay(item)} className={`capitalize flex text-black select-none justify-center px-3 font-bold text-sm items-center  ${item === day ? 'bg-purple-300 border-[0px] border-black' : "bg-purple-50"} rounded-2xl`}> {item} </div>
    						})
    					
    					}
    				</div>

    				<div className="px-2 flex  flex-col items-center w-full">
	    				
	    				{ daysClases && daysClases.map((item,idx) => {
	    					var current_day = Object.keys(item)[0]
	    					var day_classes = Object.values(item)

	    					if (current_day.toLowerCase() == day.toLowerCase()){
	    						return day_classes.map((items,idx) => {
	    								
    								return (items.map((item,idx) => {
		    									return <div key={idx} className="flex w-full sm:w-[70%] mt-2  justify-between bg-gray-100 py-1 px-2">
												<p className="w-[24%]">{formatTime(item.time)}</p>
												<span className={`bg-slate-700 rounded h-22 w-[5px] `}></span>
												<div className="flex flex-col w-[40%]">
												  <p className="font-bold">{formatCode(item.course)}</p>
												  <p className="font-light truncate">{item.venue}</p>
												</div>
											  </div>
											  
							    			})
					    				)
					    			})
		    					}
			    			})
						}
					</div>

    			</div>

    		</div>

		</MainLayout>
    );
};


// const carousel = document.querySelector('.carousel');
// const container = document.querySelector('.carousel-container');
// const slides = document.querySelectorAll('.carousel-slide');

// let startX, isDragging = false, currentIndex = 0, translateX = 0;

// carousel.addEventListener('touchstart', (e) => (isDragging = true, startX = e.touches[0].clientX));
// carousel.addEventListener('touchmove', (e) => isDragging && (translateX += e.touches[0].clientX - startX, container.style.transform = `translateX(${translateX}px)`, startX = e.touches[0].clientX));
// carousel.addEventListener('touchend', () => {
//     if (!isDragging) return;
//     isDragging = false;
//     const threshold = 100, slideWidth = slides[0].offsetWidth;
//     currentIndex += (translateX / slideWidth > 0.5) ? -1 : (translateX / slideWidth < -0.5) ? 1 : 0;
//     currentIndex = Math.min(Math.max(currentIndex, 0), slides.length - 1);
//     translateX = -currentIndex * slideWidth;
//     container.style.transform = `translateX(${translateX}px)`;
// });

// window.addEventListener('resize', () => (translateX = -currentIndex * slides[0].offsetWidth, container.style.transform = `translateX(${translateX}px)`));

export default TimetableScreen;
