import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const handleInterval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(handleInterval);
      alert("Выполнено размонтирование компоненты");
    };
  }, []);

  return <p>Сколько секунд открыт компонент: {seconds}</p>;
};

export default Timer;
