import { Link } from 'react-router-dom'
import { useState } from "react"
import { BsChevronLeft as Arrow  } from 'react-icons/bs'


const TimetableScreen = ({ className }) => {

	const [day,setDay] = useState('monday')

	const courses = [ {time:"8:00am - 10:00am",color:"bg-red-300",course:"CHEM 132",venue:"MBA 2"},
	{time:"1:00pm - 3:00pm ",color:"bg-orange-300",course:"MATH 125",venue:"FOS "},
	{time:"3:00pm - 4:00pm",color:"bg-yellow-400",course:"STA 116",venue:"MBA 1"},
	{time:"4:00pm - 6:00pm",color:'bg-green-400',course:"CSC 132",venue:"NSA"} ]

	const days = ['monday','tuesday','wednesday','thursday','friday','saturday']
   
   return (
        <main className="w-screen h-screen select-none"> 
        	
        	<section className="w-full h-full ">
	    	    
	    	    <div className="flex justify-between h-[9%] sm:h-[13%] bg-gray-800 items-center text-gray-100 px-2">
	    			<Link to="/" className="flex gap-3 items-center hover:text-gray-100 font-medium text-gray-100"> <Arrow className="text-green-400"/>  Back</Link>
	    			<p className="text-green-400 font-bold text-xl">Timetable</p>
	    			<small className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
	    		</div>
    		

	    		<div className="w-full h-[91%] flex justify-center sm:h-[87%] ">
	    			
	    			<div className="w-full sm:w-[60%] h-full bg-blac flex flex-col items-center bg-yellow-10 pt-5">
	    				
	    				<div className="w-full px-2 h-[7%] mb-7 sm:h-[10%]  overflow-x-auto flex sm:justify-center gap-x-2">
	    					{
	    						days.map((item,idx) => {
									return <div onClick={() => setDay(item)} className={`capitalize flex border-2 border-black text-black select-none justify-center px-2 font-bold text-sm items-center ${item === day ? 'bg-green-300' : ""} rounded-xl`}> {item} </div>
	    						})
	    					
	    					}
	    				</div>

	    				<div className="px-2 flex flex-col items-center sm:items-center w-full smm:w-[60%]">
		    				{ courses.map((item,idx) => {
		    					return (<div className="flex w-full sm:w-[70%] mt-2 items-center justify-between bg-gray-100 py-1 px-2"> 
					    					<p className="w-[24%]"> {item.time}</p>
					    					<div className={`${item.color}  font-black rounded  h-full w-[5px] text-center`}></div>
					    					<div className="flex flex-col w-[40%]">
					    						<p className="font-bold">{item.course}</p>
					    						<p className="font-light truncate">{item.venue}</p>
					    					</div>
					    				</div>)
				    			})
							}
						</div>

	    			</div>

	    		</div>

			</section>
        </main>
    );
};

export default TimetableScreen;
