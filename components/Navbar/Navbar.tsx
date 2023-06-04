import { Route } from "@/models";
import Link from "next/link";
import style from "./Navbar.module.css";
import { Pixelheart } from "../../public";

import React from "react";

interface Props {
	pathNames: Route[];
}

export default function Navbar({ pathNames }: Props) {
	return (
		<nav className={style.nav} id="navbar">
			<Pixelheart color={"#4d194d"} width={"35px"} />
			<div>
				{pathNames.map((pathName) => (
					<Link key={pathName.name} href={pathName.path}>
						{pathName.name}
					</Link>
				))}
			</div>
		</nav>
	);
}
