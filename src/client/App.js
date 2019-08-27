import React, { Component } from 'react';
import './app.css';
import MenuBar from './MenuBar';
import Rainbow from './Rainbow';
export default class App extends Component {
	componentDidMount() {
	}
	render() {
		let style = {
			position:'absolute',
			top:0 + 'px',
			left:0 + 'px',
			zIndex:0
		}
		return (
			<div>
				<Rainbow height = {innerHeight} width={innerWidth} style={style} rowSize={5} colSize={5} />	
			</div>
		);
	}
}
