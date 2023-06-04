import { Game } from "../models";

export const getGames = (): Promise<Game[]> => {
	const url: string = `${process.env.API_URL}/games?${process.env.API_KEY}`;

	return fetch(url)
		.then((res) => res.json())
		.then((data) => data.results);
};
