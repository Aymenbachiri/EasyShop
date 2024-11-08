function formatTimestamp(timestamp: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options).format(timestamp);
}

export function TimeStamp({ time }: { time: Date }) {
  const formattedTimestamp = formatTimestamp(time);

  return (
    <span className="text-lg font-bold">
      {formattedTimestamp.substring(0, 10)}
    </span>
  );
}
