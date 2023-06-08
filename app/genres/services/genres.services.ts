import { Genre } from "../models";

export const getGenres = (): Promise<Genre[]> => {
	const url: string = `${process.env.API_URL}/genres?${process.env.API_KEY}`;

	return fetch(url)
		.then((res) => res.json())
		.then((data) => data.results);
};
