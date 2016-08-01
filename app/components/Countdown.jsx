var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
	render: function(){
		return (
			<div>
				<Clock totalSeconds={63}></Clock>
			    <p>Coutdown.jsx</p>
			</div>
		);
	}
});

module.exports = Countdown;