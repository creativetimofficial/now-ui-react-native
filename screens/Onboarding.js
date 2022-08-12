import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';
import * as Notifications from 'expo-notifications';
import { Input } from '../components';
import axios from 'axios';

const postNotification = async () => {

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "50% OFF Infused Joints! 📬",
      body: 'You gotta check these amazing deals!',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });

}




export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <ImageBackground
            source={Images.Onboarding}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block>
              {/* <Block middle>
                <Image source={Images.NowLogo} style={{ width: 115, height: 124, bottom: 200, position: 'absolute' }} />
              </Block> */}
              <Block>
                <Block middle>
                  <Text
                    style={{
                      fontFamily: 'montserrat-regular', 
                      bottom: 50, 
                      position: 'absolute', 
                      letterSpacing: 2, 
                      paddingHorizontal: 20, 
                      textAlign: 'center'
                    }}
                    color="white"
                    size={44}
                  >                    
                    WON
                    DER
                    LAND
                  </Text>
                </Block>
              </Block>
              <Block middle row>
                {/* <Text
                  color="white"
                  size={16}
                  style={{ fontFamily: 'montserrat-regular' }}
                >
                  Designed by
                </Text> */}
                {/* <Image
                  source={Images.InvisionLogo}
                  style={{
                    height: 28,
                    width: 91,
                    marginLeft: theme.SIZES.BASE
                  }}
                /> */}
              </Block>
              <Block middle row style={{ marginTop: 15, marginBottom: 30}}>
                <Text
                  color="white"
                  size={16}
                  style={{ fontFamily: 'montserrat-regular' }}
                >
                {/* HUY App               */}
                </Text>
                {/* <Image
                  source={Images.CreativeTimLogo}
                  style={{
                    height: 29,
                    width: 129,
                    marginLeft: theme.SIZES.BASE
                  }}
                /> */}

              </Block>
              
              <Block>
              <Text
                  style={{
                    fontFamily: 'montserrat-bold', 
                    fontSize:8 ,
                    position: 'absolute', 
                    textAlign: 'center'
                  }}
                  color="white"
                >
                  By continuing you agree                 
                  to our privacy policy 
                  and terms of use
                </Text>
              </Block>

              <Block
                row
                style={{
                  marginTop: theme.SIZES.BASE * 2,
                  marginBottom: theme.SIZES.BASE * 2
                }}
              >
                
                <Button
                  shadowless
                  color={nowTheme.COLORS.PRIMARY}
                  style={styles.button}
                  onPress={() => postNotification()}
                >
                  <Text
                      style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                      color={theme.COLORS.WHITE}
                    >
                      I AGREE
                    </Text>
                </Button>
                 
              </Block>

              <Block style={{
                  marginTop: theme.SIZES.BASE * 2,
                  marginBottom: theme.SIZES.BASE * 2
                }}>
              <Input
                right
                placeholder="Amazing Deals"
                iconContent={<Block />}
                shadowless
                onChangeText={newText => this.setState({msg: newText})}
              />
                  <Button
                  shadowless
                  color={nowTheme.COLORS.PRIMARY}
                  style={styles.button}
                  onPress={() => postNotification()}
                >
                  <Text
                      style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                      color={theme.COLORS.WHITE}
                    >
                      Broadcast
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
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
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
