import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { HiMicrophone } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import projectApiList from "../../api/ApiList";
import Lottie from "react-lottie";
import MikeOnAnimation from "../../assets/voiceAnimation";

const AudioToTextForm = ({
  setSelectedColumn,
  toothDetails,
  setToothDetails,
  handleSubmit,
}) => {
  const { getApiJsonData } = projectApiList();

  const proptAI = `AI please find the value of fieldnames are[ toothNumber, Mobility, Implant, Furcation, Bleeding_Probing_distovest, Bleeding_Probing_vestibular, Bleeding_Probing_mesiovest, Bleeding_Probing_mesioling, Bleeding_Probing_lingual, Bleeding_Probing_distoling, Gingival_Margin_distovest, Gingival_Margin_vestibular, Gingival_Margin_mesiovest, Gingival_Margin_mesioling, Gingival_Margin_lingual, Gingival_Margin_distoling] and send the response only JSON value. this is the JSON format for how i want the data:${toothDetails} not include any other texts.  Transcription Text: `;

  const mikeAnimation = {
    loop: true,
    autoplay: true,
    animationData: MikeOnAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const toothNumbers = [
    { id: 1, name: 11 },
    { id: 2, name: 12 },
    { id: 3, name: 13 },
    { id: 4, name: 14 },
    { id: 5, name: 15 },
    { id: 6, name: 16 },
    { id: 7, name: 17 },
    { id: 7, name: 18 },
    { id: 7, name: 21 },
    { id: 7, name: 22 },
    { id: 7, name: 23 },
    { id: 7, name: 24 },
    { id: 7, name: 25 },
    { id: 7, name: 26 },
    { id: 7, name: 27 },
    { id: 7, name: 28 },
    // Add more teeth names as needed
  ];

  const [start, setStart] = useState(false);

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  const startListening = () => {
    resetTranscript(); // Reset transcript on start
    setStart(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = async () => {
    setStart(false);
    SpeechRecognition.stopListening({ continuous: true });
    try {
      const response = await axios.get(
        `${getApiJsonData}?promptcontent=${proptAI} + ${transcript}`
      );
      if (typeof response === "string") {
        const result = response.data.replace(/```json|```/g, "");
        const parsedData = JSON.parse(result);
        setToothDetails(parsedData);
      } else {
        const result = response.data;
        setToothDetails(result);
      }

      //   setToothDetails(JSON.parse(result));
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {}, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="w-full p-3">
      <div className="flex flex-col gap-5 justify-center  items-center w-full">
        <div className="flex items-center gap-12">
          <h3 className="text-center font-semibold text-xl">
            Fill the Details with Audio
          </h3>
          {/* <Select
            onValueChange={(value) => {
              setToothDetails();
              setSelectedColumn(value);
            }}
            className="w-1/2"
          >
            <SelectTrigger className="w-[16rem]">
              <SelectValue placeholder="Select teeth number" />
            </SelectTrigger>
            <SelectContent>
              {toothNumbers?.map((names) => (
                <SelectItem id={names?.id} value={names?.name}>
                  {names?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}

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
        <form
          className=" bg-white p-3 border border-gray-200 w-92 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-3">
            {/* First Column */}
            <div>
              <div className="flex items-center gap-4 py-1 px-2">
                <p className="text-base w-1/2">Tooth Number</p>
                <Input
                  className="w-1/2"
                  value={toothDetails?.toothNumber}
                  onChange={(e) => {
                    setToothDetails((prev) => ({
                      ...prev,
                      toothNumber: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="flex items-center gap-4 py-1 px-2">
                <p className="text-base w-1/2">Mobility</p>
                <Input
                  className="w-1/2"
                  value={toothDetails?.Mobility}
                  onChange={(e) =>
                    setToothDetails((prev) => ({
                      ...prev,
                      Mobility: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex items-center gap-4 py-1 px-2">
                <p className="text-base w-1/2">Implant</p>
                <Input
                  className="w-1/2"
                  value={toothDetails?.Implant}
                  onChange={(e) =>
                    setToothDetails((prev) => ({
                      ...prev,
                      Implant: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col justify-around">
              <div className="flex items-center gap-4 py-1 ">
                <p className="text-base w-1/2">Furcation</p>
                <Input
                  className="w-1/2"
                  value={toothDetails?.Furcation}
                  onChange={(e) =>
                    setToothDetails((prev) => ({
                      ...prev,
                      Furcation: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="flex gap-2 items-center">
                <p className="text-base w-1/2">Bleeding on Probing</p>
                <div className="flex gap-1 py-1 px-2">
                  <p
                    className={`h-5 w-5 border border-gray-400 rounded-md ${
                      toothDetails?.Bleeding_Probing_distovest.toLowerCase() === "yes"
                        ? "bg-green-400"
                        : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Bleeding_Probing_distovest:
                          prev.Bleeding_Probing_distovest === "yes" ? "no" : "yes",
                      }));
                    }}
                  ></p>
                  <p
                    className={`h-5 w-5 border border-gray-400 rounded-md ${
                      toothDetails?.Bleeding_Probing_vestibular.toLowerCase() === "yes"
                        ? "bg-green-400"
                        : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Bleeding_Probing_vestibular:
                          prev.Bleeding_Probing_vestibular === "yes" ? "no" : "yes",
                      }));
                    }}
                  ></p>
                  <p
                    className={`h-5 w-5 border border-gray-400 rounded-md ${
                      toothDetails?.Bleeding_Probing_mesiovest.toLowerCase() === "yes"
                        ? "bg-green-400"
                        : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Bleeding_Probing_mesiovest:
                          prev.Bleeding_Probing_mesiovest === "yes" ? "no" : "yes",
                      }));
                    }}
                  ></p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <p className="text-base w-1/2">Plaque</p>
                <div className="flex gap-1 py-1 px-2">
                  <p
                    className={`h-5 w-5 border border-gray-400 rounded-md ${
                      toothDetails?.Bleeding_Probing_mesioling.toLowerCase() === "yes"
                        ? "bg-green-400"
                        : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Bleeding_Probing_mesioling:
                          prev.Bleeding_Probing_mesioling === "yes" ? "no" : "yes",
                      }));
                    }}
                  ></p>
                  <p
                    className={`h-5 w-5 border border-gray-400 rounded-md ${
                      toothDetails?.Bleeding_Probing_lingual.toLowerCase() === "yes"
                        ? "bg-green-400"
                        : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Bleeding_Probing_lingual:
                          prev.Bleeding_Probing_lingual === "yes" ? "no" : "yes",
                      }));
                    }}
                  ></p>
                  <p
                    className={`h-5 w-5 border border-gray-400 rounded-md ${
                      toothDetails?.Bleeding_Probing_distoling.toLowerCase() === "yes"
                        ? "bg-green-400"
                        : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Bleeding_Probing_distoling:
                          prev.Bleeding_Probing_distoling === "yes" ? "no" : "yes",
                      }));
                    }}
                  ></p>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col justify-around">
              <div className="flex gap-2 items-center">
                <p className="text-base w-1/2">Gingival Margin</p>
                <div className="flex gap-1 py-1 px-2">
                  <Input
                    className={`h-5 w-12 border border-gray-400 rounded-md text-center text-sm bg-gray-100`}
                    onChange={(e) =>
                      setToothDetails((prev) => ({
                        ...prev,
                        Gingival_Margin_distovest: e.target.value,
                      }))
                    }
                    value={toothDetails?.Gingival_Margin_distovest}
                  />
                  <Input
                    className={`h-5 w-12 border border-gray-400 rounded-md text-center text-sm bg-gray-100`}
                    value={toothDetails?.Gingival_Margin_vestibular}
                    onChange={(e) =>
                      setToothDetails((prev) => ({
                        ...prev,
                        Gingival_Margin_vestibular: e.target.value,
                      }))
                    }
                  />
                  <Input
                    className={`h-5 w-12 border border-gray-400 rounded-md text-center text-sm bg-gray-100`}
                    onChange={(e) =>
                      setToothDetails((prev) => ({
                        ...prev,
                        Gingival_Margin_mesiovest: e.target.value,
                      }))
                    }
                    value={toothDetails?.Gingival_Margin_mesiovest}
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <p className="text-base w-1/2">Probing Depth</p>
                <div className="flex gap-1 py-1 px-2">
                  <Input
                    className={`h-5 w-12 border border-gray-400 rounded-md text-center text-sm bg-gray-100`}
                    value={toothDetails?.Gingival_Margin_mesioling}
                    onChange={(e) => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Gingival_Margin_mesioling: e.target.value,
                      }));
                    }}
                  />
                  <Input
                    className={`h-5 w-12 border border-gray-400 rounded-md text-center text-sm bg-gray-100`}
                    value={toothDetails?.Gingival_Margin_lingual}
                    onChange={(e) => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Gingival_Margin_lingual: e.target.value,
                      }));
                    }}
                  />
                  <Input
                    className={`h-5 w-12 border border-gray-400 rounded-md text-center text-sm bg-gray-100`}
                    value={toothDetails?.Gingival_Margin_distoling}
                    onChange={(e) => {
                      setToothDetails((prev) => ({
                        ...prev,
                        Gingival_Margin_distoling: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <Button
              type="submit"
              className="bg-green-600"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(toothDetails);
              }}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AudioToTextForm;
