import { LuSchool } from "react-icons/lu";
import { GiTabletopPlayers } from "react-icons/gi";
import { MdOutlineSchool } from "react-icons/md";
import { TbSocial } from "react-icons/tb";

const ApplyForAdmission = () => {
  return (
    <div className="w-11/12 mx-auto bg-white my-3">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start  xl:justify-between xl:items-center px-20 py-9">
        <div className="flex justify-start items-start md:justify-center md:items-center  xl:justify-center xl:items-center gap-6 my-6">
          <LuSchool className="text-5xl font-bold" />
          <div>
            <h1 className="text-xl font-semibold">University Life</h1>
            <p className="text-slate-400 font-medium">Overall in here</p>
          </div>
        </div>
        <div className="flex justify-start items-start md:justify-center md:items-center  md:xl:justify-center md:xl:items-center gap-6 my-6">
          <MdOutlineSchool className="text-5xl font-bold" />
          <div>
            <h1 className="text-xl font-semibold">Graduation</h1>
            <p className="text-slate-400 font-medium">Getting Diploma</p>
          </div>
        </div>
        <div className="flex justify-start items-start md:justify-center md:items-center xl:justify-center xl:items-center gap-6 my-6">
          <GiTabletopPlayers className="text-5xl font-bold" />
          <div>
            <h1 className="text-xl font-semibold">Athletics</h1>
            <p className="text-slate-400 font-medium">Sport Clubs</p>
          </div>
        </div>
        <div className="flex justify-start items-start md:justify-center md:items-center xl:justify-center xl:items-center gap-6 my-6">
          <TbSocial className="text-5xl font-bold" />
          <div>
            <h1 className="text-xl font-semibold">Social</h1>
            <p className="text-slate-400 font-medium">Overall in here</p>
          </div>
        </div>
      </div>
      {/* next */}

      <section className="p-6  text-gray-100">
        <div className="container grid  mx-auto text-center lg:grid-cols-2 xl:grid-cols-6">
          <img
            src="https://a6e8z9v6.stackpathcdn.com/kingster/wp-content/uploads/2018/08/about-bg-1.jpg"
            alt=""
            className="object-cover w-full xl:col-span-3 lg:col-span-2 min:h-[541px] bg-gray-500"
          />

          <div
            style={{
              backgroundImage:
                'url("https://a6e8z9v6.stackpathcdn.com/kingster/wp-content/uploads/2018/08/about-bg-2.jpg")',
            }}
            className="w-full bg-cover bg-center px-6 py-16 sm:px-12 md:px-16 lg:col-span-2 xl:col-span-3"
          >
            <div className="text-start mx-4">
              <h1 className="font-bold text-3xl">Apply for Admission</h1>
              <h3 className="font-bold text-green-400 my-5 text-lg">
                Fall 2019 applications are now open
              </h3>
              <p className="leading-8 font-semibold text-slate-300 text-xl">
                We don’t just give students an education and experiences that
                set them up for success in a career. We help them succeed in
                their career—to discover a field they’re passionate about and
                dare to lead it.
              </p>
              <button className="bg-green-700 hover:bg-green-400 my-6 text-white font-bold py-4 px-7 rounded focus:outline-none focus:shadow-outline">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyForAdmission;
