import React, { PropTypes } from 'react';
import Layout from '../../components/MainLayout.jsx'


const Timetable = ({ className }) => {
    return (
        <Layout screen={'Timetable Screen'} title="Timetable">
	       <div className="w-full h-full px-2 flex flex-col overflow-y-auto gap-y-2">

	       		{ [1,2,3,4,5].map((item) => {
	       			return <figure className="w-full rounded bg-gray-400 px-2 h-32 py-1 flex justify-between items-center">
	       			
	       			{/* First Side */}
	       			<div className="w-[49%] h-full justify-between py-2 flex flex-col">
	       				<label className="flex flex-col w-fit">Start
	       					<input type='time' className=""/>
	       				</label>

	       				<label  className="flex flex-col w-fit">End
	       					<input type='time' className=""/>
	       				</label>
	       			</div>

	       			<div className="w-1 h-full bg-yellow-300 rounded-md"></div>
	       			
	       			{/* Second Side */}
	       			<div className="w-[49%] h-full flex flex-col pl-4 py-2 justify-between items-start">
	       				<div className="flex flex-col">
	       					<p>Course</p>
		       				<select className="rounded px-1 py-[1px] bg-white w-fit flex focus:outline-none" name="course">
								<option value='STA 126'>STA 126</option>
								<option value='GES 100'>GES 100</option>
							</select>
						</div>

						<div className="flex flex-col">
	       					<p>Venue</p>
		       				<select className="rounded px-1 py-[1px] bg-white w-fit flex focus:outline-none" name="course">
								<option value='STA 126'>Tetfund 7 in 1</option>
								<option value='GES 100'>MBA 1</option>
							</select>
						</div>
	       			</div>

	       		</figure>	       			
	       		})
	       	}
	       	
	       </div>
        </Layout>
    );
};

export default Timetable;
