import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';

import RollItem from './RollItem';
import RollDots from './RollDots';

import styles from './index.less'

class RollPic extends Component {

	constructor(props) {
		super(props);
		this.state = {
			now:0
		}
	}

	//滚动
	run = (i) => {
		let length = this.props.data.length;
		let now_ = parseInt(this.state.now + i); 

		if(now_ >= length) {
			now_ = now_ - length; 
		}

		if(now_ < 0) {
			now_ = now_ + length;
		}

		this.setState({
			now:now_
		})
	}

	autoRoll() {
		this.PIC = setInterval(() => {
			this.run(1);
		}, 5000)
	}

	componentDidMount() {
		this.autoRoll();
	}

	render() {

		let { data } = this.props;
		let count = data.length; 

		const itemNode = data.map((item, index) => (
			<RollItem item={item} key={index} />
		));

		return (
			<div className={styles.roll}>
        		<ul style={{
        			left: -23.5 * this.state.now + 'rem',
	              	width: data.length * -23.5 + 'rem'		           
    			}}
    			className={styles.ul}
        		>
		          	{itemNode}
		          	<RollDots count={count} run={this.run} now={this.state.now} />
	          	</ul>
        	</div>
		)
	}

}


export default RollPic;