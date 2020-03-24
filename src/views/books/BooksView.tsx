/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

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

		return (<div>
			<p>/books</p>
		</div>);

	}
}