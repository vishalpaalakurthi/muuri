import React, { useState } from "react";
import { MuuriComponent, useDrag, useDraggable } from "muuri-react";

export class MGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                { id: "id1", value: "value1" }
            ]
        };

        this.addSection = this.addSection.bind(this);
    }

    addSection() {
        var sections = this.state.sections;
        sections.push({ id: "id1", value: "value1" });
        this.setState({sections});
    }

    render() {
        let children = [];
        children = this.state.sections.map(({index }) => (
            <Grid key={index} addSection={this.addSection} />
        ));
        return (
            <div>
                <MuuriComponent
                    dragEnabled
                    dragHandle=".drag"
                    dragPlaceholder={{
                        enabled: true,
                        createElement: function (item) {
                            return item.getElement().cloneNode(true);
                        }
                    }}
                >
                    {children}
                </MuuriComponent>
                <footer>
                </footer>
            </div>
        );
    }
}

const Grid = ({addSection}) => {

    const [lastIndex, setLastIndex] = useState(0);
    const [items, setItems] = useState(generateItems(lastIndex));
    let children = [];
    children = items.map(({ id, value, index }) => (
        <Item value={value} id={id} key={index} />
    ));

    return (
        <div className="muuri-vertical ">
            <div className="drag"> header </div>
            <MuuriComponent dragEnabled>
                {children}
            </MuuriComponent>
            <footer>
                <button onClick={() => {
                    setLastIndex(lastIndex + 3);
                    setItems(items.concat(generateItems(lastIndex)))
                }}> Add Item </button>
                <button onClick={addSection}> Add Section </button>
            </footer>
        </div>
    );
};

const Item = ({ id, value }) => {
    return (
        <div>
            <header className="drag"> header</header>
            <section>{value}</section>
            <footer></footer>
        </div>
    );
};

const generateItems = (lastIndex) => {
    let items_add = [];
    lastIndex = lastIndex + 1;
    for (let i = 1; i <= 3; i++) {
        items_add.push({
            id: "id" + lastIndex,
            value: "value" + lastIndex
        });
        lastIndex = lastIndex + 1;
    }
    return items_add;
}
