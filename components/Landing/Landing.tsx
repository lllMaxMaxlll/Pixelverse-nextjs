import Link from "next/link";
import style from "./Landing.module.css";
import { BgLanding, Pixelheart } from "@/components";

function Landing() {
	return (
		<div className={style.container}>
			<div className={style.landing}>
				<Pixelheart color={"#fff"} />
				<h1>PIXELVERSE</h1>
				<Link href={"/games"}>
					<button className={style.buttonStart}>Press start!</button>
				</Link>
			</div>
			<BgLanding />
		</div>
	);
}

export default Landing;
