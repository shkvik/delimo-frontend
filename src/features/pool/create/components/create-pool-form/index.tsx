import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TitleField } from "./components/title-field";
import { GoalField } from "./components/goal-field";
import { CategoryField } from "./components/category-field";
import { DeadlineField } from "./components/deadline-field";
import { DescriptionField } from "./components/description-field";
import { PrivacySettings } from "./components/privacy-settings";
import { FaPlus } from "react-icons/fa";
import {
  DeadlineOptions,
  DeadlineOptionsState,
} from "./components/deadline-options";
import {
  AdditionalOptions,
  AdditionalOptionsState,
} from "./components/additional-options";
import { PoolPreview } from "./components/pool-preview";

export const CreatePoolForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  const [additionalOptions, setAdditionalOptions] =
    useState<AdditionalOptionsState>({
      allowAnonymous: false,
      creatorContributes: false,
      equalSplit: false,
      participantCount: "",
    });

  const [deadlineOptions, setDeadlineOptions] = useState<DeadlineOptionsState>({
    deadlineBehavior: "refund",
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
      isPrivate,
      ...additionalOptions,
      ...deadlineOptions,
    };

    console.log(payload);

    navigate(`/pools/1111111111`);
  };

  const updateAdditionalOptions = <K extends keyof AdditionalOptionsState>(
    key: K,
    value: AdditionalOptionsState[K]
  ) => {
    setAdditionalOptions((prev) => ({ ...prev, [key]: value }));
  };

  const updateDeadlineOptions = <K extends keyof DeadlineOptionsState>(
    key: K,
    value: DeadlineOptionsState[K]
  ) => {
    setDeadlineOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Box bg="gray.100" id="form-section" px={4} py={6}>
      <Box
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <PrivacySettings isPrivate={isPrivate} setIsPrivate={setIsPrivate} />
        <TitleField title={title} setTitle={setTitle} />
        <CategoryField category={category} setCategory={setCategory} />
        <GoalField goal={goal} setGoal={setGoal} />

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

        <AdditionalOptions
          additionalOptions={additionalOptions}
          update={updateAdditionalOptions}
        />

        <DeadlineOptions
          deadlineOptions={deadlineOptions}
          update={updateDeadlineOptions}
        />

        {/* Pool Preview */}
        <PoolPreview
          title={title || "Название сбора"}
          category={category || "Категория"}
          deadline={date ? `до ${date}` : "до даты"}
          currentAmount={0}
          goalAmount={goal ? parseInt(goal) : 0}
          participants={0}
          status="Открыт"
        />

        {/* Submit Button */}
        <Button
          w="full"
          bg="linear-gradient(135deg, #14B8A6 0%, #8B5CF6 100%)"
          color="white"
          py={4}
          h="20%"
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
