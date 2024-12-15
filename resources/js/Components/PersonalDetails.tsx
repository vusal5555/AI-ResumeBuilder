import { ResumeContext } from "@/context/ResumeContext";
import React, { useContext, useState } from "react";
import { Label } from "./ui/label";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";

type Props = {
  enabledNext: (v: boolean) => void;
};

const PersonalDetails = ({ enabledNext }: Props) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
  const [firstName, setFirstName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    enabledNext(false);
    const { name, value } = e.target;

    setResumeInfo((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    enabledNext(true);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with basic information</p>

      <form onSubmit={handleSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <Label htmlFor="firstName">First Name</Label>

            <TextInput
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleChange}
            ></TextInput>
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>

            <TextInput
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleChange}
            ></TextInput>
          </div>
          <div className="col-span-full">
            <Label htmlFor="jobTitle">Job Title</Label>

            <TextInput
              id="jobTitle"
              name="jobTitle"
              placeholder="Job Title"
              required
              onChange={handleChange}
            ></TextInput>
          </div>
          <div className="col-span-full">
            <Label htmlFor="address">Address</Label>

            <TextInput
              id="address"
              name="address"
              placeholder="Address"
              required
              onChange={handleChange}
            ></TextInput>
          </div>
          <div className="col-span-full">
            <Label htmlFor="phone">Phone</Label>

            <TextInput
              id="phone"
              name="phone"
              placeholder="Phone"
              required
              onChange={handleChange}
            ></TextInput>
          </div>
          <div className="col-span-full">
            <Label htmlFor="email">Email</Label>

            <TextInput
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            ></TextInput>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <PrimaryButton type="submit" className="bg-primary">
            Save
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
