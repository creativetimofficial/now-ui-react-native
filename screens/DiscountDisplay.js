import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Text } from "galio-framework";

import { Button } from "../components";
import Card2 from '../components/Card2'
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class DiscountDisplay extends React.Component {
  renderArticles = () => {
    const { navigation } = this.props;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Card2 item={articles[4]} />
          <Card2 item={articles[5]} />
          <Card2 item={articles[6]} />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    marginTop: 60,
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  }
});

export default DiscountDisplay;
