import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ModalDropdown from 'react-native-modal-dropdown';
import { Block, Text } from 'galio-framework';

import Icon from './Icon';
import { nowTheme } from '../constants';

class DropDown extends React.Component {
  state = {
    value: "Please select"
  };

  handleOnSelect = (index, value) => {
    const { onSelect } = this.props;

    this.setState({ value: value });
    onSelect && onSelect(index, value);
  };

  render() {
    const {
      onSelect,
      iconName,
      iconFamily,
      iconSize,
      iconColor,
      color,
      textStyle,
      style,
      ...props
    } = this.props;

    const modalStyles = [styles.qty, color && { backgroundColor: color }, style];

    const textStyles = [styles.text, textStyle];

    return (
      <ModalDropdown
        style={modalStyles}
        onSelect={this.handleOnSelect}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={{ paddingLeft: 16, fontSize: 12 }}
        {...props}
      >
        <Block flex row middle space="between">
          <Text size={12} style={textStyles}>
            {this.state.value}
          </Text>
          <Icon
            name={iconName || 'minimal-down2x'}
            family={iconFamily || 'NowExtra'}
            size={iconSize || 10}
            color={iconColor || nowTheme.COLORS.WHITE}
          />
        </Block>
      </ModalDropdown>
    );
  }
}

DropDown.propTypes = {
  onSelect: PropTypes.func,
  iconName: PropTypes.string,
  iconFamily: PropTypes.string,
  iconSize: PropTypes.number,
  color: PropTypes.string,
  textStyle: PropTypes.any
};

const styles = StyleSheet.create({
  qty: {
    width: 200,
    backgroundColor: nowTheme.COLORS.DEFAULT,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 9.5,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  text: {
    color: nowTheme.COLORS.WHITE,
    fontWeight: '600'
  },
  dropdown: {
    marginTop: 8,
    marginLeft: -16,
    width: 200
  }
});

export default DropDown;
