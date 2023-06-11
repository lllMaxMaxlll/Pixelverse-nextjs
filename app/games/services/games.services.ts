import { Api } from "../models";

const defaultUrl: string = `${process.env.API_URL}/games?${process.env.API_KEY}`;

export const getGames = (url: string = defaultUrl): Promise<Api> => {
	console.log("LLEGUE AL GET GAMES CON ESTA URL", url);
	return fetch(url)
		.then((res) => res.json())
		.catch((error) => console.log(error));
};
