import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-black py-12">
        <div className="relative w-full max-w-5xl rounded-lg">
          {/* <!-- Gallery Heading inside the same container --> */}
          <div className="text-center py-8">
            <h2 className="animate__animated animate__fadeInDown animate__delay-1s text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Testimonials
            </h2>
          </div>
          <div className="grid gap-8 mt-5 md:grid-cols-2">
            {/* Testimonial Cards */}
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              <blockquote className="max-w-2xl mx-auto mb-4 text-blue-200 lg:mb-8">
                <h3 className="text-lg font-semibold text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-4">
                <img
                  className="rounded-full w-9 h-9 border-2 border-blue-500"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="Bonnie Green"
                />
                <div className="text-left ms-3">
                  <div className="font-medium text-white">Bonnie Green</div>
                  <div className="text-sm text-blue-300">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              <blockquote className="max-w-2xl mx-auto mb-4 text-blue-200 lg:mb-8">
                <h3 className="text-lg font-semibold text-white">
                  Solid foundation for any project
                </h3>
                <p className="my-4">
                  Designing with Figma components that can be easily translated
                  to the utility classNamees of Tailwind CSS!
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-4">
                <img
                  className="rounded-full w-9 h-9 border-2 border-blue-500"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="Roberta Casas"
                />
                <div className="text-left ms-3">
                  <div className="font-medium text-white">Roberta Casas</div>
                  <div className="text-sm text-blue-300">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              <blockquote className="max-w-2xl mx-auto mb-4 text-blue-200 lg:mb-8">
                <h3 className="text-lg font-semibold text-white">
                  Mindblowing workflow
                </h3>
                <p className="my-4">
                  Aesthetically, the well designed components are beautiful and
                  will undoubtedly level up your next application.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-4">
                <img
                  className="rounded-full w-9 h-9 border-2 border-blue-500"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos"
                />
                <div className="text-left ms-3">
                  <div className="font-medium text-white">Jese Leos</div>
                  <div className="text-sm text-blue-300">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              <blockquote className="max-w-2xl mx-auto mb-4 text-blue-200 lg:mb-8">
                <h3 className="text-lg font-semibold text-white">
                  Efficient Collaborating
                </h3>
                <p className="my-4">
                  You have many examples that can be used to create a fast
                  prototype for your team.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-4">
                <img
                  className="rounded-full w-9 h-9 border-2 border-blue-500"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="Joseph McFall"
                />
                <div className="text-left ms-3">
                  <div className="font-medium text-white">Joseph McFall</div>
                  <div className="text-sm text-blue-300">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>

            {/* Other Testimonial Cards */}
            {/* <!-- Remaining testimonials go here --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
