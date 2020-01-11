import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'galio-framework'

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked : props.checked || false
    };
  }

  _onPress(_id) {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { iconColor, textStyle, label, id, } = this.props;
    const isChecked =  this.state.checked;
    return (
       <TouchableWithoutFeedback
        key={id}
        onPress={() => {
          this._onPress(id);
        }}
      >
        <View
          style={styles.checkboxContainer}
        >
          <Icon
            name={isChecked ? 'md-checkbox' : 'ios-square-outline'}
            size={20}
            color={iconColor}
          />
          <View
            style={{ marginLeft: 5 }}
          >
            <Text style={{...textStyle}}>{'' + label}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  iconColor: PropTypes.string,
  checked: PropTypes.bool,
  onChecked: PropTypes.func,
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection:  'row' ,
    alignItems: 'center'
  },
});
