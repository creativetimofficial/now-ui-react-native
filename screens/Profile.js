import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View, FlatList } from 'react-native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';
import { tabs } from '../constants';
import Button from '../components/Button';
import Tabs from '../components/Tabs';
import { Images, nowTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
import articles from '../constants/articles';
import Header from '../components/Header';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;



class Profile extends React.Component {


  renderTabs = () => {
    return (
      <Tabs
        data={[
          { id: 'popular', title: 'Date' },
          { id: 'beauty', title: 'Type' },
          { id: 'fashion', title: 'Amount' },
          { id: 'freqency', title: 'freq' },
        ]}
        initialIndex={0}
      />
    );
  };

  render() {
    return (
      <Block style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <Block flex={0.6}>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <Block flex style={styles.profileCard}>
              <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
                <Block middle style={{ top: height * 0.15 }}>
                  <Image source={articles[0].image} style={styles.avatar}/>

                </Block>
                  <Block middle>
                    <Text
                      size={16}
                      color="white"
                      style={{
                        marginTop: 100,
                        fontFamily: 'montserrat-bold',
                        lineHeight: 20,
                        fontWeight: 'bold',
                        fontSize: 18,
                        opacity: .8
                      }}
                    >
                      HSBC Advance
                    </Text>
                  </Block>
                  <Block style={styles.info}>
                    <Block row space="around">

                      <Block middle>
                        <Text
                          size={18}
                          color="white"
                          style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                        >
                          2K
                        </Text>
                        <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="white">
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
                        <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="white">
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
                        <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="white">
                          Bookmarks
                        </Text>
                      </Block>

                    </Block>
                  </Block>

              </Block>


              <Block
                middle
                row
                style={{ position: 'absolute', width: width, top: height * 0.6 - 22, zIndex: 99 }}
              >
                <Button style={{ width: 300 , height: 44, marginHorizontal: 5, elevation: 0 }}
                        textStyle={{ fontSize: 16 }}

                        round>
                  Transaction History
                </Button>


              </Block>
            </Block>
          </ImageBackground>


        </Block>
        <Block/>
        <Block flex={0.4} style={{ padding: theme.SIZES.BASE, marginTop: 90 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block flex style={{ marginTop: 20 }}>
                <Block style={{ marginBottom: theme.SIZES.BASE }}>
                </Block>

                <View style={styles.container}>
                  <FlatList
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    data={[
                      {key: 'Devin'},
                      {key: 'Dan'},
                      {key: 'Dominic'},
                      {key: 'Jackson'},
                      {key: 'James'},
                      {key: 'Joel'},
                      {key: 'John'},
                      {key: 'Jillian'},
                      {key: 'Jimmy'},
                      {key: 'Julie'},
                    ]}
                    renderItem={({item}) => {

                      return <View>
                        <Text bold size={12} color="#2c2c2c" style={styles.item}>
                          {item.key}
                        </Text>
                        <Text bold size={12} color="#2c2c2c" style={styles.item}>
                          hi
                        </Text>
                      </View>;
                    }}
                  />
                </View>
              <Block row style={{ paddingVertical: 14, paddingHorizontal: 15 }} space="between">
                <Text bold size={16} color="#2c2c2c" style={{ marginTop: 3 }}>
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


              <Block style={{ paddingBottom: -HeaderHeight * 2, paddingHorizontal: 15 }}>
                <Block row space="between" style={{ flexWrap: 'wrap' }}>
                  {Images.Viewed.map((img, imgIndex) => (
                    <Image
                      source={img}
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

    );
  }
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

  info: {
    marginTop: 30,
    paddingHorizontal: 10,
    height: height * 0.8
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    flex: 1,
    width: 310,
    height: 310,
    resizeMode: 'contain'
  },
  nameInfo: {
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    fontSize: 10,
    height: 21,
  },
  social: {
    width: nowTheme.SIZES.BASE * 3,
    height: nowTheme.SIZES.BASE * 3,
    borderRadius: nowTheme.SIZES.BASE * 1.5,
    justifyContent: 'center',
    zIndex: 99,
    marginHorizontal: 5
  }


});

export default Profile;
