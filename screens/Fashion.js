import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components/";

import deals from "../constants/deals";

const { width } = Dimensions.get("screen");
// import products from '../constants/products';

export default class Deals extends React.Component {
  renderProducts = () => {
    const { navigation } = this.props;
    const tabId = navigation.getParam("tabId");
    const products = tabId ? deals[tabId] : deals.shoes;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
      >
        <Block flex>
          <Card item={products[0]} horizontal />
          <Block flex row>
            <Card
              item={products[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={products[2]} />
          </Block>
          <Card item={products[3]} horizontal />
          <Card item={products[4]} full />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.deals}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  deals: {
    width
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE
  }
});
