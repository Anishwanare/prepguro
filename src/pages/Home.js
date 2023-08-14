import React from "react";
import info from "../images/info-img.png"

const Home = () => {
  return (
    <>
      {/*  */}
      <div className="md:p-20">
        <h1 className="text-xl md:text-5xl font-semibold text-center md:w-1/2 shadow-lg p-5 md:p-9 md:rounded-2xl  text-purple-800 ">
          Platform to Upgrade Your Skills
        </h1>
        <div className="flex justify-center items-center flex-col mb-10"></div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:gap-10 flex-1 rounded-md p-6 md:mr-8 mb-8 md:mb-0 ">
            <p className="text-gray-600 mb-2">
              Explore our comprehensive programs for both training and
              internship.
            </p>
            <h2 className="text-3xl text-fuchsia-700 md:text-7xl font-semibold mb-4 md:leading-relaxed capitalize">
              Training as well as Internship..
            </h2>
            <button
              className="w-1/2 md:w-1/3 md:py-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:text-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
              type="button"
              style={{ backgroundColor: "#630365" }}
            >
              Explore Now
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center shadow-lg">
            <img
              src={info}
              alt="Course"
              className="rounded-md shadow-md hidden md:block w-full"
            />
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}

      <div className="">
        <h1 className="text-4xl md:text-7xl font-semibold md:leading-tight text-purple-600 text-center capitalize">
          Our best programs
        </h1>
        <hr
          className="h-3 mx-16 md:h-5 rounded-xl md:my-3 bg-fuchsia-700"
        />
        <div className="flex flex-col md:flex-row items-center justify-around md:gap-10 p-9 md:px-32 md:my-12 ">
          {Array.from(Array(3), (e, i) => (
            <div
              className="border border-fuchsia-600 w-full md:w-2/3 p-5 my-5 shadow-lg rounded-2xl"
              key={i}
            >
              <div className=" text-white shadow-lg">
                <img
                  className="w-full rounded-2xl"
                  src="https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between my-5">
                <div className="capitalize">Average Rating</div>
                <div className="capitalize">People Enroll</div>
              </div>
              <div className="mt-5">
                <div className="capitalize text-center w-52 m-auto rounded-full md:text-3xl bg-fuchsia-700 md:p-4 p-2 text-white">
                  <button type="button">Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  */}

      {/*  */}
      <div className="m-5 md:m-8">
        <div className="flex justify-center items-center flex-col mb-6">
          <h2 className="text-4xl md:text-7xl font-semibold md:leading-tight text-purple-600 text-center capitalize">
            Why Us?
          </h2>
          <hr
            className="h-5 rounded-xl"
            style={{ backgroundColor: "#CD74D4" }}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" flex-1 p-4 md:mr-6 mb-6 md:mb-0 bg-white rounded-lg shadow-lg">
            <ol className="md:text-2xl list-decimal md:mx-20 mx-10 whitespace-nowrap">
              <li className=" md:text-3xl md:font-semibold md:py-5 text-fuchsia-600">
                Training at an affordable price
              </li>
              <li className=" md:text-3xl md:font-semibold md:py-5 text-fuchsia-600">
                Internship opportunity after training
              </li>
              <li className=" md:text-3xl md:font-semibold md:py-5 text-fuchsia-600">
                Earn certificates for training and internship
              </li>
            </ol>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png"
              alt="Course"
              className="w-full rounded-md hidden md:block max-w-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/*  */}

      {/*  */}

      <div
        className="md:my-20"
        style={{ backgroundColor: "#fbf1fb", height: "full" }}
      >
        <h2 className="text-4xl md:text-7xl font-semibold md:leading-tight text-purple-600 text-center capitalize">
          What our learner say's
        </h2>
        <div className="my-10 mx-5 text-white flex flex-col gap-6">
          <div className="flex justify-center h md:h-1/2 rounded-2xl md:my-6 ">
            <img
              className="w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsyVVdxkz5zyuE-yRKpdwtre_R234HkS2gQ&usqp=CAU"
              alt=""
            />
            <p className=" bg-fuchsia-800  md:p-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              corporis corrupti eius ipsam fugiat soluta?
            </p>
          </div>
          <div className="flex justify-center flex-row-reverse  h-1/2 rounded-2xl md:my-6">
            <img
              className="w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsyVVdxkz5zyuE-yRKpdwtre_R234HkS2gQ&usqp=CAU"
              alt=""
            />
            <p className=" bg-fuchsia-800  md:p-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              corporis corrupti eius ipsam fugiat soluta?
            </p>
          </div>
          <div className="flex justify-center h-1/2 rounded-2xl md:my-6">
            <img
              className="w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsyVVdxkz5zyuE-yRKpdwtre_R234HkS2gQ&usqp=CAU"
              alt=""
            />
            <p className=" bg-fuchsia-800  md:p-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              corporis corrupti eius ipsam fugiat soluta?
            </p>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Home;
