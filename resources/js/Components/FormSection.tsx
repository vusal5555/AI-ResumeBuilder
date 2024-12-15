import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import PersonalDetails from "./PersonalDetails";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

type Props = {};

const FormSection = (props: Props) => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);

  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <PrimaryButton variant="outline" className="flex gap-1 items-center">
          <LayoutGrid></LayoutGrid>Theme
        </PrimaryButton>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <PrimaryButton
              className="flex gap-2 bg-primary"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft></ArrowLeft>
            </PrimaryButton>
          )}
          <PrimaryButton
            disabled={!enableNext}
            className="bg-primary"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next<ArrowRight></ArrowRight>
          </PrimaryButton>
        </div>
      </div>
      {activeFormIndex === 1 && (
        <PersonalDetails enabledNext={(v) => setEnableNext(v)} />
      )}
    </div>
  );
};

export default FormSection;
