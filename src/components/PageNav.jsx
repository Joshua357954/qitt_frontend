import { Link } from 'react-router-dom'
import { FaChevronLeft as Arrow } from 'react-icons/fa'
import BackA from '../assets/images/arrow-left.svg'


const PageNav = ({ url, name, right }) => {

    return (
    	<div className="z-10 sticky top-0 right-0 flex justify-between h-[70px] bg-gray-100 items-center text-gray-100 px-2">
			 <img  onClick={() => window.history.back()}src={BackA} className="w-6 text-gray-300 ml-3"/> 
			<p className="text-black font-bold text-xl">{ url }</p>
			{!right ? 
				<small className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
			: right
			}
		</div>
    );
};


export default PageNav;
