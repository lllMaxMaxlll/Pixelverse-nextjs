import Image from "next/image";
import style from "./CardGenre.module.css";
import { Genre } from "@/app/genres/models";

interface Props {
	data: Genre;
}

function CardGenre({ data }: Props) {
	return (
		<div className={style.card}>
			<h3 className={style.title}>{data.name}</h3>
			{/* <p> Games with this genre: {data.games_count}</p> */}
			<Image width="600" height="200" src={data.image_background} alt={data.name} className={style.cardImg} />
		</div>
	);
}

export default CardGenre;
