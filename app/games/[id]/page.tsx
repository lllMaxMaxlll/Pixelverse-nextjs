import { getDetailGame } from "./services";
import style from "./detailGame.module.css";

async function DetailGame({ params }: { params: { id: string } }) {
	const detailGame = await getDetailGame(params.id);

	return (
		<div className={style.container}>
			<div className={style.detail}>
				<div
					className={style.background}
					style={{
						backgroundImage: `radial-gradient(circle, rgba(17,17,17,0.8) 0%, rgba(17,17,17,0.85) 50%,rgba(17,17,17,0.9) 100%), url(${detailGame.background_image})`,
					}}></div>
				<div className={style.title}>
					<h1>{detailGame.name}</h1>
				</div>
				<div className={style.infoContainer}>
					<div className={style.title}>
						<p dangerouslySetInnerHTML={{ __html: detailGame.description }} />
					</div>
					<div className={style.info}>
						<span>Released:</span>
						<p>{detailGame.released}</p>
						<span>Rating:</span>
						<p>{detailGame.rating}</p>
						<span>Genres:</span>
						<p>{detailGame.genres.map((genre) => `${genre.name} `)}</p>
						<span>Platforms:</span>
						<p>{detailGame.platforms.map((platform) => `${platform.platform.name} `)}</p>
					</div>
				</div>
				{/* <button onClick={() => new Navigator()}>Go back!</button> */}
			</div>
		</div>
	);
}

export default DetailGame;
