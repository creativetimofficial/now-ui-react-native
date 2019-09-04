import React from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import PropTypes from "prop-types";
import nowUITheme from "../constants/Theme";

class ProgressBar extends React.Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();
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
      row
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    })

    return(
      <View style={[{ flexDirection: "row", height }, row ? { flex: 1 } : undefined ]}>
        <View style={{ flex: 1, borderColor, borderWidth, borderRadius }} >
          <View
            style={[ StyleSheet.absoluteFill, { backgroundColor: fillColor } ]}
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
  };
}

ProgressBar.defaultProps = {
  height: 10,
  borderColor: "#000",
  borderWidth: 2,
  borderRadius: 4,
  barColor: "tomato",
  fillColor: "rgba(0,0,205,.5)",
  duration: 100
};
ProgressBar.propTypes = {
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
  ])
};

export default ProgressBar;
