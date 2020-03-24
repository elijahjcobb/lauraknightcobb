/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./VerseDetailView.css";
import {IonIcon} from "../footer/IonIcon";
import {Verse} from "../../objects/Verse";

export interface PoemDetailViewProps {
	onClose: () => void;
	poem: Verse;
}

export interface PoemDetailViewState {

}

export class VerseDetailView extends React.Component<PoemDetailViewProps, PoemDetailViewState> {

	private i: number = 0;

	public constructor(props: PoemDetailViewProps) {

		super(props);
		this.state = {};

		this.handleClose = this.handleClose.bind(this);

	}

	private handleClose(): void {

		this.props.onClose();

	}

	public render(): React.ReactElement {

		return (<div className="poemDetailView">
			<div onClick={this.handleClose} className={"closeButton"}>
				<IonIcon name={"close"}/>
			</div>
			<img src={this.props.poem.imageUrl} alt={this.props.poem.name}/>
			<div className="container">
				<h2>{this.props.poem.name}</h2>
				{this.props.poem.content.map((paragraph: (string[] | {title: string, lines: string[]})) => {
					if (Array.isArray(paragraph)) {
						return <div className={"paragraph"}>
							{
								paragraph.map((line: string) => {
									return <p key={this.i++}>{line}</p>;
								})
							}
						</div>
					} else {
						return <div className={"paragraph"}>
							<h3 className={"title"}>{paragraph.title}</h3>
							{
								paragraph.lines.map((line: string) => {
									return <p key={this.i++}>{line}</p>;
								})
							}
						</div>
					}
				})}
			</div>
		</div>);

	}
}