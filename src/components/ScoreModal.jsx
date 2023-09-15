import React, { PropTypes } from 'react';
import { FaChevronRight as Right } from 'react-icons/fa'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ScoreModal = ({ callback }) => {
    
    return (
       <section className="absolute top-0 left-0 right-0 bottom-0 h-[100dvh] flex justify-center items-center bg-[rgba(0,0,0,.3)]">
       		
       		<div onClick={() => callback()} className="w-[90%]  sm:w-[50%] h-[50%] sm:h-[70%] bg-white text-center flex flex-col items-center">
	       		<h2 className="text-4xl font-bold"> Your Total Score  </h2>
	       		<Link className="underline flex gap-x-1 items-center ">Go to score board <Right/></Link>
       		</div>

       </section> 
    );
};


export default ScoreModal;
