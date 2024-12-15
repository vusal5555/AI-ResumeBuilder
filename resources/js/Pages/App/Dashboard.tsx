import AddResume from "@/components/AddResume";
import ResumeCard from "@/components/ResumeCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ resumes }: { resumes: any }) {
  console.log(resumes);
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <div className="p-10 md:px-20 lg:px-32">
        <h2 className="font-bold text-3xl">My Resume</h2>
        <p>Start creatig your resume with the help of AI today!</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          <AddResume />

          {resumes.data.map((resume: any) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
