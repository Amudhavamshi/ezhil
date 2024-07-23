import Image from "next/image";
import Header from "./header/page";
import ContactForm from "./contactForm/page";
import ProjectCard from "./projectCard/page";
import EducationCard from "./educationCard/page";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 min-h-screen text-gray-200">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto p-4 flex-1">
          <div className="flex justify-center my-8 transform transition-transform duration-500 hover:scale-105">
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert drop-shadow-lg"
              width={100}
              height={200}
              priority
            /> */}
          </div>
          <section id="about" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="leading-relaxed text-lg">
              Passionate about thriving in competitive environments, Ezhilarasi V. thrives on challenges, contributing her utmost to propel company growth. With a keen eye for innovation and dedication to excellence, she blends technical prowess with a strategic mindset, ensuring impactful solutions that drive success in every endeavor.
            </p>
          </section>
          <section id="projects" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <ProjectCard
              title="A Gesture-Based Tool For Sterile Browsing Of Radiology Images"
              description="In ICUs, using computer keyboards and mice can spread infections. This project introduces hand gestures as a sterile alternative for browsing radiology images, enhancing hygiene and efficiency."
            />
            <ProjectCard
              title="Real Time Dashboard"
              description="A real-time dashboard with auto-updating visualizations allows for trend identification and efficient monitoring using current and historical data."
            />
            <ProjectCard
              title="Music Website"
              description="The music & podcast hub is an interactive site with a vast library of music and podcasts, featuring a clean, responsive design built with HTML5, CSS3, and JavaScript."
            />
          </section>
          <section id="education" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <EducationCard
              school="Jaya Engineering College, Anna University"
              degree="BE (CSE)"
              cgpa="8.6"
              year="2019-2023"
            />
            <EducationCard
              school="Christ King Matric Hr Sec School, Manavalanagar"
              degree="HSC"
              percentage="60%"
              year="2018-2019"
            />
            <EducationCard
              school="Govt High School, Papparambakkam"
              degree="SSLC"
              percentage="87.4%"
              year="2016-2017"
            />
          </section>
          <section id="certificates" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Certificates</h2>
            <ul className="list-disc list-inside">
              <li>Project Internship at WOLFERS TECH Company</li>
              <li>Full Stack Web Developer course at NIRMAAN organization</li>
              <li>Core Java course at QUALITY THOGHTS Institution</li>
              <li>WordPress course on UDEMY</li>
            </ul>
          </section>
          <section id="skills" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>HTML, CSS, Bootstrap, JavaScript</li>
              <li>Core Java</li>
              <li>MySQL, PHP</li>
              <li>WordPress</li>
              <li>Openshot – Video editor tool</li>
            </ul>
          </section>
          <section id="volunteering" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Volunteering</h2>
            <ul className="list-disc list-inside">
              <li>Coordinated National technology day event at my college</li>
              <li>Participated in Internal hackathon</li>
              <li>Contributed to a demo stall held at our college</li>
            </ul>
          </section>
          <section id="languages" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Languages</h2>
            <p className="leading-relaxed text-lg">
              Tamil (Native) ✮✮✮✮✮
            </p>
            <p className="leading-relaxed text-lg">
              English (Professional) ✮✮✮✮
            </p>
          </section>
          <section id="contact" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <ContactForm />
          </section>
          <section id="linkedin" className="my-8 p-6 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200 flex items-center">
            <h2 className="text-3xl font-bold mb-4 flex-grow">Connect with me on LinkedIn ▶️▶️</h2>
            <a href="https://www.linkedin.com/in/ezhilarasi01" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://media.licdn.com/dms/image/D5603AQHVPTEE6C757g/profile-displayphoto-shrink_200_200/0/1719029092650?e=2147483647&v=beta&t=OV93LhNjkKqb6NgIiGHsG4f1Y-9AA2zK7moAEb-UoBQ"
                alt="LinkedIn Logo"
                width={200}
                height={100}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </a>
          </section>
        </main>
        <footer className="bg-gray-900 text-gray-200 text-center p-4 shadow-inner">
          <p>© 2024 Ezhilarasi V. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
