"use strict";

const e = React.createElement;

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
	}

	render() {
		return (<h1>Hello, World!! I am a React container!!</h1>);
	}
}

// Initialize React.
const domContainer = document.querySelector("#react_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(MainContainer));
