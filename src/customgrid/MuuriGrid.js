import React from 'react';
import { MuuriComponent, useDrag, useDraggable } from 'muuri-react';

class MuuriGrid extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [{ "key": "key1", "value": "value1" }
                , { "key": "key2", "value": "value2" }
                , { "key": "key3", "value": "ble it and... that's it 🤯! The Items are the components that can be dragged, the MuuriComponent represents the container in which the Items can be dropped." }
            ]
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        var items_add = [{ "key": "key4", "value": "value1" }
            , { "key": "key5", "value": "value2" }
            , { "key": "key6", "value": "ble it and... that's it 🤯! The Items are the components that can be dragged, the MuuriComponent represents the container in which the Items can be dropped." }
        ];

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
            <section>
                <MuuriComponent dragEnabled
                    dragPlaceholder={{
                        enabled: true,
                        createElement: function (item) {
                            return item.getElement().cloneNode(true);
                        },
                    }}>
                    {/* <Grid children={children} key="ch1" /> */}
                    {children}
                </MuuriComponent>
                <footer>
                    <button onClick={this.addItem}> Add Item </button>
                </footer>
            </section>
        )
    }

}

const Grid = ({ children }) => {
    return (
        <div className="muuri-vertical ">
            <div className="drag"> header </div>
            <MuuriComponent dragEnabled>
                {children}
            </MuuriComponent>
            <div> Add New Section </div>
        </div>
    )

}

const Item = ({ value }) => {
    return (
        <div className="muuri-item muuri-item-shown">
            <header className="drag"> header</header>
            <section className="item-content">
                {value}
            </section>
            <footer></footer>
        </div>
    )
}

export default MuuriGrid;