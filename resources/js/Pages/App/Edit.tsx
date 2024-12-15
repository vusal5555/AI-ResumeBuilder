import FormSection from "@/components/FormSection";
import PreviewSection from "@/components/PreviewSection";
import { ResumeContext } from "@/context/ResumeContext";
import data from "@/data";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

type Props = {
  resume: any;
};

const Edit = ({ resume }: Props) => {
  const [resumeInfo, setResumeInfo] = useState<typeof data | null>(null);

  useEffect(() => {
    setResumeInfo(data);
  }, []);
  return (
    <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <Authenticated>
        <Head title="Edit"></Head>

        <div className="grid grid-cols-1 md:grid-cols-2  p-10 gap-10 h-full">
          <FormSection />

          <PreviewSection />
        </div>
      </Authenticated>{" "}
    </ResumeContext.Provider>
  );
};

export default Edit;
