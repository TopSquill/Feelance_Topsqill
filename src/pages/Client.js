import React, { useMemo, useState } from "react";
import Banner from "../components/Banner";
import ClientCategorySelect from "../components/ClientCategorySelect";
import ProjctCards from "../components/ProjctCards";
import ProjectDetails from "../components/ProjectDetails";
import { projectDescription, selectCategory, selectRequiredSkills, completed } from "../constants";

const Client = () => {
  const steps = useMemo(() => [selectCategory, projectDescription, selectRequiredSkills, completed]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [step, setStep] = useState(1);
  const disabled = useMemo(() => (step == 1 && selectedTags.length < 1) || (step == 2), [selectedTags])


  return (
    <>
      <div style={{ marginTop: 150, marginLeft: 'auto', marginRight: 'auto', width: '60vw' }}>
        <h2 className="sr-only">Steps</h2>

        <div>
          <p className="text-xs font-medium text-gray-500">{`${step}/${steps.length}`} - {`${steps[step-1]}`}</p>

          <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
            <div className={`h-2 w-${step}/${steps.length} rounded-full bg-indigo-600`}></div>
          </div>
        </div>

        <div>
          {step == 1 && <ClientCategorySelect setSelectedTags={setSelectedTags} />}
          {step == 2 && <ProjectDetails />}
        </div>

        <button 
          onClick={() => setStep(step => step < 4 ? step+1 : step)}
          disabled={disabled} 
          className={`
            inline-flex 
            text-white 
            ${disabled ? 'bg-gray-400' : 'bg-indigo-500' }
            border-0 
            rounded 
            py-2 
            px-6 
            focus:outline-none 
            ${disabled ? '' : 'hover:bg-indigo-600'}
            `}
          >
            Next
        </button>
      </div>

    </>
  );
};

export default Client;
