"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import ImagesForm from "./ImagesForm";
import InputForm from "./InputForm";
import FormSubmit from "./FormSubmit";

const CreateOrgForm = () => {
  const handleSubmit = () => {};
  return (
    <div className="font-medium flex items-center mb-1">
      <span>Workspaces</span>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            asChild
            type="button"
            variant="ghost"
            size="icon"
            className="ml-auto cursor-pointer"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="font-medium text-center text-gray-600 pb-4 text-sm">
            Create Organiztion
          </div>
          <form action={handleSubmit}>
            <div>
              <ImagesForm name="image" />
              <InputForm id="title" label="Organization Title" type="text" />

              <FormSubmit className="w-full mt-2">Create Org</FormSubmit>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CreateOrgForm;
