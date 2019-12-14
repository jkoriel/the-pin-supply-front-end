import React from "react";
import { connect } from "react-redux";
import PinListItem from "./PinListItem"


const PinList = props => {
    let listOfPins = props.pins.all.map(pin => (
        <PinListItem key={pin.id} pin={pin} />
    ));
    return (
        <div>{listOfPins}</div>
    );
};
const mapStateToProps = state => {
    return {
        pins: state.pins
    };
};

export default connect(mapStateToProps)(PinList);
