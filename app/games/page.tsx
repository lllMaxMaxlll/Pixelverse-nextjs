import { CardGame, Navbar } from "@/components";
import { getGames } from "./services";
import style from "./games.module.css";

async function fetchGames() {
	const games = await getGames();
	return games.results;
}

const apiUrl = `${process.env.API_URL}/games?${process.env.API_KEY}`;

async function Games() {
	const games = await fetchGames();

	return (
		<div className={style.cardsContainer}>
			<Navbar />
			{games.map((game) => {
				return <CardGame key={game.id} data={game} />;
			})}
		</div>
	);
}

export default Games;
