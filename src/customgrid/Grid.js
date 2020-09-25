import React from 'react';
import styled from 'styled-components';
import { MuuriComponent } from "muuri-react";

export const Grid = ({ children, isVerticalAlign }) => {
    return (
        <MuuriComponent
            dragEnabled
            dragHandle=".drag"
            dragAxis={isVerticalAlign? 'y' : null}
            dragPlaceholder={{
                enabled: true,
                createElement: function (item) {
                    return item.getElement().cloneNode(true);
                }
            }}>
            {children}
        </MuuriComponent>
    )
}