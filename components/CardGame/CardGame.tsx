import Image from "next/image";
import Link from "next/link";
import { Game } from "@/app/games/models";
import style from "./CardGame.module.css";

interface Props {
	data: Game;
}

function CardGame({ data }: Props) {
	return (
		<div className={style.card}>
			<div className={style.cardInfo}>
				<Link href={`/games/${data.id}`}>
					<h2 className={style.title}>{data.name}</h2>
				</Link>
			</div>
			<div className={style.cardSubtitle}>
				{data.genres.map((g) => (
					<p key={g.id}>{g.name}</p>
				))}
			</div>
			<Image width="400" height="300" src={data.background_image} priority={true} alt={data.name} className={style.cardImg} />
		</div>
	);
}

export default CardGame;
