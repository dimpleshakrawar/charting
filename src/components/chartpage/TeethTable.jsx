import React from "react";
// import './TeethTable.css';

const teethData1 = [
  { id: 1, name: "Tooth 18" },
  { id: 2, name: "Tooth 17" },
  { id: 3, name: "Tooth 16" },
  { id: 4, name: "Tooth 15" },
  { id: 5, name: "Tooth 14" },
  { id: 5, name: "Tooth 13" },
  { id: 5, name: "Tooth 12" },
  { id: 5, name: "Tooth 11" },
  // Add more teeth names as needed
];

const teethData2 = [
  { id: 1, name: "Tooth 21" },
  { id: 2, name: "Tooth 22" },
  { id: 3, name: "Tooth 23" },
  { id: 4, name: "Tooth 24" },
  { id: 5, name: "Tooth 25" },
  { id: 5, name: "Tooth 26" },
  { id: 5, name: "Tooth 27" },
  { id: 5, name: "Tooth 28" },
  // Add more teeth names as needed
];

const TeethTable = () => {
  // Function to trigger text-to-speech
  const handleSpeak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // Set language (English US)
      speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  return (
    <div className="">
      <h1 className="">Teeth Names</h1>

      {teethData1?.map((data) => (
        <div className="" key={data?.id}>
          <p>{data?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TeethTable;
