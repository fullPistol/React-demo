import React from 'react';

import styles from './index.less';

const RollItem = ({ item }) => {


	return (

		<li className={styles.li}>
        	<a href="http://www.baidu.com" >
          		<img
          			className={styles.image}
            		src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}
            	/>
        	</a>
		</li>
	)

}

export default RollItem;