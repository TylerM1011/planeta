"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./matching-game.module.css";
import IconButton from "@/components/IconButton";

const generateDeck = () => {
  const matchingCards = [
    "attention",
    "emoji",
    "fire",
    "lightning",
    "moon",
    "planet",
    "rainbow",
    "star",
  ];
  const deck = [...matchingCards, ...matchingCards];
  deck.sort(() => Math.random() - 0.5);
  return deck;
};
export default function MatchingGame() {
  const [cards, setCards] = useState(generateDeck());
  return (
    <div>
      <div className={styles.cardGrid}>
        {cards.map((card) => {
          return (
            <div className="card">
              <IconButton
                unactiveImage="/public/matching-game-assets/neon-attention.svg"
                width={100}
                height={100}
              ></IconButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}
