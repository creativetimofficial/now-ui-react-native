import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class RadioButton extends React.Component {
  state = {
    value: null
  };
  renderDisabled() {
    return <View style={styles.disabled}></View>;
  }
  renderEnabled(id) {
    const { value } = this.state;
    return (
      <TouchableOpacity
        style={styles.circle}
        onPress={() => this.setState({ value: id })}
      >
        {value === id && <View style={styles.checkedCircle} />}
      </TouchableOpacity>
    );
  }
  render() {
    const { text, style, disabled, id, ...props } = this.props;


    return (
      <View style={styles.buttonContainer}>
        <Text style={disabled === true ? styles.disabledText : ""}>{text}</Text>
        {disabled === true ? (
          this.renderDisabled(id)
        ) : (
         this.renderEnabled()
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
    // backgroundColor: "#d3d3d3"
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center"
  },

  checkedCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#333"
  },
  disabled: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3"
  },
  disabledText: {
    color: "grey"
  }
});
