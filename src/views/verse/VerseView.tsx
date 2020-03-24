/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {VerseCellView} from "./VerseCellView";
import "./VerseView.css";
import {VerseDetailView} from "../verse/VerseDetailView";
import {Verse} from "../../objects/Verse";

export interface PoemsViewProps {
	verses: Verse[];

}

export interface PoemsViewState {
	currentPoem?: Verse;
}

export class VerseView extends React.Component<PoemsViewProps, PoemsViewState> {


	public constructor(props: PoemsViewProps) {

		super(props);
		this.state = {};

		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleClose = this.handleClose.bind(this);

	}

	private handleOnClick(poem: Verse): void {

		this.setState({currentPoem: poem});

	}

	private handleClose(): void {

		this.setState({currentPoem: undefined});

	}

	public render(): React.ReactElement {

		return this.state.currentPoem === undefined ? (
				<div className={"poems"}>
				{
				this.props.verses.map((poem: Verse) => {
					return <VerseCellView key={poem.name} poem={poem} onClick={this.handleOnClick}/>;
				})
			}
		</div>
		) : <VerseDetailView poem={this.state.currentPoem} onClose={this.handleClose}/>

	}
}