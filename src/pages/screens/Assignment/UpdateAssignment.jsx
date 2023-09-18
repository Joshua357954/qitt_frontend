import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import Layout from '../../components/MainLayout.jsx'

const UpdateAssignment = ({ className }) => {
    return (
        <Layout screen='Assignment Screen' title="Update Assignment">
	        <h1> Update Assignment </h1>
	        <Link to="/admin/assignment" className="underline">Back to Assignment</Link>
	    </Layout>
    );
};

export default UpdateAssignment;
