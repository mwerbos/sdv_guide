"use strict";

const e = React.createElement;

class CheckboxElement extends React.Component {
	constructor(props) {
		// this.localStoragePath (list of strings, at least 1 long)
		// this.bgColor (string), this.fgColor (string)
		// this.labelText (string)
		super(props);
    this.id = this.props.labelText.toLowerCase().replace(/\s/g, '');
		this.state = { checked: false };
		let fromStorage = getFromStorage(this.props.localStoragePath);
		if (!!fromStorage) {
			this.state.checked = fromStorage;
		}
		this.onChange = this.onChange.bind(this);
	}

	componentDidUpdate() {
		putInStorage(this.props.localStoragePath, this.state.checked);
	}

	onChange(event) {
		this.setState({ checked: event.target.checked });
	}

	render() {
		return (<li
			className="pretty-checkbox"
			style={{
				color: this.props.fgColor,
				backgroundColor: this.props.bgColor,
				borderColor: this.props.fgColor
			}}>
				<input type="checkbox"
					id={this.id}
					name={this.props.labelText}
					onChange={this.onChange}
					checked={this.state.checked}
				></input>
				<label htmlFor={this.id}>{this.props.labelText}</label>
		</li>);
	}
}

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
	}

	render() {
		return (<div>
			<h1>Hello, World!! I am a React container!!</h1>
			<CheckboxElement fgColor="#f00" bgColor="#000" labelText="Test Checkbox" localStoragePath={["Test Checkbox"]} />
		</div>);
	}
}

// Initialize React.
const domContainer = document.querySelector("#react_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(MainContainer));
