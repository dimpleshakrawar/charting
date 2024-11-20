import { Input } from "../components/ui/input";
import UserDetails from "../components/chartpage/userDetails";
import TeethTable from "../components/chartpage/TeethTable";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState } from "react";
import { HiMicrophone } from "react-icons/hi";
import AudioToTextForm from "../components/chartpage/AudioToTextForm";
import Lottie from "react-lottie";
import MikeOnAnimation from "../assets/voiceAnimation";
import projectApiList from "../api/ApiList";
import axios from "axios";
import AllToothDataJson from "../../toothDetails.json";


const ChartPage = () => {
  const [start, setStart] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState();
  const [allData, setAllData] = useState(AllToothDataJson);
  const [basicInfo, setBasicInfo] = useState();
  const [toothDetails, setToothDetails] = useState({
    toothNumber:"",
    Mobility: "",
    Implant:"",
    Furcation:"",
    // Bleeding_Probing: {
    //   distovest:"",
    //   vestibular:"",
    //   mesiovest:"",
    //   mesioling:"",
    //   lingual:"",
    //   distoling:"",
    // },
    // Gingival_Margin: {
    //   distovest:"",
    //   vestibular:"",
    //   mesiovest:"",
      // mesioling:"",
      // lingual:"",
      // distoling:"",
    // }

    Bleeding_Probing_distovest:"",
    Bleeding_Probing_vestibular:"",
    Bleeding_Probing_mesiovest:"",
    Bleeding_Probing_mesioling:"",
    Bleeding_Probing_lingual:"",
    Bleeding_Probing_distoling:"",

    Gingival_Margin_distovest:"",
    Gingival_Margin_vestibular:"",
    Gingival_Margin_mesiovest:"",
    Gingival_Margin_mesioling:"",
    Gingival_Margin_lingual:"",
    Gingival_Margin_distoling:"",

    // Probing_Depth_Buccal:"",
    // Probing_Depth_Mesial:"",
    // Probing_Depth_Lingual:""
  });

  const { getApiJsonData } = projectApiList();
  const proptAI =
    "AI please find the value of date, first_name, last_name and date_of_birth in json format and not send any other text or instruction. Transcription text:";

  const mikeAnimation = {
    loop: true,
    autoplay: true,
    animationData: MikeOnAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  const startListening = () => {
    resetTranscript(); // Reset transcript on start
    setStart(true);
    // setPrevSpeechLength(0);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = async () => {
    setStart(false);
    SpeechRecognition.stopListening({ continuous: true });
    try {
      const response = await axios.get(
        `${getApiJsonData}?promptcontent=${proptAI} + ${transcript}`
      );
      setBasicInfo(response.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleSubmit = (toothInfo) => {
    setAllData((prevSidebars) =>
      prevSidebars.map((sidebar) =>
        sidebar.column == toothDetails?.toothNumber
          ? {
            ...sidebar,
              Mobility: toothDetails?.Mobility,
              Implant: toothDetails?.Implant,
              Furcation: toothDetails?.Furcation,
              Bleeding_Probing: {
                distovest: toothDetails?.Bleeding_Probing_distovest,
                vestibular: toothDetails?.Bleeding_Probing_vestibular,
                mesiovest: toothDetails?.Bleeding_Probing_mesiovest,
              },
              Plaque: {
                mesioling: toothDetails?.Bleeding_Probing_mesioling,
                lingual: toothDetails?.Bleeding_Probing_lingual,
                distoling: toothDetails?.Bleeding_Probing_distoling,
              },
              Gingival_Margin: {
                distovest: toothDetails?.Gingival_Margin_distovest,
                vestibular: toothDetails?.Gingival_Margin_vestibular,
                mesiovest: toothDetails?.Gingival_Margin_mesiovest,
              },
              Probing_Depth: {
                mesioling: toothDetails?.Gingival_Margin_mesioling,
                lingual: toothDetails?.Gingival_Margin_lingual,
                distoling: toothDetails?.Gingival_Margin_distoling,
              },
            }
          : sidebar
      )
    );
    setToothDetails({
      toothNumber:"",
    Mobility: "",
    Implant:"",
    Furcation:"",
    Bleeding_Probing_distovest:"",
    Bleeding_Probing_vestibular:"",
    Bleeding_Probing_mesiovest:"",
    Bleeding_Probing_mesioling:"",
    Bleeding_Probing_lingual:"",
    Bleeding_Probing_distoling:"",

    Gingival_Margin_distovest:"",
    Gingival_Margin_vestibular:"",
    Gingival_Margin_mesiovest:"",
    Gingival_Margin_mesioling:"",
    Gingival_Margin_lingual:"",
    Gingival_Margin_distoling:"",
  }
    )
  }

  useEffect(() => {}, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="p-8">
      <h2 className="text-4xl font-semibold text-center">PERIODONTAL CHART</h2>
      <div className="border shadow-md border-gray-100 m-4 p-4 bg-gray-200">
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <label className="">Date</label>
            <Input className="w-2/3" value={basicInfo?.date} />
          </div>

          <div className="flex gap-2 items-center">
            {start && <Lottie options={mikeAnimation} height={20} width={70} />}

            {!start ? (
              <button
                className={`text-blue-500 hover:bg-green-50 p-1.5 rounded-full`}
                onClick={startListening}
              >
                <HiMicrophone fontSize={28} />
              </button>
            ) : (
              <button
                className={`text-red-500 font-semibold hover:bg-green-50 p-1.5 rounded-full text-base`}
                onClick={stopListening}
              >
                Stop
              </button>
            )}
          </div>
        </div>
        <UserDetails basicInfo={basicInfo} />
      </div>

      <div className="flex m-4 border border-gray-100 p-2 bg-gray-200">
        <div className="flex gap-6 w-[70%]">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-6 h-6 rounded-md" />
            <label>Initial Exam</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-6 h-6 rounded-md" />
            <label>Re-evaluation</label>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="flex items-center gap-2 w-full">
            <label>Clinician</label>
            <Input />
          </div>
        </div>
      </div>

      <div className="flex m-4 border border-gray-100 p-2 bg-gray-200 rounded-md">
        <AudioToTextForm
          setSelectedColumn={setSelectedColumn}
          selectedColumn={selectedColumn}
          toothDetails={toothDetails}
          setToothDetails={setToothDetails}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className="p-7 w-full mb-8 bg-gray-200 rounded-md">
        <TeethTable
          // selectedColumn={selectedColumn}
          setToothDetails={setToothDetails}
          toothDetails={toothDetails}
          allData={allData}
        />
      </div>
    </div>
  );
};

export default ChartPage;
