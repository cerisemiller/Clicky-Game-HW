import React from 'react';
import './CardItem.css';

const CardItem = props => (
    <img onClick = {() => props.sortImages(props.id, props.clicked)}
    id = {props.id}
    src = {props.src}
    className = "img"
    alt = "world city"
    data-clicked = {props.clicked}
    />
);

export default CardItem;