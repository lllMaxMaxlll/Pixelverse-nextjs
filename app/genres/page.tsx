import { CardGenre } from "@/components";
import { getGenres } from "./services";
import style from "./genres.module.css";

async function fetchGenres() {
	return await getGenres();
}

async function Genres() {
	const genres = await fetchGenres();

	return (
		<div className={style.container}>
			{genres.map((genre) => (
				<CardGenre key={genre.id} data={genre} />
			))}
		</div>
	);
}

export default Genres;
