/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import "./global.css";
import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {HomeView} from "../views/home/HomeView";
import {BooksView} from "../views/books/BooksView";
import {LyricsView} from "../views/lyrics/LyricsView";
import {PoemsView} from "../views/poems/PoemsView";
import {ContactView} from "../views/contact/ContactView";
import {NavigationMenuView} from "./NavigationMenuView";
import {FooterView} from "../footer/FooterView";

export interface AppProps {

}

export interface AppState {

}

export class App extends React.Component<AppProps, AppState> {

	public constructor(props: AppProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {

		return (<Router>
			<NavigationMenuView/>
			<div className={"mainApp"}>
				<Switch>
					<Route path="/books"><BooksView/></Route>
					<Route path="/lyrics"><LyricsView/></Route>
					<Route path="/poems"><PoemsView/></Route>
					<Route path="/contact"><ContactView/></Route>
					<Route path="/"><HomeView/></Route>
				</Switch>
			</div>
			<FooterView/>
		</Router>);

	}
}