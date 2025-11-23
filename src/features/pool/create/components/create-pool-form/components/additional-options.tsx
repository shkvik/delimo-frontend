import { Box, Text, Input, Flex, Switch } from "@chakra-ui/react";
import { useState } from "react";

export interface AdditionalOptionsState {
  allowAnonymous: boolean;
  creatorContributes: boolean;
  equalSplit: boolean;
  participantCount: string;
}

export interface AdditionalOptionsProps {
  additionalOptions: AdditionalOptionsState;
  update: <K extends keyof AdditionalOptionsState>(
    key: K,
    value: AdditionalOptionsState[K]
  ) => void;
}

export const AdditionalOptions = ({
  additionalOptions,
  update,
}: AdditionalOptionsProps) => {
  const [showDivisionWarning, setShowDivisionWarning] = useState(false);

  const handleEqualSplitChange = (isChecked: boolean) => {
    update("equalSplit", isChecked);
    if (isChecked) {
      // Проверяем, нужно ли показать предупреждение
      checkDivisionWarning(additionalOptions.participantCount);
    }
  };

  const handleParticipantCountChange = (value: string) => {
    update("participantCount", value);
    if (additionalOptions.equalSplit) {
      checkDivisionWarning(value);
    }
  };

  const checkDivisionWarning = (count: string) => {
    // Здесь можно добавить логику проверки деления суммы без остатка
    // Пока просто показываем предупреждение для примера
    const numCount = parseInt(count);
    if (numCount && numCount > 0) {
      setShowDivisionWarning(true);
    } else {
      setShowDivisionWarning(false);
    }
  };

  return (
    <Box id="additional-options-section">
      <Box bg="white" rounded="2xl" p={4} boxShadow="md">
        <Text fontSize="sm" fontWeight="semibold" color="gray.900" mb={4}>
          Дополнительные настройки
        </Text>

        <Box display="flex" flexDirection="column" gap={4}>
          {/* Anonymous Contributions */}
          <Flex align="start" justify="space-between">
            <Box flex={1}>
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="gray.900"
                cursor="pointer"
                display="block"
                onClick={() =>
                  update("allowAnonymous", !additionalOptions.allowAnonymous)
                }
              >
                Разрешить анонимные взносы
              </Text>
              <Text fontSize="xs" color="gray.500" mt={1}>
                Участники смогут вносить деньги без указания имени
              </Text>
            </Box>
            <Switch.Root
              colorPalette="cyan"
              id="anonymous-switch"
              checked={additionalOptions.allowAnonymous}
              onCheckedChange={(details) =>
                update("allowAnonymous", details.checked === true)
              }
            >
              <Switch.HiddenInput />
              <Switch.Control />
            </Switch.Root>
          </Flex>

          {/* Creator Contribution */}
          <Flex align="start" justify="space-between">
            <Box flex={1}>
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="gray.900"
                cursor="pointer"
                display="block"
                onClick={() =>
                  update(
                    "creatorContributes",
                    !additionalOptions.creatorContributes
                  )
                }
              >
                Создатель тоже вносит деньги
              </Text>
              <Text fontSize="xs" color="gray.500" mt={1}>
                Вы также будете участвовать в сборе средств
              </Text>
            </Box>
            <Switch.Root
              id="creator-contributes-switch"
              colorPalette="cyan"
              checked={additionalOptions.creatorContributes}
              onCheckedChange={(details) =>
                update("creatorContributes", details.checked === true)
              }
            >
              <Switch.HiddenInput />
              <Switch.Control />
            </Switch.Root>
          </Flex>

          {/* Equal Split */}
          <Flex align="start" justify="space-between">
            <Box flex={1}>
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="gray.900"
                cursor="pointer"
                display="block"
                onClick={() =>
                  update("equalSplit", !additionalOptions.equalSplit)
                }
              >
                Разделить сумму поровну
              </Text>
              <Text fontSize="xs" color="gray.500" mt={1}>
                Каждый участник внесёт равную долю от общей суммы
              </Text>
            </Box>
            <Switch.Root
              colorPalette="cyan"
              id="equal-split-switch"
              checked={additionalOptions.equalSplit}
              onCheckedChange={(details) =>
                handleEqualSplitChange(details.checked === true)
              }
            >
              <Switch.HiddenInput />
              <Switch.Control />
            </Switch.Root>
          </Flex>

          {/* Participant Count (conditional) */}
          {additionalOptions.equalSplit && (
            <Box ml={8} mt={3} transition="all 0.3s">
              <Text
                fontSize="xs"
                fontWeight="medium"
                color="gray.600"
                mb={2}
                display="block"
              >
                Количество участников
              </Text>
              <Input
                type="number"
                color="black"
                placeholder="10"
                w={32}
                px={3}
                py={2}
                borderWidth="1px"
                borderColor="gray.200"
                rounded="lg"
                fontSize="sm"
                _focus={{ outline: "none", boxShadow: "none" }}
                id="participant-count-input"
                min={2}
                max={100}
                value={additionalOptions.participantCount}
                onChange={(e) => handleParticipantCountChange(e.target.value)}
              />
              <Text fontSize="xs" color="gray.500" mt={1}>
                От 2 до 100 участников
              </Text>

              {showDivisionWarning && (
                <Box
                  mt={2}
                  bg="yellow.50"
                  borderWidth="1px"
                  borderColor="yellow.200"
                  borderRadius="md"
                  p={2}
                >
                  <Text fontSize="xs" color="yellow.700">
                    ⚠️ Сумма должна делиться без остатка
                  </Text>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
