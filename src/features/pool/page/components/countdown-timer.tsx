import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export interface CountdownTimerProps {
  deadline: string; // Формат: "25 янв 2025"
}

export const CountdownTimer = ({ deadline }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 23,
    seconds: 45,
  });

  useEffect(() => {
    // Преобразуем строку даты в объект Date
    const parseDate = (dateStr: string) => {
      const months: { [key: string]: number } = {
        'янв': 0, 'фев': 1, 'мар': 2, 'апр': 3, 'май': 4, 'июн': 5,
        'июл': 6, 'авг': 7, 'сен': 8, 'окт': 9, 'ноя': 10, 'дек': 11
      };
      
      const parts = dateStr.split(' ');
      const day = parseInt(parts[0]);
      const month = months[parts[1].toLowerCase()];
      const year = parseInt(parts[2]);
      
      return new Date(year, month, day);
    };

    const targetDate = parseDate(deadline);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Если время вышло, устанавливаем нулевые значения
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Сразу вычисляем время
    calculateTimeLeft();
    
    // Устанавливаем интервал для обновления каждую секунду
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <Box id="countdown-timer" px={4} py={4}>
      <Box
        bg="white"
        rounded="2xl"
        p={4}
        borderWidth="1px"
        borderColor="gray.200"
        shadow="sm"
      >
        <Text textAlign="center" fontSize="sm" color="gray.900" mb={4}>До завершения сбора</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={2} textAlign="center">
          <GridItem>
            <Box
              bg="gray.100"
              rounded="lg"
              p={3}
            >
              <Text fontSize="2xl" color="gray.900">{timeLeft.days}</Text>
              <Text fontSize="xs" color="gray.600">дня</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bg="gray.100"
              rounded="lg"
              p={3}
            >
              <Text fontSize="2xl" color="gray.900">{timeLeft.hours}</Text>
              <Text fontSize="xs" color="gray.600">часов</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bg="gray.100"
              rounded="lg"
              p={3}
            >
              <Text fontSize="2xl" color="gray.900">{timeLeft.minutes}</Text>
              <Text fontSize="xs" color="gray.600">минут</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bg="gray.100"
              rounded="lg"
              p={3}
            >
              <Text fontSize="2xl" color="gray.900">{timeLeft.seconds}</Text>
              <Text fontSize="xs" color="gray.600">секунд</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};