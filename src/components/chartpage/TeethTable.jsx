import { useEffect, useState } from "react";
import { Input } from "../ui/input";

const toothNames = [
  { id: 1, name: "Mobility" },
  { id: 2, name: "Implant" },
  { id: 3, name: "Furcation" },
  { id: 4, name: "Bleeding on Probing" },
  { id: 5, name: "Plaque" },
  { id: 6, name: "Gingival Margin" },
  { id: 7, name: "Probing Depth" },
  // Add more teeth names as needed
];

const TeethTable = ({ allData, toothDetails }) => {
  const [activeTeethNuber, setActiveTeethNumber] = useState({});
  // const [siderbar11, setSidebar11] = useState()

  const setDataToTable = () => {
    // setSidebars((prevSidebars) =>
    //   prevSidebars.map((sidebar) =>
    //     sidebar.column == toothDetails?.toothName
    //       ? {
    //           Mobility: toothDetails?.Mobility,
    //           Implant: toothDetails?.Implant,
    //           Furcation: toothDetails?.Furcation,
    //           Bleeding_Probing: {
    //             distovest: toothDetails?.Bleeding_Probing_distovest,
    //             vestibular: toothDetails?.Bleeding_Probing_vestibular,
    //             mesiovest: toothDetails?.Bleeding_Probing_mesiovest,
    //           },
    //           Plaque: {
    //             mesioling: toothDetails?.Bleeding_Probing_mesioling,
    //             lingual: toothDetails?.Bleeding_Probing_lingual,
    //             distoling: toothDetails?.Bleeding_Probing_distoling,
    //           },
    //           Gingival_Margin: {
    //             distovest: toothDetails?.Gingival_Margin_distovest,
    //             vestibular: toothDetails?.Gingival_Margin_vestibular,
    //             mesiovest: toothDetails?.Gingival_Margin_mesiovest,
    //           },
    //           Probing_Depth: {
    //             mesioling: toothDetails?.Gingival_Margin_mesioling,
    //             lingual: toothDetails?.Gingival_Margin_lingual,
    //             distoling: toothDetails?.Gingival_Margin_distoling,
    //           },
    //         }
    //       : sidebar
    //   )
    // );
    // setActiveTeethNumber({
    //   Mobility: toothDetails?.Mobility,
    //   Implant: toothDetails?.Implant,
    //   Furcation: toothDetails?.Furcation,
    //   Bleeding_Probing: {
    //     distovest: toothDetails?.Bleeding_Probing_distovest,
    //     vestibular: toothDetails?.Bleeding_Probing_vestibular,
    //     mesiovest: toothDetails?.Bleeding_Probing_mesiovest,
    //     mesioling: toothDetails?.Bleeding_Probing_mesioling,
    //     lingual: toothDetails?.Bleeding_Probing_lingual,
    //     distoling: toothDetails?.Bleeding_Probing_distoling,
    //   },
    //   Gingival_Margin: {
    //     distovest: toothDetails?.Gingival_Margin_distovest,
    //     vestibular: toothDetails?.Gingival_Margin_vestibular,
    //     mesiovest: toothDetails?.Gingival_Margin_mesiovest,
    //     mesioling: toothDetails?.Gingival_Margin_mesioling,
    //     lingual: toothDetails?.Gingival_Margin_lingual,
    //     distoling: toothDetails?.Gingival_Margin_distoling,
    //   },
    // });
    // }
  };

  // useEffect(() => {
  //   if (toothDetails) {
  //     setDataToTable();
  //   }
  // }, []);

  return (
    <div className="w-full bg-white rounded-md">
      <div className="flex">
        <div className="">
          <table className="border-collapse border border-gray-200 w-full">
            <thead>
              <tr className="w-16">
                <th className="border border-gray-200 p-2 text-left text-xs w-10">
                  Tooth Name
                </th>
                {allData?.map((sidebar, index) => (
                  <th
                    key={index}
                    className="border border-gray-200 p-2 text-center text-xs w-10"
                  >
                    {sidebar?.column === "none" ? "" : sidebar?.column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="h-full border-none">
                <td className="flex h-full flex-col justify-between gap-4 p-1 font-medium text-xs w-32">
                  {toothNames?.map((toothName) => (
                    <div key={toothName?.id} className="h-full">
                      <p className="">{toothName?.name || ""}</p>
                    </div>
                  ))}
                </td>

                {allData?.map((sidebar, colIndex) => (
                  <td key={colIndex} className="border border-gray-200 p-1">
                    <div className="flex flex-col justify-center items-center gap-1 w-[4rem] h-[13.2rem]">
                      {["Mobility", "Implant", "Furcation"].map((key) => (
                        <div key={key} className={`w-6 h-6 `}>
                          <p
                            key={key}
                            className={`text-center h-5 w-5 ${
                              key === "Furcation"
                                ? "rounded-full"
                                : "border-none rounded-none"
                            } ${(key === "Furcation" && sidebar?.[key]?.includes("2")) ? "border border-gray-500" : ""} mb-1`}
                          >
                            <p
                              className={`text-xs ${key === "Furcation" && 
                                sidebar?.[key]?.includes("1")
                                  ? "h-5 w-5 rounded-full border-2 border-gray-500 mb-1"
                                  : key === "Furcation" && sidebar?.[key]?.includes("2")
                                  ? "bg-gray-500 h-[50%] w-full border- border-gray-500 rounded-t-full"
                                  : key === "Furcation" && sidebar?.[key]?.includes("3")
                                  ? "bg-gray-500 rounded-full w-full h-full"
                                  : ""
                              } `}
                            > {key !== "Furcation" ?  (sidebar?.[key]) :""} </p>
                            {/* {key !== "Furcation" ?  (sidebar?.[key]) :""} */}
                          </p>
                        </div>
                      ))}

                      <div className="flex gap-1 ">
                        {Object.entries(sidebar?.Bleeding_Probing || {}).map(
                          ([key, value]) => (
                            <p
                              key={key}
                              className={`h-5 w-5 mb-2 border text-xs border-gray-200 rounded-md ${
                                value === "yes" ? "bg-green-400" : "bg-gray-200"
                              }`}
                            ></p>
                          )
                        )}
                      </div>

                      <div className="flex gap-1">
                        {Object.entries(sidebar?.Plaque || {}).map(
                          ([key, value]) => (
                            <p
                              key={key}
                              className={`h-5 w-5 mb-2 text-xs border border-gray-200 rounded-md ${
                                value === "yes" ? "bg-green-400" : "bg-gray-200"
                              }`}
                            ></p>
                          )
                        )}
                      </div>

                      <div className="flex justify-between gap-1">
                        {Object.entries(sidebar?.Gingival_Margin || {}).map(
                          ([key, value]) => (
                            // <Input
                            //   key={key}
                            //   type="text"
                            //   className="h-4 text-xs px-0 pl-1 border !border-gray-300 rounded"
                            //   value={value || ""}
                            //   disabled
                            // />
                            <p
                              key={key}
                              className={`border h-5 w-5 border-gray-300 text-xs px-1 rounded-sm  mb-1 `}
                            >
                              {value || ""}
                            </p>
                          )
                        )}
                      </div>

                      <div className="flex justify-between gap-1">
                        {Object.entries(sidebar?.Probing_Depth || {}).map(
                          ([key, value]) => (
                            // <Input
                            //   key={key}
                            //   type="text"
                            //   className="h-4 text-xs px-0 pl-1 w-full border border-gray-300 rounded"
                            //   value={value || ""}
                            //   disabled
                            //   // placeholder={key.replace(/_/g, " ")}
                            // />
                            <p
                              key={key}
                              className={`border h-5 w-5 border-gray-300 text-xs px-1 rounded-sm  mb-0 `}
                            >
                              {value || ""}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeethTable;
