/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import "./NavigationMenuView.css";
import * as React from "react";
import {NavigationMenuItemView} from "./NavigationMenuItemView";

export interface NavigationMenuViewProps {
	pageChanged(url: string): void;
}

export interface NavigationMenuViewState {
	activePage: string;
}

export class NavigationMenuView extends React.Component<NavigationMenuViewProps, NavigationMenuViewState> {

	public constructor(props: NavigationMenuViewProps) {

		super(props);
		this.state = {activePage: "/"};

		this.handleItemClick = this.handleItemClick.bind(this);

	}

	private handleItemClick(url: string): void {

		console.log(url + " clicked!");
		this.setState({activePage: url});
		this.props.pageChanged(url);

	}

	public render(): React.ReactElement {

		return (<nav>
			<h1>Laura Knight Cobb</h1>
			<ul>
				<NavigationMenuItemView name={"home"} url={"/"} onClick={this.handleItemClick}/>
				<NavigationMenuItemView name={"books"} url={"/books"} onClick={this.handleItemClick}/>
				<NavigationMenuItemView name={"lyrics"} url={"/lyrics"} onClick={this.handleItemClick}/>
				<NavigationMenuItemView name={"poems"} url={"/poems"} onClick={this.handleItemClick}/>
				<NavigationMenuItemView name={"contact"} url={"/contact"} onClick={this.handleItemClick}/>
			</ul>
		</nav>);

	}
}