import "./globals.css";
import { Sofia_Sans_Condensed } from "next/font/google";

const sofiaSans = Sofia_Sans_Condensed({
	weight: ["400", "700"],
	style: ["normal"],
	variable: "--font-sofia",
	subsets: ["latin"],
});

export const metadata = {
	title: "Pixelverse",
	description: "All info of Videogames",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={sofiaSans.className}>{children}</body>
		</html>
	);
}
