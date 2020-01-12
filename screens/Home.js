import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import {Block, theme, Icon, Text} from "galio-framework";
import { Card, Button } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderArticles = () => {
    const { navigation } = this.props;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Block row space="space-between">
            <Icon style={{ width: 30, height: 30, marginHorizontal: 5, elevation: 0 }} name="call" family="NowExtra"/>
            <Text
                style={{  fontSize: 12 }}
                color={theme.COLORS.BLACK}
                onPress={() => navigation.navigate('DiscountDisplay')}
            >
              You have a new discount. Please check!
            </Text>
          </Block>
          <Card item={articles[3]} />
          <Card item={articles[0]} />
          <Card item={articles[1]} />
          <Card item={articles[2]} />

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
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  }
});

export default Home;
