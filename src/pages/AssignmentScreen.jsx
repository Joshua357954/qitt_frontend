import React from 'react';
import { Link } from 'react-router-dom'
import { PiImageSquareFill as Img } from 'react-icons/pi'
import { TbSquareRoundedNumber0Filled as Zero,TbSquareRoundedNumber1Filled as One,TbSquareRoundedNumber2Filled as Two,TbSquareRoundedNumber3Filled as Three,TbSquareRoundedNumber4Filled as Four,TbSquareRoundedNumber5Filled as Five,TbSquareRoundedNumber6Filled as Six,TbSquareRoundedNumber7Filled as Seven,TbSquareRoundedNumber8Filled as Eight,TbSquareRoundedNumber9Filled as Nine } from 'react-icons/tb'
import { CgFileDocument as Doc } from 'react-icons/cg'
import PageNav from '../components/PageNav.jsx'
import { FaChevronLeft as ArrowL } from 'react-icons/fa'
import MainLayout from '../components/MainLayout.jsx'
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

		<MainLayout route="Assignment">

			<div className="w-full pt-3 min-h-full overflow-y-auto ">

				
				{  data.map((item,idx) => {
					return <div key={idx} className="w-full mb-2 bg-white min-h-32 pb-1 flex items-center  rounded">
					
    					<div className="relative w-[35%] h-32 bg-purple-200 rounded-tl rounded-bl">

	    				</div>

						<div className="w-[65%] h-full flex flex-col px-3 pt-2 gap-y-1">
							<h2 to="/assignment/physics" className="text-2xl font-extrabold text-gray-700 space-x-5"> STA 132</h2>
							<p className="font-light flex gap-x-2 items-center justify-center  py-1 rounded-xl w-32">{num[idx.toString()]}Assignments</p>
							{/*<p className="font-light">22 days ago</p>*/}
							<div className="flex gap-1 flex-wrap">
								<Link to="/assignment/Physics/June 5" className="text-black  hover:text-gray-700 text-sm sm:text-md px-2 py-1 bg-purple-100 gap-x-1 hover:bg-purple-200 text-medium flex items-center rounded"><Doc/> July 5<sup>th</sup> </Link>
								<Link to="/assignment/STA 126/July 22" className="text-black hover:text-gray-700 text-sm sm:text-md  px-2 py-1 bg-purple-100 gap-x-1 hover:bg-purple-200 text-medium flex items-center rounded"><Doc/> Sept 13<sup>th</sup> </Link>
								<Link to="/assignment/GES 101/May 19"className="text-black hover:text-gray-700 text-sm sm:text-md  px-2 py-1 bg-purple-100 gap-x-1 hover:bg-purple-200 text-medium flex items-center rounded"><Doc/> July 1<sup>st</sup> </Link>
							</div>
						</div>

		        	</div>})
		        }

	        </div>
		</MainLayout>
    );
};


export default AssignmentScreen;
