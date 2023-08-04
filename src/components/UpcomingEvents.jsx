const UpcomingEvents = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our Upcoming Events
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-green-500 sm:text-2xl md:text-2xl text-center">
                Fintech & Key Investment Conference
              </div>
              <div className="text-sm font-semibold sm:text-base mt-4 text-gray-400 flex justify-center items-center flex-col">
                <span> 17 DEC</span> <span> 1:00 pm - 1:00 pm</span>
                <span>Kingster Grand Hall</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-green-500 sm:text-2xl md:text-2xl text-center">
                Sport Management Information Webinar
              </div>
              <div className="text-sm font-semibold sm:text-base mt-4 text-gray-400 flex justify-center items-center flex-col">
                <span> 04 NOV</span> <span> 1:00 pm - 1:00 pm</span>
                <span>Kingster Grand Hall</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-green-500 sm:text-2xl md:text-2xl text-center">
                Planning and Facilitating Effective Meetings
              </div>
              <div className="text-sm font-semibold sm:text-base mt-4 text-gray-400 flex justify-center items-center flex-col">
                <span> 11 SEP</span> <span> 1:00 pm - 1:00 pm</span>
                <span>Kingster Grand Hall</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4 o">
              <div className="text-xl font-bold text-green-500 sm:text-2xl md:text-2xl text-center">
                Others Events
              </div>
              <div className="text-sm font-semibold sm:text-base mt-4 text-gray-400 flex justify-center items-center flex-col">
                <span> 10 NOV</span> <span> 1:00 pm - 1:00 pm</span>
                <span>Kingster Grand Hall</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
