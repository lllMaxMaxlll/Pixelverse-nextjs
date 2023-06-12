"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import style from "./Navbar.module.css";
import { Pixelheart } from "../../public";
import { useState } from "react";
import { Searchbar } from "@/components";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

export default function Navbar() {
	// State to responsive menu
	const [isOpen, setIsOpen] = useState(false);

	// // Change name logo to white in detail page!
	// const logoNameColor = router.pathname.includes("/detail") ? style.logoNameWhite : style.logoNameColor;
	// const logoColor = router.pathname.includes("/detail") ? "#e1e1e1" : "#4d194d";
	// // Change navbar color in detail page!
	// const navbarColor = router.pathname.includes("detail") ? style.navDark : false;
	// // Hide searchbar in detail page!
	// const inHome = router.pathname.includes("/detail") || router.pathname.includes("/create");

	// Hide navbar when scroll down
	// let prevScrollpos = window.pageYOffset;
	// window.onscroll = () => {
	// 	let currentScrollPos = window.pageYOffset;
	// 	// If scroll down hide navbar
	// 	prevScrollpos > currentScrollPos
	// 		? (document.getElementById("navbar").style.top = "0")
	// 		: (document.getElementById("navbar").style.top = "-4.8rem");
	// 	// If scroll down and view detail, put blur to navbar
	// 	router.pathname.includes("/detail") && prevScrollpos > 50 && currentScrollPos > 60
	// 		? (document.getElementById("navbar").style.backdropFilter = "blur(10px)")
	// 		: (document.getElementById("navbar").style.backdropFilter = "none");
	// 	// If scroll down, close menu responsive
	// 	prevScrollpos < currentScrollPos ? setIsOpen(false) : true;

	// 	prevScrollpos = currentScrollPos;
	// };

	const handlerMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		// <nav className={`${style.nav} ${navbarColor}`} id="navbar">
		<nav className={`${style.nav}`} id="navbar">
			<div className={style.logoContainer}>
				<Link href="/">
					<Pixelheart color={"#4d194d"} width={"35px"} />
					{/* <p className={logoNameColor}>PIXELVERSE</p> */}
				</Link>
				<p className={`${silkscreen.className} ${style.logoNameColor}`}>PIXELVERSE</p>
			</div>
			<Searchbar />
		</nav>
	);
}
