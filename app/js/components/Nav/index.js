import React from 'react';
import { NavBar } from 'antd-mobile';

import styles from './index.less'

const Nav = () => {
	return (
		<div>
		    <NavBar
		    	className={styles.nav} 
		    	leftContent={<i className={styles.i}></i>} 
		    	mode="light" 
		    	rightContent="放大镜"
		    >

		    <span className={styles.font}>广东省商务厅</span>

		    </NavBar>
	  	</div>
	)
}
 
export default Nav 