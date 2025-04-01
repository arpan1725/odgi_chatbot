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
