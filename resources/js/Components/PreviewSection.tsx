import { ResumeContext } from "@/context/ResumeContext";
import { useContext } from "react";
import PersonalDetail from "./PersonalDetail";
import SummeryPreview from "./SummeryPreview";
import ExperiencePreview from "./ExperiencePreview";
import EducationalPreview from "./EducationalPreview";
import SkillsPreview from "./SkillsPreview";

type Props = {};

const PreviewSection = (props: Props) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal Detail  */}
      <PersonalDetail resumeInfo={resumeInfo} />
      {/* Summery  */}
      <SummeryPreview resumeInfo={resumeInfo} />
      {/* Professional Experience  */}
      {resumeInfo?.experience?.length > 0 && (
        <ExperiencePreview resumeInfo={resumeInfo} />
      )}
      {/* Educational  */}
      {resumeInfo?.education?.length > 0 && (
        <EducationalPreview resumeInfo={resumeInfo} />
      )}
      {/* Skilss  */}
      {resumeInfo?.skills?.length > 0 && (
        <SkillsPreview resumeInfo={resumeInfo} />
      )}
    </div>
  );
};

export default PreviewSection;
