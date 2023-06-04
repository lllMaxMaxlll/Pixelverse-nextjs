import Navbar from "@/components/Navbar/Navbar";
import { Routes } from "@/models";
import "./globals.css";
import { Sofia_Sans_Condensed } from "next/font/google";

const sofiaSans = Sofia_Sans_Condensed({
	weight: ["400", "700"],
	style: ["normal"],
	variable: "--font-sofia-sans",
	subsets: ["latin"],
});

// const silkscreen = Silkscreen({
// 	weight: ["400"],
// 	style: ["normal"],
// 	variable: "--font-silkscreen",
// 	display: "optional", // Hasta que no cargue la fuente, no muestra el texto
// 	subsets: ["latin"],
// });

export const metadata = {
	title: "Pixelverse",
	description: "All info of Videogames",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={sofiaSans.className}>
				<Navbar pathNames={[Routes.HOME, Routes.GAMES, Routes.GENRES, Routes.PLATFORMS]} />
				{children}
			</body>
		</html>
	);
}
