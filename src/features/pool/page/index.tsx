import { Box, Spinner, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { PoolStatusBanner } from "./components/pool-status-banner";
import { ProgressOverview } from "./components/progress-overview";
import { PoolDetails } from "./components/pool-details";
import { CountdownTimer } from "./components/countdown-timer";
import { ParticipantsList } from "./components/participants-list";
import { RecentActivity } from "./components/recent-activity";
import { PoolManagement } from "./components/pool-management";
import { QRCode } from "./components/qr-code";

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
        description: "Собираем деньги на подарок Анне к дню рождения. Планируем купить новый iPhone 15 Pro. День рождения 28 января, поэтому нужно успеть до этой даты.",
        createdDate: "15 окт 2025",
        deadline: "25 окт 2025",
        participantsList: [
          {
            id: "1",
            name: "Мария Петрова",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=111",
            role: "Организатор",
            status: "paid",
            amount: 1500
          },
          {
            id: "2",
            name: "Алексей Сидоров",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=222",
            joinedAt: "2 часа назад",
            status: "paid",
            amount: 1200
          },
          {
            id: "3",
            name: "Елена Козлова",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=333",
            joinedAt: "5 часов назад",
            status: "paid",
            amount: 1500
          },
          {
            id: "4",
            name: "Иван Смирнов",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=444",
            joinedAt: "Присоединился вчера",
            status: "pending",
            amount: 0
          },
          {
            id: "5",
            name: "Ольга Новикова",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=555",
            joinedAt: "Присоединилась 2 дня назад",
            status: "pending",
            amount: 0
          },
          {
            id: "6",
            name: "Денис Волков",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=666",
            joinedAt: "Присоединился 3 дня назад",
            status: "pending",
            amount: 0
          },
          {
            id: "7",
            name: "Анна Морозова",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=777",
            joinedAt: "Присоединилась 4 дня назад",
            status: "pending",
            amount: 0
          }
        ],
        activities: [
          {
            id: "1",
            type: "payment",
            description: "Алексей внес ₽1,200",
            timestamp: "2 часа назад"
          },
          {
            id: "2",
            type: "join",
            description: "Иван присоединился к сбору",
            timestamp: "1 день назад"
          },
          {
            id: "3",
            type: "payment",
            description: "Елена внесла ₽1,500",
            timestamp: "5 часов назад"
          },
          {
            id: "4",
            type: "reminder",
            description: "Отправлены напоминания",
            timestamp: "6 часов назад"
          }
        ]
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
      <CountdownTimer deadline={pool.deadline} />
      <PoolDetails
        description={pool.description}
        createdDate={pool.createdDate}
        deadline={pool.deadline}
      />
      <ParticipantsList
        participants={pool.participantsList}
        onInvite={() => console.log("Invite clicked")}
        onRemind={(id) => console.log("Remind clicked for", id)}
      />
      <RecentActivity activities={pool.activities} />
      <PoolManagement
        onEdit={() => console.log("Edit clicked")}
        onSendReminders={() => console.log("Send reminders clicked")}
        onExport={() => console.log("Export clicked")}
        onFinishEarly={() => console.log("Finish early clicked")}
        pendingCount={pool.participantsList.filter((p: any) => p.status === 'pending').length}
      />
      <QRCode
        onSave={() => console.log("Save QR clicked")}
        onShare={() => console.log("Share QR clicked")}
      />
    </Box>
  );
};
