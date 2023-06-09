"use client";

import { useState } from "react";
import style from "./Searchbar.module.css";

const SearchBar = () => {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (event: any) => {
		setText(event.target.value);
	};

	const handleSearch = (text: string) => {
		setLoading(true);
		// If no name, recover all
		if (text === undefined || !text) {
			// dispatch(showAllGames());
			setLoading(false);
			return;
		}
		// Dispatch with name from state
		// dispatch(getVideogamesByName(text)).then(() => setLoading(false));
		setText("");
	};

	return (
		<div className={style.searchContainer}>
			<div className={style.formGroup}>
				<input className={style.formField} value={text} key="text" type="text" placeholder=" " onChange={handleChange} />
				<label className={style.formLabel}>Search game</label>
				{loading ? <div className={style.loader}></div> : false}
				{/* <RiSearchLine className={style.searchButton} disabled={!text} onClick={() => handleSearch(text)} /> */}
			</div>
			<div className={style.buttonsContainer}>
				<button
					disabled={!text}
					onClick={() => {
						handleSearch(text);
					}}>
					Search
				</button>
				<button
					onClick={() => {
						// handleSearch();
					}}>
					All Games
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
