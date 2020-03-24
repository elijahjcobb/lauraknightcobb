/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./FooterView.css";
import {IonIcon} from "./IonIcon";

export interface FooterViewProps {

}

export interface FooterViewState {

}

export class FooterView extends React.Component<FooterViewProps, FooterViewState> {

	public constructor(props: FooterViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {

		return (<footer>
			<IonIcon name={"mail"}/>
			<IonIcon name={"logo-facebook"}/>
			<IonIcon name={"logo-instagram"}/>
			<IonIcon name={"logo-linkedin"}/>
		</footer>);

	}
}