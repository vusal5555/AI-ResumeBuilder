import { Link } from "@inertiajs/react";
import { Notebook } from "lucide-react";
import React from "react";

export type ResumeProps = {
  resume: {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
    createdBy: {
      id: number;
      name: string;
      email: string;
    };
  };
};

const ResumeCard = ({ resume }: ResumeProps) => {
  return (
    <Link href={`/resumes/${resume.id}`} key={resume.id}>
      <div className="flex flex-col items-center justify-center border border-primary p-14 py-24 rounded-lg h-full hover:scale-105 transition-all hover:shadow-md shadow-primary cursor-pointer">
        <div className="bg-secondary">
          <Notebook></Notebook>
        </div>
        <h2>{resume.title}</h2>
      </div>
    </Link>
  );
};

export default ResumeCard;
