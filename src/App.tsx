/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import "./views/navigation/global.css";
import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {HomeView} from "./views/home/HomeView";
import {BooksView} from "./views/books/BooksView";
import {VerseView} from "./views/verse/VerseView";
import {ContactView} from "./views/contact/ContactView";
import {NavigationMenuView} from "./views/navigation/NavigationMenuView";
import {FooterView} from "./views/footer/FooterView";
import {lyrics, poems} from "./objects/Verse";

export interface AppProps {

}

export interface AppState {
	currentPage: string;
}

export class App extends React.Component<AppProps, AppState> {

	public constructor(props: AppProps) {

		super(props);

		this.state = {currentPage: "/"};
		this.pageChanged = this.pageChanged.bind(this);

	}

	private pageChanged(url: string): void {

		this.setState({currentPage: url});

	}

	public render(): React.ReactElement {

		return (<Router>
			<NavigationMenuView pageChanged={this.pageChanged}/>
			<div className={"mainApp"}>
				<Switch>
					<Route path="/books"><BooksView/></Route>
					<Route path="/lyrics"><VerseView verses={lyrics}/></Route>
					<Route path="/poems"><VerseView verses={poems}/></Route>
					<Route path="/contact"><ContactView/></Route>
					<Route path="/"><HomeView/></Route>
				</Switch>
			</div>
			<FooterView/>
		</Router>);

	}
}