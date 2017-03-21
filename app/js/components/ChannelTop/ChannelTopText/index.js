import React, { Component } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';

import styles from './index.less'

class ChannelTopText extends Component {

	render() {

		const { title } = this.props;

		return (
				<div className={styles.toptext + ' clearfix'}>
					{
						title.map((item, index) => 
							<p key={index} className={styles.ptext}>{item}</p>
						)
					}
			    </div>	
		)
	}

}


export default ChannelTopText;