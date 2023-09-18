import React, { PropTypes } from 'react';

const TopNav = ({title}) => {
    return (
       <nav className="w-full h-28 bg-gray-100 flex  items-center">
       		<div className="w-full h-full flex shadow-md">

	       		<div className="w-[80%] h-full bg-transparent pl-24 flex items-center">
		       		<h2 className="text-4xl font-bold text-black">{title}</h2>
	       		</div>
				
			</div>
       </nav> 
    );
};


export default TopNav;
