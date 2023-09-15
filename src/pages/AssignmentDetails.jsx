import { Link } from 'react-router-dom'
import { FaChevronLeft as Arrow,FaChevronDown as ArrowD } from 'react-icons/fa'
import { CgFileDocument as Doc } from 'react-icons/cg'
import { useParams } from 'react-router-dom'
import PageNav from '../components/PageNav.jsx'



const AssignmentDetails = ({ className }) => {
	const { course,date } = useParams()
    return (
        <main className="w-screen h-screen"> 
        	
        	<section className="w-full h-full">
        		
        		<PageNav url='/assignment' name={course}/>
	        	{/* ( {date}<sup>th</sup> )*/}

        		<div className="flex justify-center w-full  h-[91%] sm:h-[87%]">
        			<div className="w-full sm:w-[60%] h-full px-2">
        				
        				<div className="flex items-center gap-x-2 pt-3">
        					<p className="font-semibold text-black"> Course : </p> <h2 className="text-2xl font-bold text-gray-800">{course}</h2>
        				</div>
        				
        				<div className="flex items-center gap-x-2 pt-3 ">
        					<p className="font-semibold text-black"> Date Given : </p> <h2 className="text-2xl font-bold text-gray-800">{date}</h2>
        				</div>
        				
        				<div className="w-full pr-4 mt-4 rounded h-14 bg-gray-200 justify-between flex items-center px-1">
        					<div className="flex gap-x-3 items-center">
	        					<Doc className="text-2xl font-bold text-sky-900"/>
	        					<p className="text-xl font-bold text-gray-800"> Files</p>
        					</div>

        					<ArrowD className="text-gray-700"/>
        				</div>
        			</div>
        		</div>

        	</section>

        </main>
    );
};


export default AssignmentDetails;
