import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

import nowTheme from "../constants/Theme";

class Label extends React.Component {
  render() {
    const { children, color, style, fontSize, ...props } = this.props;

    const colorStyle = color && nowTheme.COLORS[color.toUpperCase()];
    const labelStyles = [
      { backgroundColor: colorStyle, borderColor: colorStyle },
      styles.label
    ];
    return (
      <View style={labelStyles}>
        <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={styles.labelText}>
          {children}
        </Text>
      </View>
    );
  }
}

Label.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "default",
      "primary",
      "secondary",
      "info",
      "error",
      "success",
      "warning",
      "neutral"
    ])
  ])
};

const styles = StyleSheet.create({
  label: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 40,
    margin: 3,
    padding: 6,
    width: 60
  },
  labelText: {
    color: nowTheme.COLORS.WHITE,
    textAlignVertical: "center",
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default Label;
