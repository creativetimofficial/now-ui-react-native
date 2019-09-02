import React from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import PropTypes from "prop-types";
import nowUITheme from "../constants/Theme";

class ProgressBar extends React.Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();
    }
  }
  convertHex(hex,alpha){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+',' + alpha/100+')';
    return result;
   }


  render() {
    const {
      height,
      borderWidth,
      borderRadius,
      barColor,
      fillColor,
      row,
      color
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    });
    const borderColor = color && nowUITheme.COLORS[color.toUpperCase()];

    return (
      <View
        style={[
          { flexDirection: "row", height },
          row ? { flex: 1 } : undefined
        ]}
      >
        <View style={{ flex: 1, borderColor, borderWidth, borderRadius }}>
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: this.convertHex(color, 20) }
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
  borderWidth: 2,
  borderRadius: 4,
  barColor: "red",
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
