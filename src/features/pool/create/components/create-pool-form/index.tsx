import { Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TitleField } from "./components/title-field";
import { GoalField } from "./components/goal-field";
import { CategoryField } from "./components/category-field";
import { DeadlineField } from "./components/deadline-field";
import { DescriptionField } from "./components/description-field";
import {
  AdvancedSettings,
  AdvancedSettingsState,
} from "./components/advanced-settings";
import { SharingOptions } from "./components/sharing-options";
import { FaPlus } from "react-icons/fa";
import { ROUTES } from "@/shared/config/routes";

export const CreatePoolForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const [advancedSettings, setAdvancedSettings] =
    useState<AdvancedSettingsState>({
      isPrivate: false,
      isAnonymous: false,
      isAutoReminder: true,
      selfPayment: true,
      minContribution: "",
      maxContribution: "",
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title,
      goal,
      category,
      date,
      time,
      description,
      ...advancedSettings,
    };

    console.log(payload);

    navigate(`/pools/1111111111`);
  };

  const update = <K extends keyof AdvancedSettingsState>(
    key: K,
    value: AdvancedSettingsState[K]
  ) => {
    setAdvancedSettings((prev) => ({ ...prev, [key]: value }));
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
        <AdvancedSettings advancedSettings={advancedSettings} update={update} />

        {/* Sharing Options */}
        <SharingOptions />

        {/* Submit Button */}
        <Button
          w="full"
          bg="gray.900"
          color="white"
          py={4}
          h='20%'
          rounded="2xl"
          _hover={{ bg: "gray.800" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          type="submit"
        >
          <FaPlus />
          <span>Создать сбор</span>
        </Button>
      </Box>
    </Box>
  );
};
