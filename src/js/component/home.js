import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<>
			<div clasName="container">
				<Navbar />
				<Jumbotron />

				<div className="d-flex justify-content-center">
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
}
