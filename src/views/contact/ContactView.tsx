/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ContactView.css";

export interface ContactViewProps {

}

export interface ContactViewState {

}

export class ContactView extends React.Component<ContactViewProps, ContactViewState> {

	public constructor(props: ContactViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {

		return (<div className={"contact"} style={{backgroundImage: `url("./img/tree.jpg")`}}>
			<div className={"container"}>
				<img src={"./img/laura.jpg"} alt={"laura"}/>
				<h2>Laura Cobb</h2>
			</div>
		</div>);

	}
}