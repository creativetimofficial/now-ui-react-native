import React from 'react';
import { Switch, Platform } from 'react-native';

import nowTheme from '../constants/Theme';

class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;
    const thumbColor = Platform.OS === 'ios' ? null :
      Platform.OS === 'android' && value ? nowTheme.COLORS.SWITCH_ON : nowTheme.COLORS.SWITCH_OFF;

    return (
      <Switch
        value={value}
        thumbColor={'#7ab8e1'}
        //thumbColor={thumbColor}
        ios_backgroundColor={nowTheme.COLORS.SWITCH_OFF}
        trackColor={{ false: "#E3E3E3", true: nowTheme.COLORS.SWITCH_ON }}
        {...props}
      />
    );
  }
}

export default MkSwitch;