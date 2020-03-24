/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

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

		return (<div>
			<p>/contact</p>
		</div>);

	}
}