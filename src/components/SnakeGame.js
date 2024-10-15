import React, { useState, useEffect, useRef } from "react";
import styles from "./SnakeGame.module.css";

const CANVAS_SIZE = 400;
const SNAKE_SIZE = 20;
const GAME_SPEED = 100;

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 200, y: 200 }]);
  const [food, setFood] = useState({ x: 0, y: 0 });
  const [dir, setDir] = useState({ x: 0, y: -SNAKE_SIZE });
  const [gameOver, setGameOver] = useState(false);
  const [startGame, setstartGame] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDir({ x: 0, y: -SNAKE_SIZE });
          break;
        case "ArrowDown":
          setDir({ x: 0, y: SNAKE_SIZE });
          break;
        case "ArrowLeft":
          setDir({ x: -SNAKE_SIZE, y: 0 });
          break;
        case "ArrowRight":
          setDir({ x: SNAKE_SIZE, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    context.fillStyle = "#4CAF50";
    snake.forEach(({ x, y }) => context.fillRect(x, y, SNAKE_SIZE, SNAKE_SIZE));
    context.fillStyle = "#FF0000";
    context.fillRect(food.x, food.y, SNAKE_SIZE, SNAKE_SIZE);
  }, [snake, food]);

  useEffect(() => {
    if (gameOver || !startGame) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const newHead = { x: newSnake[0].x + dir.x, y: newSnake[0].y + dir.y };

      console.log(newHead, newSnake);
      if (
        newHead.x < 0 ||
        newHead.x >= CANVAS_SIZE ||
        newHead.y < 0 ||
        newHead.y >= CANVAS_SIZE ||
        newSnake.some(
          (segment) => segment.x === newHead.x && segment.y === newHead.y
        )
      ) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(newHead);

      if (newHead.x === food.x && newHead.y === food.y) {
        setFood({
          x:
            Math.floor(Math.random() * (CANVAS_SIZE / SNAKE_SIZE)) * SNAKE_SIZE,
          y:
            Math.floor(Math.random() * (CANVAS_SIZE / SNAKE_SIZE)) * SNAKE_SIZE,
        });
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameLoop = setInterval(moveSnake, GAME_SPEED);

    return () => clearInterval(gameLoop);
  }, [snake, food, dir, gameOver]);

  const restartGame = () => {
    setSnake([{ x: 200, y: 200 }]);
    setFood({
      x: Math.floor(Math.random() * (CANVAS_SIZE / SNAKE_SIZE)) * SNAKE_SIZE,
      y: Math.floor(Math.random() * (CANVAS_SIZE / SNAKE_SIZE)) * SNAKE_SIZE,
    });
    setDir({ x: 0, y: -SNAKE_SIZE });
    setGameOver(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Snake Game</h1>
      {!startGame && (
        <button
          onClick={() => {
            setstartGame(true);
            restartGame();
          }}
          className={styles.button}
        >
          Start
        </button>
      )}
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className={styles.canvas}
      />

      {gameOver && (
        <div className={styles.gameOver}>
          <h2>Game Over!</h2>
          <button onClick={restartGame} className={styles.button}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
