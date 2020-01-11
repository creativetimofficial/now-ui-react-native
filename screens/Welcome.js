import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';

export default class Welcome extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block
        row
        middle
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <Block flex style={{ height: height, width: width }}>
          <ImageBackground
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block middle>
              <Block middle>
                <Image source={Images.CardLogo} style={{ width: 180, height: 146, zIndex: 100, bottom: 200, position: 'absolute' }}/>
              </Block>
              <Block
                middle
                style={{
                  marginTop: theme.SIZES.BASE * 2.5,
                  marginBottom: theme.SIZES.BASE * 2.5,
                  marginLeft: theme.SIZES.BASE,
                  marginRight: theme.SIZES.BASE,
                  backgroundColor: nowTheme.COLORS.WHITE,
                  borderRadius: 30,
                  height: '100%',
                  width: width-32,
                }}
              >
                <Text
                  h4
                  style={{ fontFamily: 'montserrat-bold', marginBottom: 15 }}
                  color={theme.COLORS.BLACK}
                >
                  CardWise
                </Text>
                <Text
                  style={{ fontFamily: 'montserrat-bold', fontSize: 12, marginBottom: 20 }}
                  color={theme.COLORS.BLACK}
                >
                  A step towards smart payment
                </Text>
                <Button
                  shadowless
                  radius={10}
                  style={styles.button}
                  color={nowTheme.COLORS.WELCOME_BUTTON}
                  onPress={() => navigation.navigate('AddCard')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                    Go to Home
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: nowTheme.COLORS.BACKGROUND,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0
    // marginTop: theme.SIZES.BASE * 2.5,
    // marginBottom: theme.SIZES.BASE * 2,
    // paddingHorizontal: theme.SIZES.BASE * 2,
    // zIndex: 3,
    // position: 'absolute',
    // bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3
  },
  padded: {
    // paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },

  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66
  }
});
