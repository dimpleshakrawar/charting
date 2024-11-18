import React, { Children } from "react";
import { Input } from "../ui/input";
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

const siderbar18 = {
  column: "18",
  content: [
    { id: 1, name: "Mobility", value: "" },
    { id: 2, name: "Implant", value: "" },
    { id: 3, name: "Furcation", value: "" },
    {
      id: 4,
      name: "Bleeding on Probing",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 5,
      name: "Plaque",
      value: "",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 6,
      name: "Gingival Margin",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
    {
      id: 7,
      name: "Probing depth",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
  ],

  // Add more teeth names as needed
};

const siderbar17 = {
  column: "17",
  content: [
    { id: 1, name: "Mobility", value: "" },
    { id: 2, name: "Implant", value: "" },
    { id: 3, name: "Furcation", value: "" },
    {
      id: 4,
      name: "Bleeding on Probing",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 5,
      name: "Plaque",
      value: "",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 6,
      name: "Gingival Margin",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
    {
      id: 7,
      name: "Probing depth",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
  ],

  // Add more teeth names as needed
};

const siderbar16 = {
  column: "16",
  content: [
    { id: 1, name: "Mobility", value: "" },
    { id: 2, name: "Implant", value: "" },
    { id: 3, name: "Furcation", value: "" },
    {
      id: 4,
      name: "Bleeding on Probing",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 5,
      name: "Plaque",
      value: "",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 6,
      name: "Gingival Margin",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
    {
      id: 7,
      name: "Probing depth",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
  ],

  // Add more teeth names as needed
};

const siderbar15 = {
  column: "15",
  content: [
    { id: 1, name: "Mobility", value: "" },
    { id: 2, name: "Implant", value: "" },
    { id: 3, name: "Furcation", value: "" },
    {
      id: 4,
      name: "Bleeding on Probing",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 5,
      name: "Plaque",
      value: "",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 6,
      name: "Gingival Margin",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
    {
      id: 7,
      name: "Probing depth",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
  ],

  // Add more teeth names as needed
};

const siderbar14 = {
  column: "14",
  content: [
    { id: 1, name: "Mobility", value: "" },
    { id: 2, name: "Implant", value: "" },
    { id: 3, name: "Furcation", value: "" },
    {
      id: 4,
      name: "Bleeding on Probing",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 5,
      name: "Plaque",
      value: "",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 6,
      name: "Gingival Margin",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
    {
      id: 7,
      name: "Probing depth",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
  ],

  // Add more teeth names as needed
};

const siderbar13 = {
  column: "13",
  content: [
    { id: 1, name: "Mobility", value: "" },
    { id: 2, name: "Implant", value: "" },
    { id: 3, name: "Furcation", value: "" },
    {
      id: 4,
      name: "Bleeding on Probing",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 5,
      name: "Plaque",
      value: "",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 6,
      name: "Gingival Margin",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
    {
      id: 7,
      name: "Probing depth",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
  ],

  // Add more teeth names as needed
};

const siderbar12 = {
  column: "12",
  content: [
    { id: 1, name: "Mobility", value: "" },
    { id: 2, name: "Implant", value: "" },
    { id: 3, name: "Furcation", value: "" },
    {
      id: 4,
      name: "Bleeding on Probing",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 5,
      name: "Plaque",
      value: "",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 6,
      name: "Gingival Margin",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
    {
      id: 7,
      name: "Probing depth",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
  ],

  // Add more teeth names as needed
};

const siderbar11 = {
  column: "11",
  content: [
    { id: 1, name: "Mobility", value: "" },
    { id: 2, name: "Implant", value: "" },
    { id: 3, name: "Furcation", value: "" },
    {
      id: 4,
      name: "Bleeding on Probing",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 5,
      name: "Plaque",
      value: "",
      Children: [
        { id: 1, name: "a", value: "" },
        { id: 2, name: "b", value: "" },
        { id: 3, name: "c", value: "" },
      ],
    },
    {
      id: 6,
      name: "Gingival Margin",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
    {
      id: 7,
      name: "Probing depth",
      value: "",
      Children: [
        { id: 1, name: "a", value: "0" },
        { id: 2, name: "b", value: "0" },
        { id: 3, name: "c", value: "0" },
      ],
    },
  ],

  // Add more teeth names as needed
};

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
    <div>
      {/* <div className="flex">
        {teethData1?.map((data) => (
          <div key={data?.id}>
            <p>{data?.name}</p>
          </div>
        ))}
      </div> */}

      <div className="w-full">
        <div className="flex w-1/2">
          {/* 18th column */}
          <div className="">
            <p>{siderbar18?.column}</p>
            {siderbar18?.content?.map((toothName) => (
              <div key={toothName.id} className="flex">
                {toothName?.name}
                {toothName?.Children ? (
                  toothName?.Children.map((data) => (
                    <div key={data?.id}>
                      <Input type="checkbox" />
                    </div>
                  ))
                ) : (
                  <Input type="text" className="" />
                )}
              </div>
            ))}
          </div>

          {/* 17th column */}
          <div className="">
            <p>{siderbar17?.column}</p>
            {siderbar17?.content?.map((toothName) => (
              <div key={toothName.id} className="flex">
                {toothName?.name}
                {toothName?.Children ? (
                  toothName?.Children.map((data) => (
                    <div key={data?.id}>
                      <Input type="checkbox" />
                    </div>
                  ))
                ) : (
                  <Input type="text" />
                )}
              </div>
            ))}
          </div>

          {/* 16th column */}
          <div className="">
            <p>{siderbar16?.column}</p>
            {siderbar16?.content?.map((toothName) => (
              <div key={toothName.id} className="flex">
                {toothName?.name}
                {toothName?.Children ? (
                  toothName?.Children.map((data) => (
                    <div key={data?.id}>
                      <Input type="checkbox" />
                    </div>
                  ))
                ) : (
                  <Input type="text" />
                )}
              </div>
            ))}
          </div>

          {/* 15th column */}
          <div className="">
            <p>{siderbar15?.column}</p>
            {siderbar15?.content?.map((toothName) => (
              <div key={toothName.id} className="flex">
                {toothName?.name}
                {toothName?.Children ? (
                  toothName?.Children.map((data) => (
                    <div key={data?.id}>
                      <Input type="checkbox" />
                    </div>
                  ))
                ) : (
                  <Input type="text" />
                )}
              </div>
            ))}
          </div>

          {/* 14th column */}
          <div className="">
            <p>{siderbar14?.column}</p>
            {siderbar14?.content?.map((toothName) => (
              <div key={toothName.id} className="flex">
                {toothName?.name}
                {toothName?.Children ? (
                  toothName?.Children.map((data) => (
                    <div key={data?.id}>
                      <Input type="checkbox" />
                    </div>
                  ))
                ) : (
                  <Input type="text" />
                )}
              </div>
            ))}
          </div>

          {/* 13th column */}
          <div className="">
            <p>{siderbar13?.column}</p>
            {siderbar13?.content?.map((toothName) => (
              <div key={toothName.id} className="flex">
                {toothName?.name}
                {toothName?.Children ? (
                  toothName?.Children.map((data) => (
                    <div key={data?.id}>
                      <Input type="checkbox" />
                    </div>
                  ))
                ) : (
                  <Input type="text" />
                )}
              </div>
            ))}
          </div>

          {/* 12th column */}
          <div className="">
            <p>{siderbar12?.column}</p>
            {siderbar12?.content?.map((toothName) => (
              <div key={toothName.id} className="flex">
                {toothName?.name}
                {toothName?.Children ? (
                  toothName?.Children.map((data) => (
                    <div key={data?.id}>
                      <Input type="checkbox" />
                    </div>
                  ))
                ) : (
                  <Input type="text" />
                )}
              </div>
            ))}
          </div>

          {/* 11th column */}
          <div className="">
            <p>{siderbar11?.column}</p>
            {siderbar11?.content?.map((toothName) => (
              <div key={toothName.id} className="flex">
                {toothName?.name}
                {toothName?.Children ? (
                  toothName?.Children.map((data) => (
                    <div key={data?.id}>
                      <Input type="checkbox" />
                    </div>
                  ))
                ) : (
                  <Input type="text" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default TeethTable;
