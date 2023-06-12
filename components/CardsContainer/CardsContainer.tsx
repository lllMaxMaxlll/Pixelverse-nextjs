import { Game } from "@/app/games/models";
import style from "./CardsContainer.module.css";
import { CardGame } from "@/components";

type Props = {
	games: Game[];
};

function CardsContainer({ games }: Props) {
	return (
		<div className={style.cardsContainer}>
			{games.length &&
				games.map((game) => {
					return <CardGame key={game.id} data={game} />;
				})}
		</div>
	);
}

export default CardsContainer;
