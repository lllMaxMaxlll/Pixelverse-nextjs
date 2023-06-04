// import { CardGame } from ""
import CardGame from "@/components/CardGame/CardGame";
import { getGames } from "./services";

async function fetchGames() {
	return await getGames();
}

async function Games() {
	const games = await fetchGames();

	return (
		<>
			{games.map((game) => (
				<CardGame key={game.id} data={game} />
			))}
		</>
	);
}

export default Games;
