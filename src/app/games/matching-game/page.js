"use client";
import { useState, useEffect } from "react";
import { IconButton } from "@/components/IconButton";
import Image from "next/image";
import styles from "./matching-game.module.css";

const CARDS = [
  "/matching-game-assets/neon-attention.svg",
  "/matching-game-assets/neon-emoji.svg",
  "/matching-game-assets/neon-fire.svg",
  "/matching-game-assets/neon-lightning.svg",
  "/matching-game-assets/neon-moon.svg",
  "/matching-game-assets/neon-planet.svg",
  "/matching-game-assets/neon-rainbow.svg",
  "/matching-game-assets/star.svg",
  "/matching-game-assets/neon-attention.svg",
  "/matching-game-assets/neon-emoji.svg",
  "/matching-game-assets/neon-fire.svg",
  "/matching-game-assets/neon-lightning.svg",
  "/matching-game-assets/neon-moon.svg",
  "/matching-game-assets/neon-planet.svg",
  "/matching-game-assets/neon-rainbow.svg",
  "/matching-game-assets/star.svg",
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Shuffle cards
    const shuffled = [...CARDS].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setIsWon(false);
  };

  const handleCardClick = (index) => {
    // Prevent clicking if two cards are already flipped
    if (flipped.length === 2) return;
    // Prevent clicking already matched or flipped cards
    if (matched.includes(index) || flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    // If two cards are flipped, check for match
    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);

      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched([...matched, ...newFlipped]);
        setFlipped([]);

        // Check if all cards are matched
        if (matched.length + 2 === cards.length) {
          setIsWon(true);
        }
      } else {
        // If no match, flip cards back after delay
        setTimeout(() => {
          setFlipped([]);
        }, 800);
      }
    }
  };
  const isFlipped = (index) =>
    flipped.includes(index) || matched.includes(index);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.header}>
        <div className={styles.wonMessage}>Moves: {moves}</div>
      </div>

      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(index)}
          >
            <Image
              src={isFlipped(index) ? card : `/matching-game-assets/casino.svg`}
              width={100}
              height={124}
            ></Image>
          </div>
        ))}
      </div>
      <div className={styles.resetContainer}>
        <button onClick={initializeGame} variant="" size="" className="">
          Reset
        </button>
      </div>

      {isWon && (
        <div className={styles.wonMessage}>You Won in {moves} moves!</div>
      )}
    </div>
  );
}
