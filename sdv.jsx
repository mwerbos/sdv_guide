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

class RecursiveCheckboxContainer extends React.Component {
	constructor(props) {
		// this.props.container
		// this.props.localStoragePath
		super(props);
		console.log('Creating recursive checkbox container');
		console.log(this.props.container);
		console.log(this.props.container);
	}

	render() {
		const topLevelStoragePath = this.props.localStoragePath;
		let ulClassName = this.props.topLevel ? "checkbox-ul-toplevel" : "checkbox-ul";
		return (<ul className={ulClassName}>
			{this.props.container.map((item) => {
				if (typeof item === 'string') {
					// TODO: refactor so we don't repeat this inside CheckboxElement.
					let storagePath = topLevelStoragePath.concat([item.toLowerCase().replace(/\s/g, '')]);
					return <CheckboxElement labelText={item} localStoragePath={storagePath} fgColor={this.props.fgColor} bgColor={this.props.bgColor} />;
				} else if (typeof item === 'object') {
					// TODO: refactor so we don't repeat this inside CheckboxElement.
					let headingId = item.heading.toLowerCase().replace(/\s/g, '');
					let storagePath = topLevelStoragePath.concat([headingId]);
					return (<div className="recursive-div">
						<CheckboxElement labelText={item.heading} localStoragePath={storagePath} fgColor={item.fgColor} bgColor={item.bgColor} />
						<RecursiveCheckboxContainer container={item.items} localStoragePath={storagePath} fgColor={item.fgColor} bgColor={item.bgColor} />
					</div>);
				} else {
					console.log('WHOOPS');
				}
			})}
		</ul>);
	}
}

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
	}

	render() {
		return (<div id="checkbox-wrapper">
			<RecursiveCheckboxContainer topLevel={true} container={bundles} localStoragePath={[]} />
		</div>);
	}
}

// Initialize React.
const domContainer = document.querySelector("#react_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(MainContainer));
