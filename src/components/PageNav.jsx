import { Link } from 'react-router-dom'
import { FaChevronLeft as Arrow } from 'react-icons/fa'

const PageNav = ({ url, name, right }) => {

    return (
    	<div className="sticky top-0 right-0 flex justify-between h-[9%] sm:h-[13%] bg-black items-center text-gray-100 px-2">
			<Link to={url} className="flex gap-3 items-center hover:text-gray-300 font-medium text-gray-300"> <Arrow className="text-gray-400"/>  Back</Link>
			<p className="text-white font-bold text-xl">{ name }</p>
			{!right ? 
				<small className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
			: right
			}
		</div>
    );
};


export default PageNav;
