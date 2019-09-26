import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Text, Block } from "galio-framework";

import nowUITheme from "../constants/Theme";

class Blockquote extends React.Component {
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
      <Block  style={quoteStyle}>
        <Text
          color={colorStyle}
          textStyle={{ fontSize: fontSize || 12, fontWeight: "700" }}
          {...props}
        >
          {children}
        </Text>
        <Block style={{marginVertical : 10}}>
            <Text color={colorStyle}> - {source}</Text>
        </Block>
      </Block>
    );
  }
}

Blockquote.propTypes = {
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

export default Blockquote;
