import { Game } from "../../models";

export const getDetailGame = (id: string): Promise<Game> => {
	const url: string = `${process.env.API_URL}/games/${id}?${process.env.API_KEY}`;

	return fetch(url).then((res) => res.json());
};
