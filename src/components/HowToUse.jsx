import React from "react";

const HowToUse = () => {
  return (
    <>
      <div>
        <section className="py-12 bg-black dark:bg-black">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="animate__animated animate__fadeInDown animate__delay-1s text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
              How to Use TodoMatrix
            </h2>
            <p className="text-lg text-gray-600 dark:text-blue-600 mb-12">
              Learn how to get started with TodoMatrix. Our app is simple,
              intuitive, and designed to help you stay on track with your tasks
              and goals.
            </p>

            {/* <!-- Cards Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* <!-- Card 1 --> */}
              <div className="bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                <img
                  src="https://www.actitime.com/wp-content/uploads/2020/12/How-to-Create-a-Project-Task-List.png"
                  alt="Create Tasks"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Create Tasks
                  </h3>
                  <p className="text-blue-200 mb-4">
                    Easily create and categorize your tasks with just a few
                    clicks. Set priorities and add descriptions to stay
                    organized.
                  </p>
                </div>
              </div>
              {/* <!-- Card 2 --> */}
              <div className="bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                <img
                  src="https://media.licdn.com/dms/image/C5612AQFF7-saAwbS9A/article-cover_image-shrink_600_2000/0/1648477446551?e=2147483647&v=beta&t=-bKcc9wiApYezIpyWB9etPrJYNQmucuimetaptrNcDw"
                  alt="Set Deadlines"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Set Deadlines
                  </h3>
                  <p className="text-blue-200 mb-4">
                    Never miss a deadline again. Set due dates for your tasks
                    and get reminders to stay on track.
                  </p>
                </div>
              </div>
              {/* <!-- Card 3 --> */}
              <div className="bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                <img
                  src="https://www.actitime.com/wp-content/uploads/2020/12/How-to-Track-a-Projects-Progress.png"
                  alt="Track Progress"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Track Progress
                  </h3>
                  <p className="text-blue-200 mb-4">
                    Mark tasks as complete and track your progress over time.
                    Stay motivated by seeing your accomplishments.
                  </p>
                </div>
              </div>
              {/* <!-- Card 4 --> */}
              <div className="bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                <img
                  src="https://www.actitime.com/wp-content/uploads/2021/03/6-finest-apps.png"
                  alt="Collaborate"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Collaborate
                  </h3>
                  <p className="text-blue-200 mb-4">
                    Share tasks with your team and collaborate seamlessly.
                    Everyone stays on the same page and tasks are completed
                    faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToUse;
