import { Game } from "./game.model";

export interface Api {
	count: number;
	description: string;
	filters: Filters;
	next: string;
	nofollow: boolean;
	nofollow_collections: string[];
	noindex: boolean;
	previous: string;
	results: Game[];
	seo_description: string;
	seo_h1: string;
	seo_keywords: string;
	seo_title: string;
}

export interface Filters {
	years: FiltersYear[];
}

export interface FiltersYear {
	count: number;
	decade: number;
	filter: string;
	from: number;
	nofollow: boolean;
	to: number;
	years: YearYear[];
}

export interface YearYear {
	count: number;
	nofollow: boolean;
	year: number;
}
