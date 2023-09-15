import React from 'react';
import { Link } from 'react-router-dom'
import { PiImageSquareFill as Img } from 'react-icons/pi'
import { TbSquareRoundedNumber0Filled as Zero,TbSquareRoundedNumber1Filled as One,TbSquareRoundedNumber2Filled as Two,TbSquareRoundedNumber3Filled as Three,TbSquareRoundedNumber4Filled as Four,TbSquareRoundedNumber5Filled as Five,TbSquareRoundedNumber6Filled as Six,TbSquareRoundedNumber7Filled as Seven,TbSquareRoundedNumber8Filled as Eight,TbSquareRoundedNumber9Filled as Nine } from 'react-icons/tb'
import { CgFileDocument as Doc } from 'react-icons/cg'
import PageNav from '../components/PageNav.jsx'
import { FaChevronLeft as ArrowL } from 'react-icons/fa'

import { BsImage, BsChevronLeft as Arrow  } from 'react-icons/bs'

 
const AssignmentScreen = ({ className }) => {

	const data = [1,2,3,4,5]

	const num = {
		'0': <Zero className="text-green-500 text-xl"/>,
		'1': <One className="text-green-500 text-xl"/>,
		'2': <Two className="text-green-500 text-xl"/>,
		'3': <Three className="text-green-500 text-xl"/>,
		'4': <Four className="text-green-500 text-xl"/>,
		'5': <Five className="text-green-500 text-xl"/>,
		'6': <Six className="text-green-500 text-xl"/>,
		'7': <Seven className="text-green-500 text-xl"/>,
		'8': <Eight className="text-green-500 text-xl"/>,
		'9': <Nine className="text-green-500 text-xl"/>,
	}

    return (
        <main className="w-screen h-screen"> 
        	
        	<section className="w-full h-full">
        		
        		<PageNav url="/" name="Assignment"/>


        		<div className="w-full h-[91%] sm:h-[87%] flex justify-center items-center">
        			
        			<div className="w-full sm:w-[60%]  px-3 pt-3  bg-gray-00 h-full overflow-y-auto ">

	    				
	    				{  data.map((item,idx) => {
	    					return <div key={idx} className="w-full mb-2 bg-gray-50 min-h-32 pb-1 flex items-center border-lv-2 border-black  rounded">
	    					
		    					<div className="bg relative w-[35%] h-32 bg-blue-300 rounded-tl rounded-bl">
		    						
		    						<div className=" absolute text-gray-700  wt left-5 sm:left-4 top-2  flex flex-col justify-center items-center w-[30%] ">
		        						{/*<h2 className="font-black text-3xl ob">00{idx+1}</h2>*/}
		        						{/*<p className="font-bold text-lg ob">23</p>*/}
		    						</div>
			    				</div>

								<div className="w-[70%] h-full flex flex-col px-3 pt-2 gap-y-1">
									<h2 to="/assignment/physics" className="text-2xl font-extrabold text-gray-700 space-x-5"> STA 132</h2>
									<p className="font-light flex gap-x-2 items-center justify-center  py-1 rounded-xl w-32">{num[idx.toString()]}Assignments</p>
									{/*<p className="font-light">22 days ago</p>*/}
									<div className="flex gap-1 flex-wrap">
										<Link to="/assignment/Physics/June 5" className="text-black  hover:text-gray-700 text-sm sm:text-md px-2 py-1 bg-blue-100 gap-x-1 hover:bg-blue-200 text-medium flex items-center rounded"><Doc/> July 5<sup>th</sup> </Link>
										<Link to="/assignment/STA 126/July 22" className="text-black hover:text-gray-700 text-sm sm:text-md  px-2 py-1 bg-blue-100 gap-x-1 hover:bg-blue-200 text-medium flex items-center rounded"><Doc/> Sept 13<sup>th</sup> </Link>
										<Link to="/assignment/GES 101/May 19"className="text-black hover:text-gray-700 text-sm sm:text-md  px-2 py-1 bg-blue-100 gap-x-1 hover:bg-blue-200 text-medium flex items-center rounded"><Doc/> July 1<sup>st</sup> </Link>
									</div>
								</div>

				        	</div>})
				        }

			        </div>

			    </div>

        	</section>
        </main>
    );
};


export default AssignmentScreen;
