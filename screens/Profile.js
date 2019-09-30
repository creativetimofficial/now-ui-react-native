import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { Button } from '../components';
import { Images, nowTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView showsVerticalScrollIndicator={false} style={{ width, marginTop: '25%' }}>
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image source={Images.ProfilePicture} style={styles.avatar} />
                </Block>
                <Block style={styles.info}>
                  <Block middle row space="evenly" style={{ marginTop: 20, paddingBottom: 24 }}>
                    <Button small style={{ backgroundColor: nowTheme.COLORS.INFO }}>
                      CONNECT
                    </Button>
                    <Button small style={{ backgroundColor: nowTheme.COLORS.DEFAULT }}>
                      MESSAGE
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                      >
                        2K
                      </Text>
                      <Text
                        style={{ fontFamily: 'montserrat-regular' }}
                        size={12}
                        color={nowTheme.COLORS.TEXT}
                      >
                        Friends
                      </Text>
                    </Block>
                    <Block middle>
                      <Text
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                      >
                        26
                      </Text>
                      <Text
                        style={{ fontFamily: 'montserrat-regular' }}
                        size={12}
                        color={nowTheme.COLORS.TEXT}
                      >
                        Friends
                      </Text>
                    </Block>
                    <Block middle>
                      <Text
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                      >
                        48
                      </Text>
                      <Text
                        style={{ fontFamily: 'montserrat-regular' }}
                        size={12}
                        color={nowTheme.COLORS.TEXT}
                      >
                        Bookmarks
                      </Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text style={{ fontFamily: 'montserrat-regular' }} size={28} color="#32325D">
                      Ryan Scheinder
                    </Text>
                    <Text
                      size={16}
                      muted
                      style={{ marginTop: 10, fontFamily: 'montserrat-regular' }}
                    >
                      Photographer
                    </Text>
                  </Block>

                  <Block middle>
                    <Text
                      style={{
                        color: '#333',
                        fontWeight: 'bold',
                        fontSize: 18,
                        fontFamily: 'montserrat-regular',
                        marginTop: 30,
                        marginBottom: 16
                      }}
                    >
                      About me
                    </Text>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: 'center', fontFamily: 'montserrat-regular' }}
                    >
                      An artist of considerable range, Ryan — the name taken by Melbourne-raised,
                      Brooklyn-based Nick Murphy — writes, performs and records all of his own
                      music.
                    </Text>
                  </Block>
                  <Block row style={{ paddingVertical: 14 }} space="between">
                    <Text bold size={16} color="#525F7F" style={{ marginTop: 3 }}>
                      Album
                    </Text>
                    <Button
                      small
                      color="transparent"
                      textStyle={{ color: nowTheme.COLORS.PRIMARY, fontSize: 14 }}
                    >
                      View all
                    </Button>
                  </Block>
                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    <Block row space="between" style={{ flexWrap: 'wrap' }}>
                      {Images.Viewed.map((img, imgIndex) => (
                        <Image
                          source={{ uri: img }}
                          key={`viewed-${img}`}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                      ))}
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block style={{ marginBottom: 25 }} />
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF'
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;
