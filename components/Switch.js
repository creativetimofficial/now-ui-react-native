import React from "react";
import { Switch, Platform } from "react-native";

import nowTheme from "../constants/Theme";

class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;
    const thumbColor =
      Platform.OS === "ios"
        ? nowTheme.COLORS.PRIMARY
        : Platform.OS === "android" && value
        ? nowTheme.COLORS.SWITCH_ON
        : nowTheme.COLORS.SWITCH_OFF;

    return (
      <Switch
        value={value}
        thumbColor={[
          value === true
            ? nowTheme.COLORS.SWITCH_ON
            :'#ffffff'
        ]}
        ios_backgroundColor={"#D8D8D8"}
        trackColor={{
          true: "#d3d3d3",
          false: Platform.OS == "ios" ? "#d3d3d3" : "#333"
        }}
        {...props}
      />
    );
  }
}

export default MkSwitch;
