import React from 'react';
import Grid from './Grid';
import styled from 'styled-components';
import { IconValue as Icon } from './styles';
import { alignJustify, chevronRight, plus, moreHorizontal } from "react-icons-kit/feather";

export const SlateSection = ({section, isVerticalAlign}) => {
    return (
        <div className={isVerticalAlign ? 'muuri-vertical' : null}>
            <SectionHeader dragHandlerClass="drag" title={section.name} />
            {/* <section> {section.slate} </section> */}
            <footer><SectionFooter /></footer>
        </div>
    )
}


const SectionHeader = ({dragHandlerClass, title}) => {
    return (
        <Header>
           <SectionItem><Icon className={dragHandlerClass} icon={alignJustify} /></SectionItem>
           <SectionItem><Icon icon={chevronRight} /></SectionItem>
           <SectionItem><span>{title}</span></SectionItem>
           <SectionItem><Icon icon={moreHorizontal} /></SectionItem> 
           <SectionItem><Icon icon={plus} /></SectionItem> 
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SectionItem = styled.div``;

const SectionFooter = () => {
    return (
        <Footer>
            <FooterItem><Icon icon={plus} /></FooterItem>
            <FooterItem><span>Add Section</span></FooterItem>
            <HorizantalDottedLine />
        </Footer>
    )
}

const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 35px;
`;

const FooterItem = styled.div``;

const HorizantalDottedLine = styled.hr`
    border-style: none none dashed;
    color: black;
    flex: 1;
    padding: 3px;
    margin: 10px;
`;