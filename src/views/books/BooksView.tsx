/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./BooksView.css";

export interface BooksViewProps {

}

export interface BooksViewState {

}

export class BooksView extends React.Component<BooksViewProps, BooksViewState> {

	public constructor(props: BooksViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {

		return (<div className={"books"}>
			<a target={"_blank"} href={"http://lessonofthelark.com"} rel={"noopener noreferrer"}>
				<img src={"http://lessonofthelark.com/img/cover.jpeg"} alt={"lesson of the lark"}/>
			</a>
		</div>);

	}
}