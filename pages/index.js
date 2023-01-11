import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '../styles/Home.module.css'
import ProfileImg from "../public/niladri.jpg";
import Link from "next/link";
import Java from "../public/java.png";
import python from "../public/python.png";
import js from "../public/js.png";
import sol from "../public/sol.png";
import sql from "../public/sql.png";
import redux from "../public/redux.png";
import node from "../public/node.png";
import react from "../public/react.png";
import mongo from "../public/mongo.png";
import meta from "../public/meta.png";
import ac3 from "../public/ac3.png"
import ac2 from "../public/ac2.png"
import ac1 from "../public/ac1.png"
import james1 from "../public/james1.jpg"
import james2 from "../public/james2.jpg"
// import james3 from "../public/james3.jfif"
// import james4 from "../public/james4.jfif"
import sanity from "../public/sanity.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <div
            className="w-full  flex items-center justify-center flex-col gap-5 px-8 py-16 md:gap-6 md:h-full md:py-24"
            style={{ backgroundColor: "#111827" }}
          >
            <span
              className="font-extrabold text-gray-400  "
              style={{ letterSpacing: ".3rem" }}
            >
              HI MY NAME IS
            </span>
            <h1
              style={{ color: "#31bdcf" }}
              className="text-3xl font-black md:text-5xl"
            >
              Niladri Sen
            </h1>
            <h1
              style={{ color: "#31bdcf" }}
              className="text-3xl font-black md:text-5xl"
            >
              I am a full-stack dev
            </h1>
            <p className="text-white text-center  font-normal  text-lg md:text-xl md:px-96">
              Experience in Front-End development and application design with 2+
              years of proven experience and proefficient knowledge in frontend
              and backend technologies.
            </p>
            <Link
              href="https://www.linkedin.com/in/niladri-sen/"
              target={"_blank"}
            >
              <button className="bg-blue-500 text-white font-bold rounded-full px-5 py-2">
                Do You want to work with me
              </button>
            </Link>
          </div>
        </section>
        <section>
          <div
            className=" flex flex-col items-center justify-center px-14 py-24 gap-12 md:flex-row md:items-start md:gap-16 "
            style={{ backgroundColor: "#111827" }}
          >
            <div className="">
              <Image
                className="rounded-xl"
                src={ProfileImg}
                width={"400"}
                height={"200"}
              />
            </div>
            <div className=" flex flex-col gap-3 text-center md:text-left md:w-96 md:gap-4 ">
              <span
                className="font-extrabold text-gray-400  "
                style={{ letterSpacing: ".3rem" }}
              >
                ABOUT
              </span>
              <h2 className="text-gray-400 font-black text-2xl md:text-3xl">
                I'm <span style={{ color: "#31bdcf" }}> Niladri Sen.</span>
              </h2>
              <p
                className="text-white tracking-wider py-1 text-lg  "
                style={{ lineHeight: "1.8rem" }}
              >
                💻I've been coding for nearly 6 years and currently working in
                <span className="font-bold">

                  Cognizant technology solutions
                </span>
                as a programmer who loves to build full stack applications and
                having hands on experience in
                <span className="font-bold"> Blockchain technology.</span>
              </p>
              <p className="text-white font-semibold md:text-lg">
                My preffered weapons choice 👇
              </p>
              <div className="grid grid-cols-1 text-left py-6 text-white gap-x-2 gap-y-6 font-medium md:grid-cols-2 ">
                <p>☑ React Js</p>
                <p>☑ Javascript</p>
                <p>☑ Redux/Reduxjs Toolkit</p>
                <p>☑ Solidity</p>
              </div>
              <Link href="https://github.com/niladriSen007">
                <button className=" border-blue-500 border-2  px-3 py-2 rounded-full text-blue-400 font-bold">
                  My Github
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* <div className="w-60 border-1 border-white h-1"></div> */}
        {/* <hr style={{width:"60px"}} /> */}
        <section>
          <div
            className="flex flex-col gap-10 items-center justify-center py-12 px-5 md:px-96"
            style={{ backgroundColor: "#111827" }}
          >
            <h2 className="text-5xl text-white font-extrabold">
              My Tech Stack
            </h2>
            <div className=" my-6 grid grid-cols-3 md:grid-cols-3  gap-x-6 gap-y-12 place-items-center">
              <Image
                className="rounded-xl  "
                src={js}
                width={"200"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={react}
                width={"280"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={node}
                width={"80"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={redux}
                width={"150"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={meta}
                width={"120"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={sol}
                width={"100"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={Java}
                width={"200"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={python}
                width={"200"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={sql}
                width={"180"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={mongo}
                width={"100"}
                height={"100"}
              />
              <Image
                className="rounded-xl"
                src={sanity}
                width={"160"}
                height={"100"}
              />
            </div>
          </div>
        </section>

        {/* //projects */}
        <section>
          <div style={{ backgroundColor: "#111827" }} className="text-center px-16 gap-32 py-36 flex flex-col md:px-36">
                <h2 className="text-4xl text-white font-extrabold " style={{lineHeight:"2.8rem"}}>My Coding Projects💻</h2>
                <div className="flex flex-col md:flex-row md:gap-12">
                <Image
                className="rounded-sm mb-6  mb:flex-1"
                src={ac3}
                width={"400"}
                height={"100"}
              />
              <div className="flex flex-col gap-3 text-white justify-start text-left md:flex-.5">
                <h2 className="text-2xl font-black ">Full Stack E-commerce Website</h2>
                <p className="text-lg">This is a full stack e-commerce website using React js in frontend, Node.js , Express.js in backend and MongoDb as NoSql database.</p>
                <Link href="https://github.com/niladriSen007/ecommerce" className="font-bold">🔗Github Repo</Link>
                <div className="grid grid-cols-1 text-left py-6 text-white gap-x-2 gap-y-6 font-medium md:grid-cols-2 ">
                <p>☑ React Js</p>
                <p>☑ Javascript</p>
                <p>☑ Redux/Reduxjs Toolkit</p>
                <p>☑ Node js</p>
              </div>
              </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse md:gap-12">
                <Image
                className="rounded-sm mb-6  mb:flex-1"
                src={ac2}
                width={"400"}
                height={"100"}
              />
              <div className="flex flex-col gap-3 text-white justify-start text-left md:flex-.5">
                <h2 className="text-2xl font-black ">Web3 Decentralized Application</h2>
                <p className="text-lg">This is a decentralized web application where you can send ether to the owner and all the senders who sent ethers to the owner their name,address will show in the bottom of the website.</p>
                <Link href="https://github.com/niladriSen007/coffee" className="font-bold">🔗Github Repo</Link>
                <div className="grid grid-cols-1 text-left py-6 text-white gap-x-2 gap-y-6 font-medium md:grid-cols-2 ">
                <p>☑ Metamask</p>
                <p>☑ Solidity</p>
                <p>☑ React js</p>
                <p>☑ Hardhat</p>
              </div>
              </div>
                </div>


                <div className="flex flex-col md:flex-row md:gap-12">
                <Image
                className="rounded-sm mb-6  mb:flex-1"
                src={ac1}
                width={"400"}
                height={"100"}
              />
              <div className="flex flex-col gap-3 text-white justify-start text-left md:flex-.5">
                <h2 className="text-2xl font-black ">Amazon E-commerce website</h2>
                <p className="text-lg">This is the redesign of the amazon clone using React js in frontend ,Redux for state management, Node js and Mongo Db for backend.</p>
                <Link href="https://github.com/niladriSen007/amazonclone" className="font-bold">🔗Github Repo</Link>
                <div className="grid grid-cols-1 text-left py-6 text-white gap-x-2 gap-y-6 font-medium md:grid-cols-2 ">
                <p>☑ React Js</p>
                <p>☑ Mongo DB</p>
                <p>☑ Redux/Reduxjs Toolkit</p>
                <p>☑ Node js</p>
              </div>
              </div>
                </div>
          </div>
        </section>


        {/* //experience */}
        <section>
          <div
            className="flex flex-col items-center justify-center "
            style={{ backgroundColor: "#111827" }}
          >
            <h2 className="text-4xl text-white font-extrabold py-12">
              My Experience🏘
            </h2>
            <div className="flex flex-col items-center justify-center ">
              <div className="flex flex-col  gap-3 items-center justify-center px-8 py-14">
                <span
                  className="font-extrabold text-gray-400  "
                  style={{ letterSpacing: ".3rem" }}
                >
                  DEC,2021 - PRESENT
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Cognizant Technology Solutions
                </h2>
                <span className="text-3xl font-extrabold text-white">
                  (Programmer)
                </span>
                <p className="text-white text-center  font-normal  text-lg md:text-xl md:px-96">
                  Worked with the developers of healthcare of CVS department to
                  build beautiful frontend applications
                </p>
              </div>

              <div className="flex flex-col gap-3 items-center justify-center px-8 py-14">
                <span
                  className="font-extrabold text-gray-400  "
                  style={{ letterSpacing: ".3rem" }}
                >
                  OCT,2020 - SEP,2021
                </span>
                <h2 className="text-3xl font-extrabold text-white">Wipro</h2>
                <span className="text-3xl font-extrabold text-white">
                  (Associate)
                </span>
                <p className="text-white text-center  font-normal  text-lg md:text-xl md:px-96">
                  Worked with the developers of healthcare of UHG department to
                  build automated applications and to verify claims of the
                  customers with the help of day to day updated sop's
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* testimonials */}
        <section>
          <div style={{ backgroundColor: "#111827" }} className="py-24 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-white font-extrabold py-12  text-center px-16 md:px-96">
              What clients think about me😁
            </h2>
              <div className="flex flex-col  px-12 md:px-64 gap-4 py-12">
                <div className="text-white flex flex-col gap-8 items-center justify-center">
                  <p className="text-lg text-center">Niladri is a great developer. He is extremely fast, and responsive. I absolutely love working with him.</p>
                  <div className="flex gap-3">
                  <Image
                className="rounded-full"
                src={james2}
                width={"40"}
                height={"20"}
              />
              <div>
                <p className="font-bold">Swarnadip Dutta</p>
                <p>Associate @Tcs</p>
              </div>
                  </div>
                </div>
                <div></div>
              </div>


              <div className="flex flex-col px-12 md:px-64 gap-4 py-12">
                <div className="text-white flex flex-col gap-8 items-center justify-center">
                  <p className="text-lg text-center">His techniques to describe the concepts are mind blowing. I'd like to work with him in future. </p>
                  <div className="flex gap-3">
                  <Image
                className="rounded-full"
                src={james1}
                width={"40"}
                height={"20"}
              />
              <div>
                <p className="font-bold">Julkar Nain James</p>
                <p>Support Executive @Accenture</p>
              </div>
                  </div>
                </div>
                <div></div>
              </div>
          </div>  
        </section>
        <div className="bg-white w-80 h-1"></div>
        <section>
          <div style={{ backgroundColor: "#111827" }} className="text-center py-6">
          <h2 className="text-4xl text-white font-extrabold py-12  text-center px-16 md:px-96">
              Contact Me:)
            </h2>
            <p className="text-white font-bold text-3xl pb-4 md:text-4xl">Email : <span>niladris002@gmail.com</span></p>
          </div>
        </section>
      </main>
    </>
  );
}
