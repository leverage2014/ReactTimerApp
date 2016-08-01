var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
	getInitialState: function(){
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState){
		if(this.state.countdownStatus !== prevState.countdownStatus){
			switch(this.state.countdownStatus){
				case 'started':
					this.startTimer(); 
					break;
			}
		}
	},
	startTimer: function(){
		// var that = this;
		// that.timer = setInterval(function(){
		// 	console.log('come here');
		// 	var newCount = that.state.count - 1;
		// 	that.setState({
		// 		count: newCount>=0? newCount:0
		// 	});
		// }, 1000);

		this.timer = setInterval(()=>{
		    var newCount = this.state.count - 1;
			this.setState({
				count: newCount>=0? newCount:0
			});
		}, 1000);
	},
	handleSetCountdown: function(seconds){
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},
	render: function(){
		var {count} = this.state;

		return (
			<div>
				<h1 className='text-center'>Countdown</h1>
				<Clock totalSeconds={count}></Clock>
			    <CountdownForm onSetCountdown = { this.handleSetCountdown }></CountdownForm>
			</div>
		);
	}
});

module.exports = Countdown;