import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, theme } from 'galio-framework';
//argon
import { articles } from '../constants/';
import { Card } from '../components/';

class Articles extends React.Component {
  renderCards = () => {
    return (
      <Block style={styles.container}>
        <Card item={articles[0]} horizontal />
        <Block flex row>
          <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[2]} />
        </Block>
        <Card item={articles[3]} horizontal />
        <Card item={articles[4]} full />
      </Block>
    );
  };

  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE
  }
});

export default Articles;
