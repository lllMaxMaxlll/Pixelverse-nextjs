export const Routes = {
	HOME: {
		path: "/",
		name: "Home",
	},
	GENRES: {
		path: "genres",
		name: "Genres",
	},
	GAMES: {
		path: "games",
		name: "Games",
	},
	PLATFORMS: {
		path: "platforms",
		name: "Platforms",
	},
};

export interface Route {
	path: string;
	name: string;
}
