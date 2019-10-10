import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';

import { Button } from '../components';
import { Images, nowTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

const Profile = () => {
  return (
    <Block style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }} >
      <Block flex={0.6} >
        <ImageBackground
          source={Images.ProfileBackground}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
          <Block flex style={styles.profileCard}>
            <Block middle style={styles.avatarContainer}>
              <Image source={Images.ProfilePicture} style={styles.avatar} />
            </Block>
            <Block middle style={styles.nameInfo}>
              <Text style={{ fontFamily: 'montserrat-regular' }} size={24} color="white">
                Ryan Scheinder
              </Text>
              <Text
                size={16}
                color="white"
                style={{ marginTop: 10, fontFamily: 'montserrat-regular' }}
              >
                Photographer
              </Text>
            </Block>
            <Block style={styles.info}>
              <Block row space="between">
                <Block middle>
                  <Text
                    size={18}
                    color="white"
                    style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                  >
                    2K
                  </Text>
                  <Text style={{ fontFamily: 'montserrat-regular' }} size={12} color="white">
                    Friends
                  </Text>
                </Block>
                <Block middle>
                  <Text
                    color="white"
                    size={18}
                    style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                  >
                    26
                  </Text>
                  <Text style={{ fontFamily: 'montserrat-regular' }} size={12} color="white">
                    Comments
                  </Text>
                </Block>
                <Block middle>
                  <Text
                    color="white"
                    size={18}
                    style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                  >
                    48
                  </Text>
                  <Text style={{ fontFamily: 'montserrat-regular' }} size={12} color="white">
                    Bookmarks
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block
              middle
              row
              space="evenly"
              style={{ marginTop: 22, paddingBottom: 24, zIndex: 5 }}
            >
              <Button style={{ width: 114, height: 44, }} textStyle={{ fontSize: 16 }} round>
                Follow
              </Button>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="twitter"
                iconFamily="Font-Awesome"
                iconColor={nowTheme.COLORS.WHITE}
                iconSize={nowTheme.SIZES.BASE * 1.375}
                color={'#888888'}
                style={[styles.social, styles.shadow]}
              />
              <GaButton
                round
                onlyIcon
                shadowless
                icon="pinterest"
                iconFamily="Font-Awesome"
                iconColor={nowTheme.COLORS.WHITE}
                iconSize={nowTheme.SIZES.BASE * 1.375}
                color={'#888888'}
                style={[styles.social, styles.shadow]}
              />
            </Block>
          </Block>
        </ImageBackground>


      </Block>
      <Block flex={0.4} style={{ padding: theme.SIZES.BASE, }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex style={{ marginTop: 20 }}>
            <Block middle>
              <Text
                style={{
                  color: '#333',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'montserrat-regular',
                  marginTop: 15,
                  marginBottom: 16
                }}
              >
                About me
                  </Text>
              <Text
                size={16}
                muted
                style={{ textAlign: 'center', fontFamily: 'montserrat-regular' }}
              >
                An artist of considerable range, Ryan — the name taken by Melbourne-raised,
                Brooklyn-based Nick Murphy — writes, performs and records all of his own music.
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
        </ScrollView>
      </Block>
    </Block>

  )
}





const styles = StyleSheet.create({

  profileContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width,
    height: height * 0.6
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 135,
    zIndex: 2
  },
  info: {
    marginTop: 20,
    paddingHorizontal: 10
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
  },
  social: {
    width: nowTheme.SIZES.BASE * 3,
    height: nowTheme.SIZES.BASE * 3,
    borderRadius: nowTheme.SIZES.BASE * 1.5,
    justifyContent: 'center'
  }
});

export default Profile;
