import { Game } from "./game.model";

export interface GetGamesResponse {
	count: number;
	next: string;
	previous: string;
	results: Game[];
}
