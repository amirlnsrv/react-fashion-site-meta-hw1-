import React, { useRef, useState } from "react";

const UseRefComponent = () => {
  // counter
  const clickCount = useRef(0);
  const handleClick = () => {
    clickCount.current += 1;
    console.log(`Кликов: ${clickCount.current}`);
  };

  // player
  const videoRef = useRef(null);
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  // timer
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  const startCountdown = () => {
    const startTime = parseInt(inputRef.current.value);

    setTimeLeft(startTime);
    setIsCounting(true);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timerRef.current);
          setIsCounting(false);
          alert("Время вышло!");
          return 0;
        }
      });
    }, 1000);
  };

  return (
    <div>
      <h2>Счетчик кликов без перерендера</h2>
      <button onClick={handleClick}>Нажми</button>

      <h2>Видео-плеер</h2>
      <video ref={videoRef} width="600" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
      <div>
        <button onClick={handlePlay}>Воспроизвести</button>
        <button onClick={handlePause}>Пауза</button>
      </div>

      <h1>Обратный отсчет: {timeLeft}</h1>
      <input
        type="number"
        placeholder="Введите время в секундах"
        ref={inputRef}
        disabled={isCounting}
      />
      <button onClick={startCountdown} disabled={isCounting}>
        Старт
      </button>
    </div>
  );
};

export default UseRefComponent;
