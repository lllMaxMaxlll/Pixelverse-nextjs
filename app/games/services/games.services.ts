import { GetGamesResponse } from "../models";

export const getGames = (url?: string): Promise<GetGamesResponse> => {
	const apiUrl: string = url || `${process.env.API_URL}/games?${process.env.API_KEY}`;

	return fetch(apiUrl)
		.then((res) => res.json())
		.catch((error) => {
			throw new Error("Error loading more games");
		});
};
