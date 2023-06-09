import { CardGame, Navbar } from "@/components";
import { getGames } from "./services";
import style from "./games.module.css";

async function fetchGames() {
	return await getGames();
}

async function Games() {
	const games = await fetchGames();

	return (
		<div className={style.cardsContainer}>
			<Navbar />
			{games.map((game) => (
				<CardGame key={game.id} data={game} />
			))}
		</div>
	);
}

export default Games;
