import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TitleField } from "./components/title-field";
import { GoalField } from "./components/goal-field";
import { CategoryField } from "./components/category-field";
import { DeadlineField } from "./components/deadline-field";
import { DescriptionField } from "./components/description-field";
import { AdvancedSettings } from "./components/advanced-settings";
import { SharingOptions } from "./components/sharing-options";

export const CreatePoolForm = () => {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, goal, category, date, time, description });
    // navigate("/pools");
  };

  return (
    <Box id="form-section" px={4} py={6}>
      <Box
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <TitleField title={title} setTitle={setTitle} />
        <GoalField goal={goal} setGoal={setGoal} />
        <CategoryField category={category} setCategory={setCategory} />
        <DeadlineField
          date={date}
          time={time}
          setDate={setDate}
          setTime={setTime}
        />
        <DescriptionField
          description={description}
          setDescription={setDescription}
        />
        
        {/* Advanced Settings */}
        <AdvancedSettings />
        
        {/* Sharing Options */}
        <SharingOptions />
      </Box>
    </Box>
  );
};

export default CreatePoolForm;
