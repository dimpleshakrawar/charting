import { Input } from "../components/ui/input";
import UserDetails from "../components/chartpage/userDetails";
import TeethTable from "../components/chartpage/TeethTable";
import { useSpeechRecognition } from "react-speech-recognition";
import { useState } from "react";
import { HiMicrophone } from "react-icons/hi";

const ChartPage = () => {
  const [start, setStart] = useState(false);

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  const startListening = () => {
    resetTranscript(); // Reset transcript on start
    setStart(true);
    setPrevSpeechLength(0);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setStart(false);
    SpeechRecognition.stopListening({ continuous: true });
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="p-8">
      <h2 className="text-4xl font-semibold text-center">Periodental Chart</h2>
      <div className="border border-gray-100 m-4 p-4 bg-gray-200">
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <label className="">Date</label>
            <Input className="w-2/3" />
          </div>

          {!start ? (
            <button
              className={`text-blue-500 hover:bg-green-50 p-1.5 rounded-full`}
              onClick={startListening}
            >
              <HiMicrophone fontSize={28} />
            </button>
          ) : (
            <button
              className={`text-dangerColor hover:bg-gree-50 p-1.5 rounded-full text-base`}
              onClick={stopListening}
            >
              Stop
            </button>
          )}
        </div>
        <UserDetails />

      </div>

      <div className="flex justify-between w-full border border-gray-100 m-4 p-4 bg-gray-200">
        <div className="flex gap-6 w-2/3">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-6 h-6 rounded-md" />
            <label>Initial Exam</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-6 h-6 rounded-md" />
            <label>Re-evaluation</label>
          </div>
        </div>
        <div className="2/3">
          <div className="flex items-center gap-2 w-full">
          <label>Clinician</label>
          <Input/>
          </div>
        </div>
      </div>

      <div><TeethTable/></div>

    </div>
  );
};

export default ChartPage;
