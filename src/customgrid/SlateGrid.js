import React from 'react';
import styled from 'styled-components';
import {Grid} from './Grid';
import {SlateSection} from './SlateSection';

class SlateGrid extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: [
                { id: 'id1', name: 'Astro Images', slate:'slateid' }
                , { id: 'id2', name: 'Astro Podcasts', slate: 'slateid1' }
            ]
        }
    }

    render() {
        let children = this.state.sections.map((t,i) => {
            return (
                <SlateSection isVerticalAlign={true} section={t} key={t.id} />
            )
        })
        return (
            <Grid children={children} isVerticalAlign={true} />
        )
    }

}

export default SlateGrid;