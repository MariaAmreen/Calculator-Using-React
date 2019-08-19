import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
	isOperator = val => {
		return !isNaN(val) || val === "." ||val === "=";
	};
	handleClick = val =>{
		this.props.handleClick(val);

	}
	render(){
		  return (
    <div className={`Button ${this.isOperator(this.props.children) ? "" : "operator"}`}
     onClick={() => this.handleClick(this.props.children)}
     >

  		{this.props.children}

    </div>
  );
	}

}

export default Button;