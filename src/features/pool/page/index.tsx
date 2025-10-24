import { Box, Spinner, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { PoolStatusBanner } from "./components/pool-status-banner";
import { ProgressOverview } from "./components/progress-overview";

export const PoolPage = () => {
  const { poolId } = useParams<{ poolId: string }>(); // <-- вот здесь достаём poolId
  const [pool, setPool] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!poolId) return;

    // мокаем загрузку данных
    (async () => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 500));

      // имитация "ответа" API
      setPool({
        id: poolId,
        title: `Сбор №${poolId}`,
        organizer: "Мария",
        avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=marie",
        status: "active",
        goal: 8000,
        collected: 4200,
        participants: 7,
        maxParticipants: 10,
      });

      setLoading(false);
    })();
  }, [poolId]);

  if (loading)
    return (
      <Center h="100vh">
        <Spinner size="lg" color="gray.500" />
      </Center>
    );

  return (
    <Box>
      <Header
        title={pool.title}
        organizer={pool.organizer}
        avatarUrl={pool.avatarUrl}
      />
      <PoolStatusBanner />
      <ProgressOverview
        collected={pool.collected}
        goal={pool.goal}
        participants={pool.participants}
        maxParticipants={pool.maxParticipants}
      />
    </Box>
  );
};
