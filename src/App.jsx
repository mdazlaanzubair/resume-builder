import { useState } from "react";
import ResumeTemplate from "./components/ResumeTemplate";
import { resumeData } from "./constant";
import DynamicResume from "./components/DynamicResume";

function App() {
  const [data, setData] = useState(resumeData);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 p-5">
        <ul className="list-none">
          {data?.map((section) => (
            <li key={section?.id} className="bg-white rounded p-3 my-2">
              {section?.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-8">
        <DynamicResume data={data} />
      </div>
    </div>
  );
}

export default App;
