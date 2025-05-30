import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="bg-black py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto text-center">
          {/* <!-- Title Section --> */}
          <h1 className="text-white animate__animated animate__fadeInDown animate__delay-1s text-3xl sm:text-3xl md:text-4xl font-extrabold  mb-6">
            About TodoMatrix
          </h1>
          <p className="text-base sm:text-lg text-blue-500 mb-8">
            Welcome to your productivity partner! Our To-Do List app is designed
            to help you stay organized, focused, and on top of your daily tasks.
            Whether you're managing work projects, personal goals, or just
            trying to get through your day, our intuitive interface and powerful
            features make task management simple and effective.
          </p>

          {/* <!-- Features List --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Task Organization
              </h3>
              <p className="text-blue-200">
                Easily create, categorize, and prioritize tasks with just a few
                clicks.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Reminders
              </h3>
              <p className="text-blue-200">
                Never miss a deadline again! Set due dates and get reminders to
                keep you on track.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Collaboration
              </h3>
              <p className="text-blue-200">
                Share tasks and to-do lists with others for seamless team
                collaboration.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Progress Tracking
              </h3>
              <p className="text-blue-200">
                Mark tasks as complete, track your progress, and stay motivated
                as you check things off.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Customizable
              </h3>
              <p className="text-blue-200">
                Personalize your experience with color themes, labels, and
                sorting options.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition ease-in-out duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Conquer</h3>
              <p className="text-blue-200">
                Complete your tasks and Conquer the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
