// import React from 'react';
import { Card, Avatar } from 'antd';
import { FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ProfileCard = () => {

  const token = JSON.parse(localStorage.getItem("token") as string)
  const user = JSON.parse(atob(token.split(".")[1]))

  console.log(user)

  return (
    <div className="max-w-md mx-auto mt-[150px]">
      <Card
        className="w-full shadow-custom"
        cover={<div className="h-32 bg-green-600" />}
      >
        <div className="flex flex-col items-center -mt-16 mb-4 ">
          <Avatar size={128} src={user.image} className="ring-4 ring-white" />
          <h2 className="mt-4 text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <span className="px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full mt-3">
            {user.gender}
          </span>
        </div>
        <Meta
          description={
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <FaBriefcase className="w-5 h-5 mr-2 text-green-600" />
                <span>Sales Manager at Dooley, Kozey and Cronin</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-green-600" />
                <span>Phoenix, Mississippi, United States</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2 text-green-600" />
                <Link
                  to={`mailto:${user.email}`}
                  className="text-green-600 hover:underline"
                >
                  {user.email}
                </Link>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 mr-2 text-green-600" />
                <Link to="tel:+81 965-431-3024">+81 965-431-3024</Link>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="font-semibold mb-2 text-green-600">
                  Additional Information
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Born on May 30, 1996 (28 years old)</li>
                  <li>Blood Type: O-</li>
                  <li>Height: 193.24 cm</li>
                  <li>Weight: 63.16 kg</li>
                  <li>Green eyes, Brown curly hair</li>
                  <li>University: University of Wisconsin--Madison</li>
                </ul>
              </div>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default ProfileCard;