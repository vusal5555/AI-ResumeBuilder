import React from "react";

type Props = {
  resumeInfo: any;
};

function SummeryPreview({ resumeInfo }: Props) {
  return <p className="text-xs">{resumeInfo?.summery}</p>;
}

export default SummeryPreview;
