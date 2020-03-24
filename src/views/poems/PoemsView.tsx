/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface PoemsViewProps {

}

export interface PoemsViewState {

}

export class PoemsView extends React.Component<PoemsViewProps, PoemsViewState> {

	public constructor(props: PoemsViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {

		return (<div className={"poems"}>

		</div>);

	}
}