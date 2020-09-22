import React from 'react';
import { MuuriComponent, useDrag, useDraggable } from 'muuri-react';

class MuuriGrid extends React.Component {

    constructor() {
        super();
    }

    render() {
        const children = this.props.items ? this.props.items.map((props, index) => {
            return <Item {...props} key={index} />
        }) : [];
        return (
            <div>
                <MuuriComponent dragEnabled dragHandle=".drag">
                    <Grid children={children} key="ch1" />
                    <Grid children={children} key="ch2" />
                    <Grid children={children} key="ch3" />
                </MuuriComponent>
            </div>
        )
    }

}

const Grid = ({ children }) => {
    return (
        <div className="muuri-vertical">
            <div className="drag"> header </div>
            <MuuriComponent dragEnabled>
                {children}
            </MuuriComponent>
            <div> Add New Section </div>
        </div>
    )

}

const Item = (props) => {
    return (
        <div className="item">
            <div className="item-header drag"> header</div>
            <div className="item-content">
                {props.value}
            </div>
            <div className="item-footer"></div>
        </div>
    )
}

export default MuuriGrid;