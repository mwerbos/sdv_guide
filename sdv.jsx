"use strict";

const e = React.createElement;

function makeId(labelText) {
  return labelText.toLowerCase().replace(/\s/g, "");
}

class CheckboxElement extends React.Component {
  constructor(props) {
    // props:
    // localStoragePath (list of strings, at least 1 long)
    // bgColor (string), fgColor (string)
    // labelText (string)
    // isHeader (bool)
    super(props);
    this.id = makeId(this.props.labelText);
    this.state = { checked: false };
    let fromStorage = getFromStorage(this.props.localStoragePath);
    if (fromStorage === true) {
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
    let labelStyle = this.state.checked
      ? {}
      : {
          color: this.props.fgColor,
          backgroundColor: this.props.bgColor,
          borderColor: this.props.fgColor,
        };
    let labelClass = this.props.isHeader
      ? "pretty-label pretty-label-header"
      : "pretty-label";
    return (
      <li className="pretty-li">
        <label htmlFor={this.id} style={labelStyle} className={labelClass}>
          <input
            type="checkbox"
            id={this.id}
            name={this.props.labelText}
            onChange={this.onChange}
            checked={this.state.checked}
            className="pretty-checkbox"
          ></input>
          <span className="pretty-label-span">{this.props.labelText}</span>
        </label>
      </li>
    );
  }
}

class RecursiveCheckboxContainer extends React.Component {
  constructor(props) {
    // this.props.container
    // this.props.localStoragePath
    // this.fgColor, this.bgColor
    super(props);
  }

  render() {
    const topLevelStoragePath = this.props.localStoragePath;
    let ulClassName = this.props.topLevel
      ? "checkbox-ul-toplevel"
      : "checkbox-ul";
    return (
      <ul className={ulClassName}>
        {this.props.container.map((item) => {
          if (typeof item === "string") {
            let storagePath = topLevelStoragePath.concat([
              makeId(item),
              "checked",
            ]);
            return (
              <CheckboxElement
                isHeader={false}
                labelText={item}
                localStoragePath={storagePath}
                fgColor={this.props.fgColor}
                bgColor={this.props.bgColor}
              />
            );
          } else if (typeof item === "object") {
            let headingId = makeId(item.heading);
            let storagePath = topLevelStoragePath.concat([headingId]);
            return (
              <div className="recursive-div">
                <CheckboxElement
                  isHeader={true}
                  labelText={item.heading}
                  localStoragePath={storagePath.concat(["checked"])}
                  fgColor={item.fgColor}
                  bgColor={item.bgColor}
                />
                <RecursiveCheckboxContainer
                  container={item.items}
                  localStoragePath={storagePath}
                  fgColor={item.fgColor}
                  bgColor={item.bgColor}
                />
              </div>
            );
          } else {
            console.log("WHOOPS");
          }
        })}
      </ul>
    );
  }
}

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="checkbox-wrapper">
        <RecursiveCheckboxContainer
          topLevel={true}
          container={bundles}
          localStoragePath={[]}
        />
      </div>
    );
  }
}

// Initialize React.
const domContainer = document.querySelector("#react_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(MainContainer));
