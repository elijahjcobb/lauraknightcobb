/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./VerseCellView.css";
import {Verse} from "../../objects/Verse";

export interface PoemCellViewProps {
	poem: Verse;
	onClick: (poem: Verse) => void;
}

export interface PoemCellViewState {

}

export class VerseCellView extends React.Component<PoemCellViewProps, PoemCellViewState> {

	public constructor(props: PoemCellViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {

		return (<div className={"poem"} onClick={() => this.props.onClick(this.props.poem)}>
			<div className={"background"} style={{backgroundImage: `url(${this.props.poem.imageUrl})`}}/>
			<div className={"container"}>
				<span>{this.props.poem.name}</span>
			</div>
		</div>);

	}
}