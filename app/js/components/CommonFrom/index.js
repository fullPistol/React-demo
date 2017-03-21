import React, { Component } from 'react';

class CommonFrom extends Component {

	state = {
		name:'',
		something:'',
	}

	handleName = (e) => {
		this.setState({
			name:e.target.value
		})
	}

	handleSome = (e) => {
		this.setState({
			something:e.target.value
		})
	}

	handleSubmit = (e) => {
		//阻止浏览器提交表单的默认行为
		e.preventDefault();
		var name = this.state.name.trim();
		var something = this.state.something.trim();
		
		if(!name || !something) {
			return;
		}
		this.props.onCommentSubmit({ name: name, something: something });
		this.setState({
			name:'',
			something:''
		})
	}

	render() {
		return (

			<form className="commentForm" onSubmit={this.handleSubmit}>
		        <input type="text" placeholder="Your name" value={this.state.name} onChange={this.handleName}/>
		        <input type="text" placeholder="Say something..." value={this.state.something} onChange={this.handleSome}/>
		        <input type="submit" value="Post" />
		    </form>
		)
	}

}

export default CommonFrom;