/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface LyricsViewProps {

}

export interface LyricsViewState {

}

export class LyricsView extends React.Component<LyricsViewProps, LyricsViewState> {

	public constructor(props: LyricsViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {

		return (<div>
			<p>/lyrics</p>
		</div>);

	}
}