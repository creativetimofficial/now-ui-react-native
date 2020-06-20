import React from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from 'galio-framework';

import nowConfig from '../assets/config/now.json';
const NowExtra = require('../assets/font/now.ttf');
const IconNowExtra = createIconSetFromIcoMoon(nowConfig, 'NowExtra');

class IconExtra extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({ NowExtra: NowExtra });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, family, ...rest } = this.props;

    if (name && family && this.state.fontLoaded) {
      if (family === 'NowExtra') {
        return <IconNowExtra name={name} family={family} {...rest} />;
      }
      return <Icon name={name} family={family} {...rest} />;
    }

    return null;
  }
}

export default IconExtra;
