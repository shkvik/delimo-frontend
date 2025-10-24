import { Box, Text, Input, Grid, Flex } from "@chakra-ui/react";
import { FaCog, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

interface SettingToggleProps {
  title: string;
  description: string;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const SettingToggle = ({
  title,
  description,
  isChecked = false,
  onChange,
}: SettingToggleProps) => {
  return (
    <Box
      bg="white"
      rounded="2xl"
      p={4}
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Flex justify="space-between" align="center" mb={3}>
        <Box>
          <Text fontSize="sm" color="gray.900">
            {title}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {description}
          </Text>
        </Box>
        <Box as="label" display="flex" alignItems="center" cursor="pointer">
          <Box
            as="input"
            type="checkbox"
            display="none"
            checked={isChecked}
            onChange={(e) => onChange && onChange(e.target.checked)}
          />
          <Box
            w={11}
            h={6}
            bg={isChecked ? "gray.700" : "gray.200"}
            rounded="full"
            position="relative"
            transition="all"
            _focus={{
              outline: "none",
            }}
          >
            <Box
              position="absolute"
              top="2px"
              left={isChecked ? "calc(100% - 20px)" : "2px"}
              bg="white"
              rounded="full"
              h={5}
              w={5}
              transition="all"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export const AdvancedSettings = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isAutoReminder, setIsAutoReminder] = useState(true);
  const [selfPayment, setIsSelfPayment] = useState(true);
  const [minContribution, setMinContribution] = useState("");
  const [maxContribution, setMaxContribution] = useState("");

  return (
    <Box id="advanced-settings" px={4} py={4} bg="gray.50">
      <Flex align="center" gap={2} mb={4}>
        <FaCog color="gray.600" />
        <Text fontSize="lg" color="gray.900">
          Дополнительные настройки
        </Text>
      </Flex>

      <Box display="flex" flexDirection="column" gap={4}>
        {/* Privacy Settings */}
        <SettingToggle
          title="Приватный сбор"
          description="Только по ссылке или QR-коду"
          isChecked={isPrivate}
          onChange={setIsPrivate}
        />

        {/* Anonymous Donations */}
        <SettingToggle
          title="Анонимные взносы"
          description="Скрыть имена участников"
          isChecked={isAnonymous}
          onChange={setIsAnonymous}
        />

        {/* Auto Reminders */}
        <SettingToggle
          title="Автонапоминания"
          description="За 3, 1 день и в день дедлайна"
          isChecked={isAutoReminder}
          onChange={setIsAutoReminder}
        />

        <SettingToggle
          title="Вносить самому"
          description="Нужно ли вам вносить деньги"
          isChecked={selfPayment}
          onChange={setIsSelfPayment}
        />

        {/* Contribution Limits */}
        <Box
          bg="white"
          rounded="2xl"
          p={4}
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Box mb={4}>
            <Text fontSize="sm" color="gray.900" mb={1}>
              Лимиты взносов
            </Text>
            <Text fontSize="xs" color="gray.500">
              Установите ограничения для участников
            </Text>
          </Box>

          <Grid templateColumns="1fr 1fr" gap={4}>
            <Box>
              <Text fontSize="xs" color="gray.600" mb={1} display="block">
                Минимум
              </Text>
              <Box position="relative">
                <Input
                  type="number"
                  placeholder="100"
                  w="full"
                  px={3}
                  py={2}
                  pr={6}
                  bg="gray.50"
                  borderWidth="1px"
                  borderColor="gray.300"
                  rounded="lg"
                  _focus={{ borderColor: "gray.500", outline: "none" }}
                  color="gray.900"
                  value={minContribution}
                  onChange={(e) => setMinContribution(e.target.value)}
                />
                <Text
                  position="absolute"
                  right={2}
                  top={2}
                  fontSize="xs"
                  color="gray.500"
                >
                  ₽
                </Text>
              </Box>
            </Box>

            <Box>
              <Text fontSize="xs" color="gray.600" mb={1} display="block">
                Максимум
              </Text>
              <Box position="relative">
                <Input
                  type="number"
                  placeholder="10000"
                  w="full"
                  px={3}
                  py={2}
                  pr={6}
                  bg="gray.50"
                  borderWidth="1px"
                  borderColor="gray.300"
                  rounded="lg"
                  _focus={{ borderColor: "gray.500", outline: "none" }}
                  color="gray.900"
                  value={maxContribution}
                  onChange={(e) => setMaxContribution(e.target.value)}
                />
                <Text
                  position="absolute"
                  right={2}
                  top={2}
                  fontSize="xs"
                  color="gray.500"
                >
                  ₽
                </Text>
              </Box>
            </Box>
          </Grid>

          <Flex mt={2} align="center" gap={2}>
            <FaInfoCircle color="gray.400" fontSize="xs" />
            <Text fontSize="xs" color="gray.500">
              Оставьте поле пустым для снятия ограничения
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
