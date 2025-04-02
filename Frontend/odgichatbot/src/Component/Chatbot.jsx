import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./css/Chatbot.css";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      text: "Hello! I'm OmDayal Group of Institution's Assistant Chatbot, how may I help you today?",
      suggestions: ["About Omdayal Group of Institutions", "Messege from HOI","Admission Inquiry", "Infrastructure", "Program Offered", "Scholarship", "Training and Placement", "Campus Life", "Query Form", "Contact Us"]
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const apiKey = process.env.REACT_APP_GEMINI_API_KEY || "API_KEY_NOT_FOUND";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchOpenAIResponse = async (input) => {
    try {
      const parts = [
        {
          text: `You are a chatbot for OmDayal Group of Institutions. Here is the college information:

          College Name: OmDayal Group of Institutions

          Engineering, Architecture and Management Courses.

          Website ID : https://omdayal.com/

          College Address and Location : Plot No.38(P), 38(A), 39(P) & 39(A)
                                         Uluberia Industrial Growth Centre
                                         Near Birshibpur Railway Station
                                         Howrah – 711316
                                         West Bengal, India
                                         The Institute is located on NH6 about 30kms away from Kolkata at Uluberia Industrial Growth Center and is walking distance from Birshibpur Railway Station.
                                         There is excellent bus connection from all parts of Kolkata to the campus location.
                                         (https://omdayal.com/contact/)
          
          Principal: Dr. Yogesh Kumar Sinha
          Vice Principal: Dr. Prosenjit Sen
          Secretary: Sri. Alok Tibrewal
          HOD Computer Science and Engineering Department : Prof. Dipankar Hazra
          HOD Science and Humanities Department: Dr. Sukanya Das Chandra
          HOD Mechanical Engineering Department: Dr. Ranjit Barua
          HOD Civil Engineering Department: Prof. Srijan Mukherjee
          HOD BBA: Prof. Pradipta Biswas

          Approvals and Accreditation: (https://omdayal.com/approval-accreditation/)
          - Affiliated under Maulana Abul Kalam Azad University of Technology, West Bengal(Formely West Bengal University of Technology(WBUT))
          - All B. Tech, BBA, BCA Courses are approved by AICTE(All India Council for Technical Education)
          - Accreditated by NAAC (National Assessment and Accreditation Council)
          - All Architecture Courses are approved by COA (Council of Architecture)

          Courses: (https://omdayal.com/admissions/programme-offered/)
          - B. Tech in Computer Science and Engineering (4 Year Duration, 60 Seats): Fees ₹4,60,000
          - B.Tech in Civil Engineering (4 Year Duration, 60 Seats): Fees ₹4,60,000
          - B. Tech in Electrical Engineering (4 Year Duration, 60 Seats): Fees ₹4,60,000
          - B. Tech in Mechanical Engineering (4 Year Duration, 60 Seats): Fees ₹4,60,000
          - B. Tech in CSE with AI & ML (4 Year Duration, 30 Seats): Fees ₹4,60,000
          - Bachelor of Computer Application (BCA) 4 Year Duration: Fees ₹2,50,000
          - Bachelor of Business Admistration (BBA) 4 Year Duration: Fees ₹2,50,000
          - Bachelor of Architecture (B. Arch, 5 Year Duartion): Fees ₹5,51,000
          - Master of Architecture (M. Arch, 2 Year Duration):Fees ₹1,82,000

          (https://omdayal.com/admissions/fees/)

          About OmDayal Group of Institutions:   (https://omdayal.com/about/)
          - The OmDayal Group has transformed school education through DPS Ruby Park, Kolkata and DPS Durgapur, continually striving for excellence. Expanding its vision, the Group established OmDayal Group of Institutions, offering programs in Engineering, Architecture, and Management.
          - New Ventures:
          - Vidyamandir Classes, Kolkata
          - Ruby Park Public School, New Alipore (near Taratala Crossing)
          Commitment to Quality Education:
          - Enhancing academic standards and knowledge development.
          - Providing state-of-the-art infrastructure and a supportive learning environment.
          - Instilling moral and ethical values in students and staff.

          Vision & Mission Objectives : (https://omdayal.com/vision-mission-objective/)

          - Vision: To be a reputed institute transforming technical education in Bengal with globally standardized programs, shaping students into competent global professionals.  
          - Mission: To ensure excellence in teaching-learning with state-of-the-art resources, qualified faculty, and holistic development opportunities, while empowering students to showcase their inherent talents.
          

          Message from Principal/HOI: (https://omdayal.com/message/)

          - At OmDayal Group of Institutions, we foster creativity, innovation, and excellence in Engineering, Architecture, and Management. With state-of-the-art infrastructure, advanced research, and expert faculty, we empower students with the knowledge and skills to drive national progress. Join us in shaping the future and making a meaningful impact on society.

          Infrastructure: (https://omdayal.com/infrastructure/)

          - OmDayal Group of Institutions offers world-class infrastructure, including modern classrooms, cutting-edge labs, research facilities, and advanced technological support, ensuring a conducive environment for academic growth and innovation.
          
          Anti- Ragging: (https://omdayal.com/anti-ragging/)

          - No Ragging, The institute promotes healthy interactions amongst the students and strongly discourages ragging. The Anti Ragging Committee is very active and there has been no such incident at the institute since its inception. Ragging in any form is strictly prohibited within the premises of the College Campus.
            All students have to undertake an anti ragging declaration.

          Gallery :
           - Visit on https://omdayal.com/gallery/ for our vast college gallery of infrastructure and other facilities.

          Contact US :

          - +91 33 71300253 / +91 33 71300254
          - https://omdayal.com/contact/ (Contact Page)

          Training and Placement: (https://omdayal.com/training-placement/overview/)

          - The training and placement plays a pivotal role in shaping up the career goals of students. It is the dream of every student to get placed in a top organization. At present, the competition for employment is increasing every day and placement has become a challenging task The Training & Placement Cell of the college creates a platform where students can showcase their talents which different companies seek to explore and utilize. Starting from 2014, OmDayal has successfully placed a large section of graduates who have appeared for placements. Our competent alumnae have made remarkable footprints in the corporate world and the cell is putting their tremendous effort to continue legacy and expand it in the years to come.
          - Our objective is to provide 100% placement assistance, recognize students' core competencies, enhance technical knowledge and communication skills, and build confidence with the right attitude to meet industry expectations during recruitment.
          - Final-year students interested in placements register with the placement cell, which compiles a stream-wise database shared with companies as per their criteria. The cell has built a strong network with over 50 companies, enhancing recruitment opportunities. Companies are invited for drives, where students undergo a selection process, including presentations, tests, group discussions, and interviews. With evolving trends, most placements now take place through virtual platforms.
          
          Our Recuiters:
          - Due to the location of our college at Uluberia Industrial Growth Centre, which one the fastest growing industrial zone in the city of Howrah and Kolkata, the Industrial Interaction, Collaborations and Visits are more often.
          - We have a great Industry Connections, our students are placed in eminent IT industry like TCS, Wipro, Infosys, CapGemini, Cognizant, Accenture, NrXen, DeltaX, Allied Media etc
          - To know more about our latest recurtiers, please visit https://omdayal.com/training-placement/recruiters/
        
          Placement Data:

          - https://omdayal.com/training-placement/placement/ (Visit Us)

          Training Internships:
          
          - Due to the location of our college at Uluberia Industrial Growth Centre, which one the fastest growing industrial zone in the city of Howrah and Kolkata, the Industrial Interaction, Collaborations and Visits are more often.
          - visit thsi page for more details https://omdayal.com/training-placement/training-internship/
          
          Higher Education:
         
          - Higher education plays a vital role in shaping careers and fostering innovation. It equips students with advanced knowledge, critical thinking skills, and industry-relevant expertise, preparing them for global opportunities. At OmDayal Group of Institutions, we encourage continuous learning, research, and skill development to help students excel in their chosen fields.
          - https://omdayal.com/higher-education-btech/

          Campus Life:

          - https://youtu.be/6ZxJxKfDsp8?si=ECSoTyPhkAU5MCK2

          - Campus life at OmDayal Group of Institutions is vibrant and enriching, offering a perfect blend of academics, extracurricular activities, and personal growth. With state-of-the-art infrastructure, student clubs, cultural events, and industry interactions, we foster a dynamic environment where students can learn, innovate, and build lifelong memories.
          


          Query Form:

          - Please visit this page for the enquiry https://omdayal.com/enquire-now/


          BLOG :

          - ODGI Blog – A Hub of Knowledge and Innovation  
            Welcome to the OmDayal Group of Institutions (ODGI) Blog, where ideas, insights, and innovations come to life! Stay updated with the latest trends in Engineering, Architecture, and Management, explore student achievements, faculty expertise, and industry advancements. Join us in fostering knowledge, creativity, and excellence.
          Visit ( https://omdayal.com/blog/ )


          NSS/Community Servcie: (https://omdayal.com/campus-life/nss/)

          - OmDayal Group of Institutions, Uluberia, stood by the victims of Cyclone Yaas in May 2021, providing mental, physical, and financial support. With proper planning and coordination with local authorities, our dedicated staff distributed daily rations and nutritious meals across affected areas from June 1 to June 10, overcoming COVID-19 challenges with determination and compassion.
          

          Student Activities: (https://omdayal.com/campus-life/students-activities/)

          - At OmDayal Group of Institutions, students engage in a variety of activities that foster learning, creativity, and leadership. From technical clubs and cultural fests to sports, seminars, and community service, our vibrant campus life ensures holistic development, preparing students for academic and professional excellence.
          

          Curriculum Enrichment Programmes: (https://omdayal.com/campus-life/curriculum-enrichment-programmes/)

          - OmDayal Group of Institutions enhances learning through industry-oriented training, workshops, expert lectures, internships, and hands-on projects. These programs bridge the gap between academics and industry, equipping students with advanced skills, practical knowledge, and a competitive edge in their careers.

          Extra Curricular Activities: (https://omdayal.com/campus-life/extra-curricular-activities/)
          
          - OmDayal Group of Institutions promotes holistic development through diverse extra-curricular activities, including cultural events, sports, technical clubs, debates, and community service. These activities foster creativity, teamwork, leadership, and personal growth, ensuring a well-rounded student experience.

          
          Social Infrastructure: (https://omdayal.com/campus-life/social-infrastructure/)

          - OmDayal Group of Institutions offers a well-planned social infrastructure, including modern academic facilities, libraries, laboratories, hostels, healthcare, sports complexes, and recreational spaces. We foster a vibrant community that supports learning, collaboration, and overall well-being.


          Student's Chapter: (https://omdayal.com/campus-life/students-chapter/)

          - OmDayal Group of Institutions actively encourages student chapters of professional bodies, providing a platform for knowledge sharing, skill development, and industry exposure. These chapters organize seminars, workshops, competitions, and networking events, helping students stay updated with the latest trends and advancements in their fields.


          Courses: (https://omdayal.com/academics/departments/)

          - B. Tech, B. Arch, BBA, BCA, M. Arch 


          Arcitecture Course (B. Arch and M. Arch) :

          - (https://omdayal.com/academics/departments/?tab=architecture) visit this link for more info.
          - OmDayal Group of Institutions offers Bachelor of Architecture (B.Arch) and Master of Architecture (M.Arch) programs, designed to nurture creativity, technical expertise, and sustainable design thinking. With a strong emphasis on practical learning, industry exposure, and state-of-the-art infrastructure, these courses prepare students to excel in the evolving field of architecture.
          
          Computer Science and Engineering(B. Tech):

          - Visit this link for more info (https://omdayal.com/department/computer-science-engineering/)
          - The B.Tech in Computer Science & Engineering at OmDayal Group of Institutions equips students with cutting-edge technical skills in programming, AI, cybersecurity, and software development. With a strong industry-oriented curriculum, hands-on projects, and state-of-the-art labs, the program prepares graduates for thriving careers in the tech industry.

          Computer Science and Engineering with AI and ML (B. Tech):

          - Visit this link for more info (https://omdayal.com/department/artificial-intelligence-and-machine-learning/)
          - OmDayal Group of Institutions offers a B.Tech in Computer Science & Engineering with a specialization in Artificial Intelligence & Machine Learning, focusing on cutting-edge technologies like deep learning, data science, and neural networks. With hands-on projects, industry collaborations, and advanced labs, the program prepares students for careers in AI-driven innovation.

          Civil Engineering (B. Tech):

          - The B.Tech in Civil Engineering at OmDayal Group of Institutions provides a strong foundation in structural design, construction technology, and sustainable engineering. With advanced labs, industry-oriented training, and practical exposure, the program equips students with the skills to build innovative and resilient infrastructure.

          Mechanical Engineering (B. Tech):

          - Vist this page for info (https://omdayal.com/department/mechanical-engineering/)
          - The B.Tech in Mechanical Engineering at OmDayal Group of Institutions focuses on core areas like thermodynamics, robotics, manufacturing, and automation. With hands-on training, modern labs, and industry-driven projects, the program equips students with the skills needed for innovation and problem-solving in the engineering sector.


          Electrical Engineering (B. Tech):

          - Vist this page for info (https://omdayal.com/department/electrical-engineering/)
          - The B.Tech in Electrical Engineering at OmDayal Group of Institutions covers power systems, electronics, automation, and renewable energy. With modern labs, hands-on projects, and industry collaborations, the program prepares students for careers in energy, automation, and cutting-edge electrical technologies.

          BBA:

          - Vist this page for more info (https://omdayal.com/department/bba/)
          - The Bachelor of Business Administration (BBA) program at OmDayal Group of Institutions equips students with essential management, finance, marketing, and entrepreneurship skills. With industry-oriented training, case studies, and leadership development, the program prepares students for dynamic careers in business and management.

          BCA:

          - Vist this page for more info (https://omdayal.com/department/bca/)
          - The Bachelor of Computer Applications (BCA) program at OmDayal Group of Institutions focuses on software development, database management, networking, and AI. With a practical, industry-driven curriculum, modern labs, and hands-on projects, the program prepares students for careers in IT and software industries.
          
          Examination Cell:

          - The Examination Cell at OmDayal Group of Institutions ensures a smooth and transparent assessment process. It manages exam schedules, evaluations, result processing, and adherence to academic regulations, maintaining fairness and integrity in the examination system.
          - Vist here for more info (https://omdayal.com/academics/examination/)

          Academic Calendar:

          - Vist this page for more info (https://omdayal.com/academics/academic-calendar/)
          - The Academic Calendar at OmDayal Group of Institutions outlines the schedule for semesters, examinations, holidays, and important academic events. It helps students and faculty plan their activities efficiently, ensuring a structured and well-organized academic journey.

          Research Activities of our college:

          - Vist this page for more info (https://omdayal.com/academics/research/)
          - OmDayal Group of Institutions fosters a strong research culture through innovation, interdisciplinary projects, and industry collaborations. With state-of-the-art labs and faculty mentorship, students engage in cutting-edge research in engineering, architecture, and management, contributing to technological and societal advancements.

          Teching - Learning :

          - Vist this page for more info (https://omdayal.com/academics/teaching-learning/)
          - OmDayal Group of Institutions follows an industry-aligned teaching-learning approach with modern pedagogies, hands-on training, and interactive methods. The curriculum is designed to blend theoretical knowledge with practical applications, ensuring students gain the skills needed for academic and professional excellence.

          Resource Center (Library and other facilities):

          - Vist this page for more info (https://omdayal.com/campus-life/resource-center/)
          - The Resource Center at OmDayal Group of Institutions includes a well-stocked library with digital access, research journals, and academic resources. Additionally, it offers modern labs, e-learning facilities, and study spaces, providing students with a comprehensive learning environment.

          Supporting Departments (Science and Humanities Department):

          - Physics, Chemistry, English, and Mathematics.
          - The Science and Humanities Department at OmDayal Group of Institutions strengthens foundational knowledge in Physics, Chemistry, Mathematics, and English. These subjects support engineering and management studies by enhancing analytical, scientific, and communication skills, ensuring a well-rounded education.
          - Vist this link for more info (https://omdayal.com/academics/supporting-departments/)

          Rules and Regulation:
          
          - Vist this link for more info (https://omdayal.com/rules-regulations/)

          Fees Structure:

          - Vist this link for more info (https://omdayal.com/admissions/fees/)

          Hostel Facility:

          - OmDayal Group of Institutions provides safe and comfortable hostel accommodations with well-furnished rooms, hygienic dining, 24/7 security, and Wi-Fi. The hostels maintain a disciplined and friendly environment, ensuring students' well-being and academic focus. Recreational and study spaces promote a balanced lifestyle.
          - Vist this link for more info (https://omdayal.com/admissions/hostel/)

          Transport:

          - There is excellent bus connection from all parts of Kolkata to the campus location.
          - OmDayal Group of Institutions offers a safe, secure, and efficient transport facility for students, faculty, and staff, covering up to 60 km across Kolkata, Howrah, and South 24 Parganas. The service operates with five buses on different routes, equipped with fire safety measures, first aid kits, and three CCTV cameras per bus linked to a central server. GPS tracking ensures real-time monitoring, and backup buses are available in case of emergencies. For route details and further information, the Transport Department can be contacted at contact@omdayal.com .
          - Vist this link for more info (https://omdayal.com/admissions/transport/).

          Admission Form:

          - Visit this link for your admission at OmDayal Group of Institutions (https://omdayal.com/online-admissions/applynew.html)
          

          Scholarships:

          - OmDayal Group of Institutions provides various scholarship opportunities to support meritorious and deserving students. Scholarships are awarded based on academic excellence, financial need, and special categories such as government-aided schemes. The institution encourages students to apply for state and national-level scholarships to ease financial burdens and promote higher education. For detailed eligibility criteria and application procedures, students can contact the scholarship cell.

          - Vist this link for more info (https://omdayal.com/admissions/scholarship/)
          

          
          
          Know the admission process by clicking this link : https://omdayal.com/admissions/admission-procedure/


         Faculty Profiles :

         - OmDayal Group of Institutions boasts a team of highly qualified and experienced faculty members dedicated to academic excellence and student development. The faculty comprises experts from diverse fields, ensuring a dynamic and industry-relevant learning environment. With a strong focus on research, innovation, and hands-on training, they mentor students to excel in their respective domains. Regular workshops, seminars, and interactive sessions further enhance the teaching-learning experience.

         - Vist this link for more info (https://omdayal.com/faculty-profiles/)


         Syllabus Download for all the courses:(Link)
         
         - B. Tech in Computer Science & Engineering - https://omdayal.com/wp-content/uploads/2024/12/cse-200225.pdf
         - B. Tech in CSE with Artificial Intelligence and Machine Learning - https://omdayal.com/wp-content/uploads/2025/02/ai-ml-2025.pdf
         - B. Tech in Electrical Engineering -  https://omdayal.com/wp-content/uploads/2025/03/omdayal-EE-brochure.pdf
         - B. Tech in Mechanical Engineering - https://omdayal.com/wp-content/uploads/2025/03/omdayal-ME-brochure.pdf
         - B. Arch in Architecture - https://omdayal.com/wp-content/uploads/2025/01/Syllabus_B.Arch-18-2-25.pdf
         - M. Arch in Architecture - https://omdayal.com/wp-content/uploads/2025/01/m.arch-19-2-25.pdf
         - BBA - https://omdayal.com/wp-content/uploads/2024/08/bba-syllabus-2023-24.pdf
         - BCA - https://omdayal.com/wp-content/uploads/2024/08/bca-syllabus-2023-24-1.pdf
      












          Answer only related to this college details. 
          Here is the user's query: ${input}`,
        },
      ];
      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        },
      });
      
      const responseText = result.response.text() || "I'm sorry, I couldn't fetch the response.";
      
      let newSuggestions = [];
      if (responseText.toLowerCase().includes("admission")) {
        newSuggestions = ["Admission Requirements", "Fee Structure", "Application Process"];
      } else if (responseText.toLowerCase().includes("courses")) {
        newSuggestions = ["Computer Science Engineering", "Civil Engineering", "BCA Details"];
      } else if (responseText.toLowerCase().includes("contact")) {
        newSuggestions = ["Email", "Phone Number", "Campus Location"];
      }
      
      return { text: responseText, suggestions: newSuggestions };
    } catch (error) {
      console.error("Error generating response:", error);
      return { text: "Sorry, there was an error processing your request.", suggestions: [] };
    }
  };

  const handleSend = async (inputText) => {
    if (!inputText.trim()) return;
    
    const userMessage = { sender: "user", text: inputText };
    const botResponse = await fetchOpenAIResponse(inputText);
    
    setChatHistory((prev) => [...prev, userMessage, { sender: "bot", text: botResponse.text, suggestions: botResponse.suggestions }]);
    setUserInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
            {message.suggestions && message.suggestions.length > 0 && (
              <div className="button-container">
                {message.suggestions.map((buttonText, btnIndex) => (
                  <button key={btnIndex} onClick={() => handleSend(buttonText)}>{buttonText}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(userInput)}
        />
        <button onClick={() => handleSend(userInput)}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
