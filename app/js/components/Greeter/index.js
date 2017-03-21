import React, {Component} from 'react';
import { Button } from 'antd-mobile'


class Greeter extends Component {

	render() {
	
	   	return (
	      <div>
	        <Button className="btn" type="primary">primary 按钮</Button>
	        { this.props.data.map((i, r) => 
	        	<div key={r}>
	        	<p>{i.name}</p>
	        	<p>{i.sex}</p>
	        	</div>
	        ) }

	      </div>
	    )
	}
}

export default Greeter