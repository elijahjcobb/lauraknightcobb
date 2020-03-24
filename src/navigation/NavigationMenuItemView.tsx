/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Link} from "react-router-dom";

export interface NavigationMenuItemViewProps {
	name: string;
	url: string;
	onClick: (url: string) => void;
}

export interface NavigationMenuItemViewState {

}

export class NavigationMenuItemView extends React.Component<NavigationMenuItemViewProps, NavigationMenuItemViewState> {

	public constructor(props: NavigationMenuItemViewProps) {

		super(props);
		this.state = {};

		this.handleOnClick = this.handleOnClick.bind(this);

	}

	private handleOnClick(): void {

		this.props.onClick(this.props.url);

	}

	public render(): React.ReactElement {

		return <li onClick={this.handleOnClick}><Link to={this.props.url}>{this.props.name}</Link></li>;

	}
}