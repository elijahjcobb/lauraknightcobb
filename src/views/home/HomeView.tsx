/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./HomeView.css";

export interface HomeViewProps {

}

export interface HomeViewState {

}

export class HomeView extends React.Component<HomeViewProps, HomeViewState> {

	public constructor(props: HomeViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {

		return (<div className="home">
			<img src={"./img/laura.jpg"} alt={"laura head-shot"}/>
			<div className={"text"}>
				<p><span className={"name"}>Laura Knight Cobb</span> is an author, lyricist, and poet. She lives in Traverse City, Michigan with her husband of 25 years. She is a proud mother of two. As a teacher of 25 years, she has educated students in every grade K-8 in: Florida, England, Texas, Switzerland, Michigan, and Scotland. She received an honorary Fulbright Award, and earned Summa Cum Laude with a Master's Degree in Curriculum and Instruction.</p>
				<p>Laura is an award winning author, lyricist, and poet. She empowers strong messages of equality for all and portrays the meaning of living a positive oriented life.</p>
			</div>
		</div>);

	}
}