import React from "react";
import { StyleSheet, Dimensions, ScrollView, Keyboard } from "react-native";
import { Block, theme, Text } from "galio-framework";

import { Card, Button } from "../components";
import articles from "../constants/articles";
import destinations from "../constants/destinations";
import Input from '../components/Input';
import Icon from '../components/Icon';

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.destinations}
      >
        <Block flex>
        <Card item={destinations[0]} horizontal />
          <Block flex row>
            <Card
              item={destinations[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={destinations[2]} />
          </Block>
          <Card item={destinations[3]} horizontal />
          <Card item={destinations[4]} full />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        <Block center width="80%">
          {this.renderSearch()}
        </Block>
        {this.renderArticles()}
      </Block>
    );
  }
  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="Where to?"
        placeholderTextColor={'#8898AA'}
        // onFocus={() => {Keyboard.dismiss(); navigation.navigate('Pro')}}
        iconContent={
          <Icon size={16} color={theme.COLORS.MUTED} name="zoom-bold2x" family="NowExtra" />
        }
      />
    );
  };
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  destinations: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  }
});

export default Home;
