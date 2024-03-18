"use strict";

const e = React.createElement;

function makeId(labelText) {
  return labelText.toLowerCase().replace(/\s/g, "");
}

const defaultFgColor = "#846ad5";
const defaultBgColor = "#f4daff";
const checkedFgColor = "#bbb";
const checkedBgColor = "#f5f5f5";

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
      ? {
          color: checkedFgColor,
          backgroundColor: checkedBgColor,
          borderColor: checkedFgColor,
        }
      : {
          color: this.props.fgColor || defaultFgColor,
          backgroundColor: this.props.bgColor || defaultBgColor,
          borderColor: this.props.fgColor || defaultFgColor,
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

class HeadingedRecursiveCheckboxyThing extends React.Component {
  // TODO: store collapsed states in localStorage.
  // TODO: make collapsed groups still exist so that sub-collapse is
  // preserved over super-collapse.
  constructor(props) {
    // heading, items, topLevelStoragePath, fgColor, bgColor
    super(props);
    // TODO: move headerIsChecked into this component so it can
    // access it to determine color of collapse button??? ughhhh.
    this.state = { collapsed: false };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed(event) {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    let headingId = makeId(this.props.heading);
    let storagePath = this.props.topLevelStoragePath.concat([headingId]);
    let collapseIcon = this.state.collapsed ? "►" : "▼";
    let displayedItems = this.state.collapsed ? (
      ""
    ) : (
      <RecursiveCheckboxContainer
        container={this.props.items}
        localStoragePath={storagePath}
        fgColor={this.props.fgColor}
        bgColor={this.props.bgColor}
      />
    );
    let headerStoragePath = storagePath.concat(["checked"]);
    let isChecked = getFromStorage(headerStoragePath);
    return (
      <div className="recursive-div">
        <button onClick={this.toggleCollapsed} className="collapse-button">
          {collapseIcon}
        </button>
        <CheckboxElement
          isHeader={true}
          labelText={this.props.heading}
          localStoragePath={headerStoragePath}
          fgColor={this.props.fgColor}
          bgColor={this.props.bgColor}
        />
        {displayedItems}
      </div>
    );
  }
}

class RecursiveCheckboxContainer extends React.Component {
  constructor(props) {
    // this.props.container
    // this.props.localStoragePath
    // this.props.fgColor, this.props.bgColor
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
            return (
              <HeadingedRecursiveCheckboxyThing
                heading={item.heading}
                items={item.items}
                topLevelStoragePath={topLevelStoragePath}
                fgColor={item.fgColor}
                bgColor={item.bgColor}
              />
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
        <h1 id="header">Stardew Valley Progress Tracker</h1>
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
