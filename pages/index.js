import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Cryptify</title>
				<meta
					name="description"
					content="Buy and sell cryptos."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="main">
				<section className="box">
					<img className="logo" src="/logo.jpg"></img>
					
					<h3 className="h3">The website is coming soon!</h3>
				</section>
			</main>
		</>
	);
}
