import { useEffect, useState } from "react";

export default function useDateCheck() {
  const current = new Date();
  const [currentDate, setCurrentDate] = useState(current);
  const [isDDay, setIsDDay] = useState(false);

  useEffect(() => {
    if (currentDate) {
      const currentTime = new Date(currentDate);

      /* 12월 25일 0시 0분 */
      const christmasTime = new Date(currentTime.getFullYear(), 11, 25, 0, 0);

      /* D-day 이상이면 true */
      if (currentTime >= christmasTime) {
        setIsDDay(true);
      }
    }
  }, [currentDate]);

  return { isDDay, setCurrentDate };
}
