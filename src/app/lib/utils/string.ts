export const timePassedSince = (dateString: Date | undefined) => {
  if (!dateString) return 'Uknown..';
  const pastDate: Date = new Date(dateString);
  const currentDate: Date = new Date();

  const totalSeconds = Math.floor(
    (currentDate.getTime() - pastDate.getTime()) / 1000
  );

  if (totalSeconds < 60) {
    return `${totalSeconds} seconds ago`;
  }

  const totalMinutes = Math.floor(totalSeconds / 60);
  if (totalMinutes < 60) {
    return `${totalMinutes} minutes ago`;
  }

  const totalHours = Math.floor(totalMinutes / 60);
  if (totalHours < 24) {
    return `${totalHours} hours ago`;
  }

  const totalDays = Math.floor(totalHours / 24);
  return `${totalDays} days ago`;
};

export const strTruncate = (str: string | undefined, amount: number = 26) => {
  if (!str) return 'No Title Found';

  const needsTruncate = str.length >= amount;
  if (needsTruncate) {
    return str.substring(0, amount) + '...';
  } else {
    return str;
  }
};
