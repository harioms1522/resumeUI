import React from 'react'
import Navbar from './Components/Navbar'
import pic from "./Components/icons/perfect.png"
import Aboutme from './Components/Aboutme'
import Skills from './Components/Skills'
import nodeIcon from "./Components/icons/nodejs.png"
import redisIcon from "./Components/icons/redis.png"
import reactIcon from "./Components/icons/react.png"
import mongoIcon from "./Components/icons/mongodb.png"
import expressIcon from "./Components/icons/express.jpg"
import dockerIcon from "./Components/icons/docker.png"
import Projects from './Components/Projects'
import Contactme from './Components/Contactme'
import performanceMonitor from "./Components/icons/performanceMonitor.png"
import AnimatedText from './Components/uitilityComponents/AnimatedText'
import Certificates from './Components/Certificates'
import advancedReact from "./Components/icons/advancedReact.png"

// this can be made based on server aw well
const info = {
  name:"Hariom Sharma",
  about:{
    name:"About Me!",
    description:`Are you looking for an exceptional Web Developer to develop and design cutting-edge, secure, and scalable applications? Look no further!

    With extensive experience in Node.js, MongoDB, JavaScript, Socket, Servers, Linux, and REST APIs, I am confident that I can help take your organization to the next level. My objective is to continuously improve my technical skills, work collaboratively with teams, and use my expertise to develop efficient and innovative systems.

    I am also good with front end technologies like react, html, css, and Redux.
    
    I am passionate about delivering quality work, and my proficiency in Linux, socket servers, and REST APIs enables me to design and develop secure and robust applications that meet the most demanding standards. I am eager to work with a dynamic organization and contribute to its growth and success.
    
    If you are seeking a Web Developer who can deliver excellent results while continuously pushing the boundaries of what's possible, let's connect and discuss how we can work together.`,
    details:[
      {
        name:"Backend Developer (Tablt Pharmacy)",
        points:[
          <p>
            Developed and maintained web applications using Node, ensuring scalability, reliability, and
            performance.
          </p>,
          <p>
            <h3 className='mx-b-4 header-color'>MagentoToVueStore:</h3>
            <p className='mx-b-2'>
              <b>Description:</b> This project was used for syncing magento data with our elasticsearch instance. So I chnaged this module such that it uses mongodb instead of magento queries.
            </p>
            <p className='mx-b-2'>
              <b>Skills:</b> <span className='secondary-color'>elasticsearch, kue, redis, magento, mongodb, node, scripting, oop in JS</span>
            </p>
          </p>,
          <p>
            <h3 className='mx-b-4 header-color'>Multer Google Storage Engine:</h3>
            <p className='mx-b-2'>I built a multer storage engine to by pass some vulnerabilities in a 3rd party library we were using for this. I also added the feature to reduce the size of image while uploading</p>
            <p className='mx-b-2'><b>Skills:</b> node, multer, <span className='secondary-color'>streams, buffer, sharp</span></p>
            <p className='mx-b-2'>I’m also developing an opensource version for it (in development)</p>
          </p>,
          <p>
            <h3 className='mx-b-4 header-color'>Power BI integration with our mongodb instance</h3>
            <p className='mx-b-2'><b>Description: </b>As mongodb is a <span className='secondary-color'><b>NOSQL</b></span> database. Querying it natively was difficult with PowerBI. We tried many solutions and completed ot successfully in record time.</p>
            <p className='mx-b-2'><b>Skills:</b> mongodb, <span className='secondary-color'>mongosqld, ODBC drivers, OS, Cdata connector, research</span></p>
          </p>,
          <p>
            <h3 className='mx-b-4 header-color'>Security of pharma portal:</h3>
            <p className='mx-b-2'>We incorporated many industry standards for security of a web app. It included, validation of all requests using AJV, npm packages handling and dependencies correction, Linting for security, environment variables for secrets, env</p>
            <p className='mx-b-2'>I set up a framework for validation of body <span className='secondary-color'><b>using ajv and express</b></span></p>
          </p>
        ] 
      },
      {
        name:"Process Analyst (Ruptok Fintech)",
        points:[
          <p>
            <h3 className='mx-b-4 header-color'>CRM and LMS integration using <span className='secondary-color'>Node JS</span></h3>
            I built <span className='secondary-color'><b>APIs</b></span> to integrate our CRM and LSM so that opportunities could be processed further
          </p>,
          <p>
            <h3 className='mx-b-4 header-color'>Process Management:</h3>
            Mapping business requirements and coordinating in developing and implementing processes in line with the pre-set guidelines.
            Undertaking responsibilities of removing unnecessary procedures in processes; ensuring uniformity in the process understanding at the client’s and the organization's end.
            Monitoring the overall functioning of processes, identifying improvement areas, and implementing adequate measures to maximize client satisfaction level.
            Conducting internal process audits & process reviews for ensuring strict adherence to the process parameters/systems as per defined guidelines
          </p>,
          <p>
            <h3 className='mx-b-4 header-color'>Data Analysis</h3>
            I've used the database of our <span className='secondary-color'><b>CRM</b></span> to prepare reports on sales and the efficiency of different teams involved, using <span className='secondary-color'><b>Tableau</b></span> and <span className='secondary-color'><b>MySQL</b></span>.
          </p> ,
          <p>
            <h3>Tech Support and CRM Issue Handling</h3>
          </p> 
        ] 
      },
      {
        name:"Education",
        points:[
          "B.Sc. (Physical Sciences) :: Zakir Husain Delhi College (Delhi University)",
          "M.Sc. (Physics - Electronics) :: M.M. Degree College (CCSU)",
        ] 
      }
    ]
  },
  skills:[
    {
      name:"Nodejs",
      level:.9,
      description:"A javascript runtime to use JS as a scriptig languages to run js outside browser! I have an experience of around 19 months in node. I have built a deep knowledgebase of the related technologies as well eg. express and mongodb",
      icon:nodeIcon,
      details:[
        {
          name:"Experience",
          points:[
            "",
            "two",
            "three"
          ] 
        },
        {
          name:"Projects",
          points:[
            "sdkjasdjdsfjkajkasdg",
            ""
          ]
        }
      ]

    },
    {
      name:"Express",
      level:.9,
      description:"A nodejs framwork to easily implement servers and routing! And much more thanks to its middleware structure for req response cycle",
      icon: expressIcon

    },
    {
      name:"MongoDB",
      level:.8,
      description:"A document based NOSQL database. That provides fast transactional queries and the documents are easily refered as the JS objects",
      icon: mongoIcon
    },
    {
      name:"React",
      level:.8,
      description: "A front-end framework of js. Its based on components and provides easy ways to generate complex components",
      icon: reactIcon
    },
    {
      name:"Docker",
      level:.8,
      description:"Its a container based technology that provides infrastructure of the app as code. Complex arctictures of Apps can be easily setup using docker containers and associated technologies",
      icon:dockerIcon
    },
    {
      name:"Redis",
      level:.7,
      description:"A in-memory database that can be easily used for the caching purposed and other modules like redis-search are also provided",
      icon: redisIcon
    },
    // "CSS":8, 
    // "HTML":8, 
    // "Bootstrap5":8, 
  ],
  projects:[
    {
      name:"Performance Monitor",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      srcCode:"https://github.com/harioms1522/PerformanceMonitor",
      image:performanceMonitor,
      tags:"Per",
      details:[
        {
          name: "Why?",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        },
        {
          name: "How?",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        },
        {
          name: "What?",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    },
    {
      name:"In Office",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      details:[
        {
          name: "Responsibilities",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    },
  ],
  certificates:[
    {
      name:"Meta Advanced React (Coursera)",
      description: "I examined different types of React components and learned various characteristics and when to use them. And dig into more advanced hooks and custom hooks. I looked into building forms with React used formik. I explored component composition and new patterns, such as Higher Order Components and Render Props.",
      link:"http://google.com",
      image: advancedReact,
      details:[
        {
          name:"What was it about?",
          points:[
            "Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior",
            "Integrate commonly used React libraries to streamline your application development",
            "Seamlessly test React applications with React Testing Library",
          ]
        }
      ]
    }
  ],
  contacts:{
    email: "harioms1522@gmail.com",
    linkedIn: "https://linkedin.com/in/harioms152",
    github: "https://github.com/harioms1522"
  }
}

// state of a json that has all the resume details
export default function App() {
  return (
    <div className='app-container'>
      <div className='hero'>
        <Navbar />
        <img src={pic} alt='' className='profile-img'></img>
        <h3>
          Hariom Sharma
        </h3>
        <p>
          <AnimatedText speed="10">MERN STACK DEVELOPER</AnimatedText>
        </p>
      </div>
      <div className='content'> 
          <Aboutme aboutMe={info.about}/>
          <Skills skills={info.skills}/>
          <Projects projects={info.projects}/>
          <Certificates certificates={info.certificates}/>
          <Contactme contacts={info.contacts}/>
      </div>
    </div>
  )
}
