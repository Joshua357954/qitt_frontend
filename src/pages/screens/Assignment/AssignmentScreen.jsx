import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import Layout from '../../components/MainLayout.jsx'


const Assignment = ({ className }) => {
    return (
    	<Layout screen={'Assignment Screen'} title="Assignment">
	        <h1> Admin Assignment </h1>
	        <Link to='/admin/updateAssignment'  className="underline">Update Timetable</Link>
        </Layout>
    );
};


export default Assignment;
