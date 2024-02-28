

// const excos = [
//     {name:"Divine Amafor",title:"Coures Representative"},
//     {name:"Joy-Cliff Chinazaekpere",title:"Assistant Coures Representative"},
//     {name:"Phildora Clerkson",title:"Treasurer"},
//     {name:"Monalisa",title:"Director of Socials"},
//     {name:"Wallcot",title:"Director of Sports"},
//     {name:"Tamar",title:"Director of Welfare"},
//     {name:"Pheobe",title:"Director of Information"},
// ]


// useEffect(() => {
// 	const fetchData = async () => {
// 		try {
// 		const response = await axios.get(`${baseUrl}/api/timetable/${dept}/${year}/${currentDay}`);
// 		console.log(response.data)
// 		setTimetableData(response.data);
// 		} catch (error) {
// 		console.error('Error fetching timetable data:', error);
// 		}
// 	};

// 	fetchData();
// 	}, [baseUrl, dept, year]);


	// const daysClases = [
	// 	{ 'monday': [ {time:"8:00am - 10:00am",color:'bg-green-400',course:"MTH 124",venue:"MBA 1"},
	// 		{time:"10:00am - 12:00pm",color:'bg-orange-400',course:"STA 160",venue:"Maths Hall"},
	// 		{time:"3:00pm - 5:00pm",color:'bg-yellow-400',course:"PHY 112",venue:"MBA 1"},
	// 	 ] },

	// 	{ 'tuesday': [ {time:"9:00am - 10:00am",color:'bg-green-400',course:"CSC 183",venue:"CSC Hall 2"},
	// 			{time:"4:00pm - 5:00pm",color:'bg-orange-400',course:"MTH 114",venue:"MBA 1"},
	// 	] },

	// 	{ 'wednesday': [{time:"9:00am - 11:00am",color:'bg-green-400',course:"GES 101",venue:"MBA 1"},
	// 			{time:"11:00am - 1:30pm",color:'bg-orange-400',course:"Physcis 103",venue:"Physics Lab"},
	// 			{time:"12:00pm - 1:00pm",color:'bg-yellow-400',course:"STA 160",venue:"Maths Hall"}, 
	// 			{time:"3:00pm - 4:00pm",color:'bg-red-400',course:"CSC 183",venue:"Maths Hall"}, 
	// 	 ] },


	// 	{ 'thursday': [{time:"9:00am - 11:00am",color:'bg-green-400',course:"MTH 114",venue:"MBA 1"},
	// 			{time:"10:00am - 11:00am",color:'bg-orange-400',course:"STA 190",venue:"Maths Lab @Annex 2"}, 
	// 			{time:"9:00am - 11:00am",color:'bg-yellow-400',course:"GES 103",venue:"Tetfund 7 in 1"},
	// 			{time:"2:00pm - 4:00pm",color:'bg-red-400',course:"CSC 182",venue:"CSC Hall 2"},  
	// 	  ] },

	// 	{ 'friday': [ {time:"8:00am - 9:00am",color:'bg-green-400',course:"CSC 182",venue:"CSC Hall 2"},
	// 			{time:"10:00am - 11:00am",color:'bg-orange-400',course:"PHY 112",venue:"MBA 1"}, 
	// 			{time:"3:00pm - 5:00pm",color:'bg-yellow-400',course:"MTH 124",venue:"MBA 2"}, 
	// 	  ] },
	// ]