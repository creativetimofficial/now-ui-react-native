import React from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import PropTypes from "prop-types";
import nowUITheme from "../constants/Theme";

export default class ProgressBar extends React.Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {

      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();

  }
  convertHexToRgb(color, alpha) {
    color = color.toString();
    if (color.substring(0, 1) == "#") {
      color = color.substring(1);
    }

    var rgbColor = {};

    rgbColor.rChannel = parseInt(color.substring(0, 2), 16);
    rgbColor.gChannel = parseInt(color.substring(2, 4), 16);
    rgbColor.bChannel = parseInt(color.substring(4), 16);

    if (alpha) {
      return (
        "rgba(" +
        rgbColor.rChannel +
        ", " +
        rgbColor.gChannel +
        ", " +
        rgbColor.bChannel +
        ", " +
        alpha +
        ")"
      );
    } else {
      return (
        "rgb(" +
        rgbColor.rChannel +
        ", " +
        rgbColor.gChannel +
        ", " +
        rgbColor.bChannel +
        ")"
      );
    }
  }

  render() {
    const {
      height,
      borderColor,
      borderWidth,
      borderRadius,
      barColor,
      fillColor,
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    });

    return (
      <View
        style={[
          { flexDirection: "row", height, flex: 1  }
        ]}
      >
        <View style={{ flex: 1, borderColor, borderWidth, borderRadius }}>
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: this.convertHexToRgb(fillColor, 0.2) }
            ]}
          />
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: widthInterpolated,
              backgroundColor: barColor
            }}
          />
        </View>
      </View>
    );
  }
}

ProgressBar.defaultProps = {
  height: 10,
  // borderColor: nowUITheme.COLORS.PRIMARY,
  borderWidth: 2,
  borderRadius: 4,
  // barColor: nowUITheme.COLORS.PRIMARY,
  // fillColor: nowUITheme.COLORS.PRIMARY,
  duration: 100
};

ProgressBar.propTypes = {
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
