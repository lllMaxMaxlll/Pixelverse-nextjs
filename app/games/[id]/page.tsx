import { getDetailGame } from "./services";
import style from "./detailGame.module.css";
import React from "react";
import { ReturnButton } from "@/components";

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
					<h2>{detailGame.name}</h2>
				</div>
				<div className={style.infoContainer}>
					<div className={style.title}>
						<p>{detailGame.description_raw}</p>
					</div>
					<div className={style.info}>
						<span>Released:</span>
						<p>{detailGame.released}</p>
						<span>Rating:</span>
						<p>{detailGame.rating}</p>
						<span>Genres:</span>
						<ul>
							{detailGame.genres.map((genre) => (
								<li>{genre.name}</li>
							))}
						</ul>
						<br />
						<span>Platforms:</span>
						<ul>
							{detailGame.platforms.map((platform) => (
								<li>{platform.platform.name}</li>
							))}
						</ul>
						<br />
						<span>Publishers:</span>
						<ul>
							{detailGame.publishers.map((publisher) => (
								<li>{publisher.name}</li>
							))}
						</ul>
					</div>
				</div>
				<ReturnButton />
			</div>
		</div>
	);
}

export default DetailGame;
