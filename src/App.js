import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };


  return (
    <main className={`px-8 md:px-20 lg:px-40 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
    
    <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2 glow">
          <img src='/avatar.jpg' layout="fill"style={{ objectFit: 'cover' }} alt='myimage' />
        </div>
        <h1 className='underline decoration-solid underline decoration-3 hover:decoration-purple-600 font-burtons text-lg text-4xl md:text-5xl mt-1 font-medium text-teal-500 hover:text-purple-500'>Pranay Mohature</h1>
        <h3 className='font-serif text-xl md:text-2xl' id='s1'>Cloud & Web Developer</h3>
        <p className='text-md py-1 text-gray-400 md:text-xl'>Enthusiastic and motivated self-learning about Cloud Technology and Web information technology. Focused on cloud computing, devops, and Web development. Now I am looking for more experience in my field. </p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600 cursor-pointer'>
          <AiFillLinkedin onClick={() => window.open('https://www.linkedin.com/in/pranay-mohature', '_blank')}/> 
          <AiFillGithub onClick={() => window.open('https://github.com/PM200214', '_blank')} />
          <AiFillInstagram onClick={() => window.open('https://www.instagram.com/__.pranay.1402.__', '_blank')}/>
        </div>
    </section>
    <section id='service' className='mt-10'>
      <h1 className='underline decoration-double underline decoration-3 hover:decoration-purple-500 font-burtons text-lg text-3xl md:text-3xl font-medium hover:text-purple-500'>MyExperience</h1>
      <p className='font-serif mt-2 text-md'>I have experience in building an Websites and applications and creating cloud architecture as an integration to provide business and consumer solutions. I offer a wide of service, including Frontend Development, Cloud & IT Solutions.</p>

      <div className='mt-7 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-xl rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 '>
          <img src='webd.png' className='w-48' alt='gambar' />
          <h2 className='font-serif text-2xl text-green-500 mt-8 hover:text-purple-500'> Web Development</h2>
          <p className='text-gray-400'>Skilled professional who specializes in building and maintaining websites, build a product or grow existing project.
          Helping you create a powerful and effective web presence that meets your business goals.</p>
          <p className='font-serif text-xl mt-2'>Tools I Use</p>
          <ul>
            <li>React</li>
            <li>Python (Flask)</li>
            <li>Html & Css & Javascript</li>
          </ul>
        </div>

        <div className='w-full shadow-xl rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='cloud.png' className='w-40' alt='gambar' />
          <h2 className='font-serif text-2xl text-green-500 hover:text-purple-500'>Cloud & IT Solutions</h2>
          <p className='text-gray-400'>As a cloud enthusiast, my experience in cloud computing helps businesses and individuals harness the full potential of the cloud and by leveraging my cloud expertise, you can unlock the agility, scalability, and cost-efficiency that cloud computing offers.</p>
          <p className='font-serif text-xl mt-2'>Tools I Use</p>
          <ul>
            <li>AWS, Oracle</li>
            <li>Azure Storage & Conatainer </li>
            <li> Docker</li>
          </ul>
        </div>

      </div>
      <h1 className='underline decoration-double underline decoration-3 hover:decoration-purple-500 font-burtons text-lg text-3xl md:text-3xl mt-10 font-medium hover:text-purple-500'>KeyExpertise</h1>
      <div className='w-full shadow-2xl rounded-md px-5 py-8 flex flex-col items-center text-center gap-2'>
        <img src='all.png' className='w-100' alt='keyskills' />
      </div>

    </section>

    <section id='portfolio' className='mt-10'>
      <h1 className='underline decoration-double underline decoration-3 hover:decoration-purple-500 font-burtons text-lg text-3xl md:text-3xl mt-10 font-medium hover:text-purple-500'>MyProjects</h1>
      <p className=' font-serif mt-1 text-xl'>Here are some projects that I have managed.</p>

      <div className='flex flex-col md:flex-row gap-4 mt-4 hover-zoom'>
        <div className='w-full shadow-xl md:w-2/6 shadow-md rounded'>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='artful.png' className="max-w-xl transition duration-300 ease-in-out hover:scale-110" alt='myimage1'style={{ objectFit: 'cover' }}/>
          </div>
          <div className='p-4'>
            <h1 className='font-serif text-xl font-medium text-green-500 '>Artful Royalties</h1>
            <p className='text-gray-500'> Artful Royalties project involved the development of a web-based platform, the curation of high-quality artworks, the training of AI models using deep learning algorithms, the development of a revenue sharing model, and user testing. These steps ensured that the project achieved its goals of providing fair compensation to artists and improving AI models for image generation.</p>
            <p className='text-sm text-black-800 mt-3'>Current GoingOn</p>
          </div>
        </div>

        <div className='w-full shadow-xl md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='weassist.jpg' className="max-w-xl transition duration-300 ease-in-out hover:scale-110" layout="fill" alt='myimage2'style={{ objectFit: 'cover' }}/>
          </div>
          <div className='p-4'>
            <h1 className='font-serif text-xl font-medium text-green-500'>WeAssist</h1>
            <p className='text-gray-500'>Project is aimed to act as a single destination solution of communication for people with disabilities helping them to communicate among themselves and also other people.
Making an application that can be used easily by disabled people to listen, see or hear thoughts of other people and also convey their own thoughts through our easy-to-use software.
</p>
            <p className='text-sm text-black-500 mt-3'>12 Feb 2022 - 25 July 2022</p>
          </div>
        </div>

        <div className='w-full shadow-xl md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='sanskrit.png' className="max-w-xl transition duration-300 ease-in-out hover:scale-110" layout="fill" alt='myimage3'style={{ objectFit: 'cover' }}/>
          </div>
          <div className='p-4'>
            <h1 className='font-serif text-xl font-medium text-green-500'>Sanskritify</h1>
            <p className='text-gray-500'>To make Sanskrit learning as easy, digital and fun as possible!
A digital app that facilitated Sanskrit learning and includes all the relevant Sanskrit resources in it’s database for easy and frequent access by the learner.Supports personalized learning Quizzes to gain confidence.

</p>
            <p className='text-sm text-black-500 mt-12'> 11 August 2021 - 5 Jan 2022</p>
          </div>
        </div>
      </div>
      <p className=' font-serif mt-1 text-md'>and many more....</p>
    </section>

    <section id='license' className='mt-10'>
      <h1 className='underline decoration-double underline decoration-3 hover:decoration-purple-500 font-burtons text-lg text-3xl md:text-3xl mt-10 font-medium hover:text-purple-500'>License & Certifications</h1>
      <p className='font-serif mt-3 text-xl'>Some of the certifications I have.</p>
      
      <div className='flex flex-col md:flex-row gap-8 mt-4'>

      <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='oracle.png' layout="fill" alt='myimage2'style={{ objectFit: 'cover' }}/>
          </div>
          <div className='p-4'>
            <h1 className='font-serif text-xl font-medium text-green-500 hover:text-purple-500'>Oracle Cloud Infrastructure 2023 Certified</h1>
            <p className='text-gray-500'>Understanding of basic cloud concepts, familiarity with core OCI services including Compute</p>
            <p className='text-sm text-black-500 mt-11'>27 July 2023</p>
          </div>
        </div>


        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='teachnook.png' layout="fill" alt='myimage1'style={{ objectFit: 'cover' }}/>
          </div>
          <div className='p-4'>
            <h1 className='font-serif text-xl font-medium text-green-500 hover:text-purple-500'>Virtual Internship Completion</h1>
            <p className='text-gray-500 mt-8'>Certification in 'Azure Cloud Computing ' which included different topics and modules focusing on different areas of Cloud.</p>
            <p className='text-sm text-black-500 mt-11'>1 Nov 2022 - 1 Jan 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='html1.png' layout="fill" alt='myimage3'style={{ objectFit: 'cover' }}/>
          </div>
          <div className='p-4'>
            <h1 className='font-serif text-xl font-medium text-green-500 hover:text-purple-500 '> Web Development Certification</h1>
            <p className='text-gray-500'>I've acquired proficiency in a wide range of essential web development technologies, including HTML, CSS, JavaScript, and more. I'm passionate about crafting user-friendly and responsive web solutions that meet the unique needs of businesses and individuals. </p>
            <p className='text-sm text-black-500 mt-3'>7 Feb 2023</p>
          </div>
        </div>
      </div>

    </section>
    
    <section id='honor' className='mt-10'>
    <h1 className='underline decoration-double underline decoration-3 hover:decoration-purple-500 font-burtons text-lg text-3xl md:text-3xl mt-10 font-medium hover:text-purple-500'>Honors & Rewards</h1>
    <p className='font-serif mt-3 text-xl'>Here are some of the honors I have.</p>

    <div className='flex rounded shadow-md flex-col md:flex-row px-2 py-4'>
      <div className='pl-4 mt-2 md:w-3/6'>
        <ul className='list-disc pl-4'>
          <li className='hover:text-red-500'>Devfolio: Codebreak 2.0- Shopicom, A platform for small scale business</li><br/>
          <li className='hover:text-green-500'>Eraned Badges in 30 days of cloud program</li>
        </ul>
      </div>
      <div className='pl-4 mt-2 md:w-3/6'>
        <ul className='list-disc pl-4'>
          <li className='hover:text-purple-500'>Certificate of Appreciation for completion of Azure Cloud Internship</li><br/>
          <li className='hover:text-teal-500'>Joined ERC college Community for College level Projects</li>
        </ul>
      </div>
      <div className='pl-4 mt-2 md:w-3/6'>
        <ul className='list-disc px-4'>
          <li className='hover:text-orange-500'>Devfolio: Codebreak 4.0- Ashok leyland, spare part management system</li><br/>
          <li className='hover:text-pink-500'>Volleyball district level</li><br/>
          <li className='hover:text-cyan-500'>Kabbadi played at town level</li>
        </ul>
      </div>
    </div>
    
    </section>

    <section id="footer" className='mt-8 rounded bg-black py-8 px-8 ' >
      <div className='text-white md:text-center'>
        <h1 className='font-serif mt-3 text-4xl'>Contact Me</h1>
        <p className='font-serif mt-3'>Want to know more about me?</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-3 mt-1'>
            <AiFillMail />
            <p className='font-serif mt-3 hover:text-purple-500 cursor-pointer' onClick={() => window.open('https://www.gmail.com', '_blank')}>Pranaymohature54@gmail.com</p>
          </li>
          <li className='flex items-center gap-2 mt-1'>
            <AiFillEnvironment />
            <p className='font-serif mt-3 hover:text-purple-500 cursor-pointer' onClick={() => window.open('https://www.google.com/maps/place/Pune,+Maharashtra', '_blank')}>Pune</p>
          </li>
          <li className='flex items-center gap-2 mt-1'>
            <AiFillPhone/>
            <p className='font-serif mt-3 hover:text-purple-500 cursor-pointer'>+91-9665870721</p>
          </li>
        </ul>

        <div className='flex text-4xl text-white gap-4 mt-2 md:justify-center cursor-pointer'>
          <AiFillLinkedin  onClick={() => window.open('https://www.linkedin.com/in/pranay-mohature', '_blank')}/> 
          <AiFillGithub onClick={() => window.open('https://github.com/PM200214', '_blank')} />
          <AiFillInstagram onClick={() => window.open('https://www.instagram.com/__.pranay.1402.__', '_blank')}/>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-gray-300 sm:text-center hover:text-cyan-500">
          © 2023
          <a href="#home">Made by Pranay</a>. All Rights Reserved.
        </p>

      </div>
      
    </section>

    </main>
  );
}

export default App;
