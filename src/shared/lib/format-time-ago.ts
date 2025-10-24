export const formatTimeAgo = (date: Date): string => {
  const diff = Date.now() - date.getTime();
  const m = Math.floor(diff / 60000);
  const h = Math.floor(m / 60);

  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  if (h < 24) return `${h} h ago`;

  return `${Math.floor(h / 24)} d ago`;
};
