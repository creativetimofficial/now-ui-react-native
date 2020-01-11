import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';

export default class RewardGain extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block middle>
        <Block space="between" style={styles.circle_container}>
          <Block middle>
            <Text h4 style={{ fontFamily: 'montserrat-bold', marginTop: 70, fontSize: 28, fontWeight: 'bold' }}
                  color={theme.COLORS.BLACK}>
              500
            </Text>
            <Text h4 style={{
              fontFamily: 'montserrat-bold', fontSize: 28,
              fontWeight: 'bold'
            }} color={theme.COLORS.BLACK}>
              Asian Miles
            </Text>
          </Block>
        </Block>
        <Block space="between" style={styles.circle_container2}>
          <Block middle>
            <Text h4
                  style={{ fontFamily: 'montserrat-bold', marginTop: 70, fontSize: 28, fontWeight: 'bold' }}
                  color={theme.COLORS.BLACK}>
              HKD 500
            </Text>
            <Text h4 style={{
              fontFamily: 'montserrat-bold',
              fontSize: 28,
              fontWeight: 'bold'
            }} color={theme.COLORS.BLACK}>
              Cash Reward
            </Text>
          </Block>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  circle_container: {
    marginTop: 40,
    top: 100,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderColor: '#00ACEE',
    borderWidth: 20
  },
  circle_container2: {
    marginTop: 40,
    top: 100,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderColor: '#0E76A8',
    borderWidth: 20
  },
  container: {
    backgroundColor: nowTheme.COLORS.BACKGROUND, marginTop: Platform.OS === 'android' ? -HeaderHeight : 0
// marginTop: theme.SIZES.BASE * 2.5, // marginBottom: theme.SIZES.BASE * 2, // paddingHorizontal: theme.SIZES.BASE * 2,
// zIndex: 3, // position: 'absolute', // bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3 },
// padded: { // paddingHorizontal: theme.SIZES.BASE * 2, zIndex: 3, position: 'absolute', bottom: Platform.OS === 'android' ?
// theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3 }, button: { width: width - theme.SIZES.BASE * 4, height: theme.SIZES.BASE * 3,
// shadowRadius: 0, shadowOpacity: 0 }, gradient: { zIndex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, height: 66
  }
});