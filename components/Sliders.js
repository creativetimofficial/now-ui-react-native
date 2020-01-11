import React from "react";
import { StyleSheet, Slider } from "react-native";
import PropTypes from "prop-types";
import { Text, Block } from "galio-framework";

import nowUITheme from "../constants/Theme";

class NSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  }
  convertHexToRgb(hex, alpha){
    var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  render() {
    const { color, style, fontSize, children, source, ...props } = this.props;

    const colorStyle = color && nowUITheme.COLORS[color.toUpperCase()];

    const quoteStyle = [
      { color: colorStyle },
      styles.quote,
      { borderColor: colorStyle },
      { ...style }
    ];

    return (
      <Slider
        step={1}
        maximumValue={100}
        minimumTrackTintColor={this.convertHexToRgb(colorStyle, 0.2)}
        maximumTrackTintColor='#d3d3d3'
        thumbTintColor={colorStyle}
        value={50}
        // onValueChange={this.change.bind(this)}
      />
    );
  }
}

NSlider.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "error",
      "success",
      "warning"
    ])
  ]),
  source: PropTypes.string
};

const styles = StyleSheet.create({
  quote: {
    fontFamily: "montserrat-regular",
    fontSize: 20,
    borderWidth: 1,
    padding: 20
  }
});

export default NSlider;
