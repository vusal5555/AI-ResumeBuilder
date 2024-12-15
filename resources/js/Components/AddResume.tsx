import { Loader, PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import TextInput from "./TextInput";
import axios from "axios";
import { router } from "@inertiajs/react";

type Props = {};

const AddResume = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(false);

  const onCreate = async () => {
    setLoading(true);
    const response = await axios.post("/resumes", {
      title,
    });

    const data = await response.data;

    if (data) {
      router.visit(route("resumes.edit", data.id));
      setIsOpen(false);
      setLoading(false);
    }
  };
  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex rounded-lg justify-center bg-secondary hover:scale-105 transition-all hover:shadow-md cursor-pointer h-full"
        onClick={() => setIsOpen(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={isOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <Label htmlFor="resume-title">Add a title for your resume</Label>
              <TextInput
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex.Full-Stack Developer Resume"
              ></TextInput>
            </DialogDescription>

            <div className="flex justify-end space-x-4">
              <Button variant="destructive" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button disabled={!title || loading} onClick={() => onCreate()}>
                {loading ? <Loader className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
