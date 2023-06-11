"use client";

import { CardGame, Navbar, PaginateButton } from "@/components";
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
		const results = await fetchGames(url);
		setGames(results.results);
		setNext(results.next);
		setPrev(results.previous);
	};

	const handleNextPage = () => {
		if (next) {
			loadGames(next);
		}
	};

	const handlePrevPage = () => {
		if (prev) {
			loadGames(prev);
		}
	};

	// Llama a loadGames al renderizar inicialmente el componente
	useEffect(() => {
		loadGames();
	}, []);

	return (
		<>
			<Navbar />
			<div className={style.cardsContainer}>
				{games.length &&
					games.map((game) => {
						return <CardGame key={game.id} data={game} />;
					})}
			</div>
			<PaginateButton handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
		</>
	);
}

export default Games;
