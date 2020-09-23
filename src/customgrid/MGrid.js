import React from "react";
import { MuuriComponent, useDrag, useDraggable } from "muuri-react";

export class MGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { key: "key1", value: "value1" },
        { key: "key2", value: "value2" },
        {
          key: "key3",
          value:
            "ble it and... that's it 🤯! The Items are the components that can be dragged, the MuuriComponent represents the container in which the Items can be dropped."
        }
      ],
      uuid: 3
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    let items_add = [];
    for (let i = 0; i < 3; i++) {
      let uuid = this.state.uuid;
      uuid = uuid + 1;
      this.setState({ uuid });
      items_add.push({
        key: "key" + uuid,
        value: "value" + uuid
      });
    }
    debugger;
    let items = this.state.items;
    items = items.concat(items_add);
    this.setState({ items });
  }

  render() {
    let children = [];
    children = this.state.items.map(({ key, value }) => (
      <Item value={value} key={key} />
    ));
    return (
      <div>
        <MuuriComponent
          dragEnabled
          dragPlaceholder={{
            enabled: true,
            createElement: function (item) {
              return item.getElement().cloneNode(true);
            }
          }}
        >
          {/* <Grid children={children} key="ch1" /> */}
          {children}
        </MuuriComponent>
        <footer>
          <button onClick={this.addItem}> Add Item </button>
        </footer>
      </div>
    );
  }
}

const Grid = ({ children }) => {
  return (
    <div className="muuri-vertical ">
      <div className="drag"> header </div>
      <MuuriComponent dragEnabled>{children}</MuuriComponent>
      <div> Add New Section </div>
    </div>
  );
};

const Item = ({ key, value }) => {
  return (
    <div>
      <header className="drag"> header</header>
      <section>{value}</section>
      <footer></footer>
    </div>
  );
};
