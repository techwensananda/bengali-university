import Study from "../../assets/study.jpg";
const SearchForCourses = () => {
  return (
    <section
      style={{
        width: "",
        height: "100vh",
        backgroundImage: `url(${Study})`,
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // transform: "scaleX(-1)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          width: "100%",
          height: "100vh",
          padding: "2em",
          background:
            "linear-gradient(to left, rgba(0, 0, 0, 1),rgba(0, 0, 0, .5),  rgba(0, 0, 0, 0))",
        }}
        className="flex justify-around items-center"
      >
        <div></div>
        <div>
          <h1 className="text-4xl font-semibold mb-5">Search For Courses</h1>
          <div>
            <input
              className="mr-5 p-3 mb-5 bg-neutral-500 w-64"
              type="text"
              name=""
              id=""
              placeholder="Keywords"
            />
            <input
              className=" p-3 mb-5 bg-neutral-500 w-64"
              type="text"
              name=""
              id=""
              placeholder="Courses ID"
            />
          </div>
          <div>
            <select className="mr-5 p-3 mb-5 bg-neutral-500 w-64">
              {" "}
              <option value="someOption">Deparment</option>
              <option value="otherOption">
                Bachelor's of Computer Application (BCA)
              </option>
              <option value="otherOption">
                Bachelor of Business Administration (BBA)
              </option>
              <option value="otherOption">
                Master of Computer Application (MCA)
              </option>
              <option value="otherOption">
                Master of Business Administration (MBA)
              </option>
            </select>
            <select className="mr-5 p-3 mb-5 bg-neutral-500 w-64">
              {" "}
              <option value="someOption">Campus</option>
              <option value="otherOption">Kolkata</option>
              <option value="otherOption">Delhi</option>
              <option value="otherOption">Bangaluru</option>
              <option value="otherOption">Mumbai</option>
              <option value="someOption">Pune</option>
              <option value="otherOption">Patna</option>
              <option value="otherOption">Rachi</option>
              <option value="otherOption">Bhupal</option>
              <option value="otherOption">Hydrabad</option>
            </select>
          </div>
          <div>
            <select className="mr-5 p-3 mb-5 bg-neutral-500 w-64">
              {" "}
              <option value="someOption">Level</option>
              <option value="otherOption">Undergraduate</option>
              <option value="otherOption">Postgraduate</option>
            </select>
            <select className="mr-5 p-3 mb-5 bg-neutral-500 w-64">
              {" "}
              <option value="someOption">Instructor</option>
              <option value="otherOption">Shahriar Hoq Shubho</option>
              <option value="otherOption">Sagar Biswas</option>
              <option value="otherOption">Najmus Sakib</option>
              <option value="otherOption">Probir Ghosh</option>
              <option value="someOption">Mir Hussain Murtaza</option>
              <option value="otherOption">Fahim Ahammed Firoz</option>
              <option value="otherOption">Md Mizanur Rahman</option>
              <option value="otherOption">Md. Anisul Islam</option>
              <option value="otherOption">Sakib Ahamed Khan</option>
            </select>
          </div>
          <div>
            <select className="mr-5 p-3 mb-5 bg-neutral-500 w-64">
              {" "}
              <option value="someOption">Semester</option>
              <option value="otherOption">Fall 2018</option>
              <option value="otherOption">Spring 2019</option>
            </select>
            <select className="mr-5 p-3 mb-5 bg-neutral-500 w-64">
              {" "}
              <option value="someOption">Credit</option>
              <option value="otherOption">2.000</option>
              <option value="otherOption">3.000</option>
              <option value="otherOption">4.000</option>
            </select>
          </div>

          <div className="f">
            <input
              className="bg-green-400 w-full py-3 rounded"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForCourses;
