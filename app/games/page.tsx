"use client";

import { CardsContainer, Navbar } from "@/components";
import { getGames } from "./services";
import style from "./games.module.css";
import { Game } from "./models";
import { useEffect, useState } from "react";

async function fetchGames(url?: string) {
	return await getGames(url);
}

async function Games() {
	const [games, setGames] = useState<Game[]>([]);
	const [next, setNext] = useState<string | null>(null);
	const [prev, setPrev] = useState<string | null>(null);

	const loadGames = async (url?: string) => {
		const response = await fetchGames(url);
		setGames(response.results);
		setNext(response.next);
		setPrev(response.previous);
	};

	const handleNext = () => {
		if (next) {
			loadGames(next);
		}
	};

	const handlePrev = () => {
		if (prev) {
			loadGames(prev);
		}
	};

	useEffect(() => {
		loadGames();
	}, []);

	return (
		<>
			<Navbar />
			<CardsContainer games={games} />
			<div className={style.loadButton}>
				{prev && <button onClick={handlePrev}>Prev</button>}
				{next && <button onClick={handleNext}>Next</button>}C
			</div>
		</>
	);
}

export default Games;
