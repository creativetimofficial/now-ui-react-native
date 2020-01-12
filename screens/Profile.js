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
            </Block>
            <Block middle row
                   style={{ position: 'absolute', width: width, top: height * 0.6 - 22, zIndex: 99 }}
            >
              <Button style={{ width: 300, height: 44, marginHorizontal: 5, elevation: 0 }}
                      textStyle={{ fontSize: 16 }} disabled
                      round>
                Transaction History
              </Button>
            </Block>
          </ImageBackground>

        </Block>
        <Block flex={0.4} style={{ padding: theme.SIZES.BASE, marginTop: 90 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block flex>
              <View style={styles.container}>
                <FlatList
                  renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
                  data={[
                    { date: '12/01/2020', merchant: 'Mannings HK', amount: '400.00' },
                    { date: '10/01/2020', merchant: 'Spotify PA890268930', amount: '58.00' },
                    { date: '09/01/2020', merchant: '**ALIPAY - Taobao', amount: '126.37' },
                    { date: '03/01/2020', merchant: 'PAYME FROM HSBC HK HK', amount: '228.03' }
                  ]}
                  renderItem={({ item }) => (
                    <Block style={{ marginBottom: 15 }}>
                      <Block width={width} row key={`${item.date}_${item.merchant}`}>
                        <Block flex={1}>
                          <Text bold size={12} color="#2c2c2c" style={styles.item}>
                            {item.date}
                          </Text>
                          <Text size={12} color="#2c2c2c" style={styles.item}>
                            {item.merchant}
                          </Text>
                        </Block>
                        <Block middle flex={1}>
                          <Text bold size={12} color="#2c2c2c" style={styles.item}>
                            {`HKD ${item.amount}`}
                          </Text>
                        </Block>
                      </Block>
                      <View
                        style={{
                          borderBottomColor: nowTheme.COLORS.GREY,
                          borderBottomWidth: 1,
                        }}
                      />
                    </Block>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
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
    fontSize: 16,
    height: 32
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
