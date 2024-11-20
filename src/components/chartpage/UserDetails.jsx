// import { Input } from "../components/ui/input"
import { Input } from "../ui/input"

const UserDetails = ({basicInfo}) => {
    return (
        <div >
            <div className="flex justify-between p-2 py-4">
                <div className="flex gap-2 items-center">
                    <label className="whitespace-nowrap">Patient Last Name</label>
                    <Input value={basicInfo?.last_name}/>
                </div>

                <div className="flex  gap-2 items-center">
                    <label className="whitespace-nowrap">First Name</label>
                    <Input value={basicInfo?.first_name}/>
                </div>

                <div className="flex  gap-2 items-center">
                    <label className="whitespace-nowrap">Date of Birth</label>
                    <Input value={basicInfo?.date_of_birth}/>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;

// import React, { useState } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// const DentalForm = () => {
//   const [formData, setFormData] = useState({
//     toothNumber: "",
//     mobility: "",
//     implant: "",
//     furcation: "",
//     bleedingOnProbing: ["", "", ""], // for 3 surfacesplaque: ["", "", ""], // for 3 surfacesgingivalMargin: ["", "", ""],
//     probingDepth: ["", "", ""],
//   });
//   const { transcript, resetTranscript } = useSpeechRecognition();

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <span>Browser does not support speech recognition.</span>;
//   }
//   const handleVoiceInput = (field, index = null) => {
//     // Start listeningSpeechRecognition.startListening({ continuous: false });

//     setTimeout(() => {
//       // Stop listening and save the transcriptSpeechRecognition.stopListening();

//       setFormData((prevData) => {
//         if (index !== null) {
//           // Update array fields (e.g., bleedingOnProbing, plaque)const updatedArray = [...prevData[field]];
//           updatedArray[index] = transcript.trim();
//           return { ...prevData, [field]: updatedArray };
//         }
//         return { ...prevData, [field]: transcript.trim() };
//       });
//       resetTranscript(); // Reset transcript for the next field
//     }, 4000); // Adjust time as per your need
//   };

//   const handleSubmit = () => {
//     console.log("Form Data Submitted: ", formData);
//     // Submit the data (e.g., send to a server)
//   };

//   return (
//     <div>
//       <h1>Dental Form</h1>
//       <div>
//         <label>Tooth Number:</label>
//         <button onClick={() => handleVoiceInput("toothNumber")}>Speak</button>
//         <span>{formData?.toothNumber}</span>
//       </div>
//       <div>
//         <label>Mobility:</label>
//         <button onClick={() => handleVoiceInput("mobility")}>Speak</button>
//         <span>{formData?.mobility}</span>
//       </div>
//       <div>
//         <label>Implant:</label>
//         <button onClick={() => handleVoiceInput("implant")}>Speak</button>
//         <span>{formData?.implant}</span>
//       </div>
//       <div>
//         <label>Furcation:</label>
//         <button onClick={() => handleVoiceInput("furcation")}>Speak</button>
//         <span>{formData?.furcation}</span>
//       </div>
//       <div>
//         <label>Bleeding on Probing:</label>
//         {["Buccal", "Mesial", "Lingual"].map((surface, index) => (
//           <div key={index}>
//             <label>{surface}:</label>
//             <button
//               onClick={() => handleVoiceInput("bleedingOnProbing", index)}
//             >
//               Speak
//             </button>
//             <span>{formData?.bleedingOnProbing?.[index]}</span>
//           </div>
//         ))}
//       </div>
//       <div>
//         <label>Plaque:</label>
//         {["Buccal", "Mesial", "Lingual"].map((surface, index) => (
//           <div key={index}>
//             <label>{surface}:</label>
//             <button onClick={() => handleVoiceInput("plaque", index)}>
//               Speak
//             </button>
//             <span>{formData?.plaque?.[index]}</span>
//           </div>
//         ))}
//       </div>
//       <div>
//         <label>Gingival Margin:</label>
//         {["Buccal", "Mesial", "Lingual"].map((surface, index) => (
//           <div key={index}>
//             <label>{surface}:</label>
//             <button onClick={() => handleVoiceInput("gingivalMargin", index)}>
//               Speak
//             </button>
//             <span>{formData?.gingivalMargin?.[index]}</span>
//           </div>
//         ))}
//       </div>
//       <div>
//         <label>Probing Depth:</label>
//         {["Buccal", "Mesial", "Lingual"].map((surface, index) => (
//           <div key={index}>
//             <label>{surface}:</label>
//             <button onClick={() => handleVoiceInput("probingDepth", index)}>
//               Speak
//             </button>
//             <span>{formData?.probingDepth?.[index]}</span>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default DentalForm;
