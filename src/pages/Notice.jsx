import React, { PropTypes } from 'react'
import MainLayout from '../components/MainLayout.jsx'
import { PiImageSquareFill as Img } from 'react-icons/pi'
import { AiFillNotification, AiFillInfoCircle } from 'react-icons/ai';




const NoticeCard = ({ type, title, date, description }) => {
  const getIconForType = (type) => {
    return type === 'announcement' ? 
      <AiFillInfoCircle  className="px-2 text-5xl text-blue-700 bg-blue-200 rounded-xl "/>
     :
      <AiFillNotification className="px-2 text-5xl text-green-700 bg-green-200 rounded-xl"/>;
  };
  
  return (
    <div className="flex items-center gap-2 w-[98%] sm:w-[80%] lg:w-[60%] mx-auto rounded p-1 border-b-2 border-b-gray-100">
      {getIconForType(type)}
      <div className="flex flex-col w-full px-2 py-1">
        <p className="flex justify-between font-semibold">{title} <span className='px-2'>{date}</span></p>
        <p className="flex">{description}</p>
      </div>
    </div>
  );
};


const Notice = ({ className }) => {
	const noticeData = [
    {
      type: 'announcement',
      title: 'Important Announcement',
      date: '15th Jun',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel semper dui. Nulla facilisi. Integer nec sem vel ligula varius malesuada. Sed id felis eu justo fermentum tincidunt. Mauris id nisl vitae sapien rhoncus mattis at eu justo.',
    },
    {
      type: 'notification',
      title: 'New Notification',
      date: '16th Jun',
      description: 'Duis mollis, velit in luctus convallis, metus nisl accumsan erat, a fermentum velit purus a lectus. Sed ac felis varius, posuere sapien ac, pharetra justo. Sed interdum vestibulum tellus in efficitur. Fusce ut ex id orci tristique posuere. Ut nec fermentum mauris, ac vulputate justo.',
    },
    {
      type: 'announcement',
      title: 'Another Announcement',
      date: '17th Jun',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a sapien dui. Maecenas vel efficitur justo. Ut efficitur neque ac metus laoreet, in elementum libero volutpat. Fusce accumsan turpis ac libero dictum tristique.',
    },
    {
      type: 'notification',
      title: 'Reminder',
      date: '18th Jun',
      description: 'Suspendisse potenti. Duis sagittis sapien nec nunc eleifend volutpat. Maecenas id sagittis odio, id ultrices augue. Morbi ultricies nisl et laoreet tincidunt. Nunc quis hendrerit tellus. Nam sed felis sed erat bibendum facilisis ut id mauris.',
    },
    {
      type: 'announcement',
      title: 'Important Update',
      date: '19th Jun',
      description: 'Vivamus sit amet laoreet justo. Nam pharetra urna quis elit aliquam, at sagittis metus fringilla. Aenean imperdiet felis vel justo venenatis, id aliquam turpis scelerisque. In hac habitasse platea dictumst. Nam tincidunt nunc ut augue auctor euismod.',
    },
  ];
 

    return (
        <MainLayout route="Notice">
        	<section className="w-full h-full flex flex-col gap-2 justify-center">
        		{noticeData.map((item, index) => (
			        <NoticeCard
			          key={index}
			          type={item.type}
			          title={item.title}
			          date={item.date}
			          description={item.description}
			        />
			      ))}
        	</section>
        </MainLayout>
    );
};

export default Notice

   