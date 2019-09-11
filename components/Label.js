import React from "react";
import { StyleSheet, View,  } from "react-native";
import { Text } from "galio-framework";
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
    const labelTextStyle=[
      {color : (color) === 'neutral' ? nowTheme.COLORS.BLACK : nowTheme.COLORS.WHITE},
      styles.labelText
    ]
    return (
      <View style={labelStyles}>
        <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={labelTextStyle}>
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
    borderRadius: 14,
    height: 40,
    margin: 3,
    padding: 6,
    width: 60
  },
  labelText: {
    textAlignVertical: "center",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});

export default Label;
