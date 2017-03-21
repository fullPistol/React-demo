import React, { Component } from 'react';

import styles from './index.less';

class RollDots extends Component {

	constructor(props) {
		super(props);
	}


	dotClick = (i) => {
		
		let option = i - this.props.now;
		//callback
		this.props.run(option);
	}

	render() {

		const liNode = [];
		//dot的个数,当前的dot
		const { count, now } = this.props;
		
		for(let i = 0; i < count; i++) {
			
			liNode[i] = (
				<li 
					key={i}
					className={'dot ' + (i === now ? 'cur' : '')}
					// onClick = {this.dotClick(i)}
				>
				</li>
			)
		}
		

		return (
			<ul>
				{liNode}
			</ul>
		)
	}


}

export default RollDots;
