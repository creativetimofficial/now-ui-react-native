import React from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Card } from "../components/";
import categories from "../constants/categories";
import { nowTheme } from "../constants";

const { width } = Dimensions.get("window");
const cardWidth = width - theme.SIZES.BASE * 2;

export default class Category extends React.Component {
  renderSuggestions = () => {
    const { navigation } = this.props;
    const { params } = navigation && navigation.state;
    const category = categories[params.id];
    const suggestions = category && category.suggestions;

    if (!suggestions) return null;

    return (
      <React.Fragment>
        <Card item={suggestions[0]} style={{ marginRight: theme.SIZES.BASE }} />
        <Card item={suggestions[1]} />
      </React.Fragment>
    );
  };

  renderCard = (item, index) => {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        key={`Card-${item.title}`}
        onPress={() => navigation.navigate("Card", { Card: item })}
      >
        <Block flex style={styles.Card}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color="#525F7F"
              style={styles.price}
            >
              $125
            </Text>
            <Text style={{ fontFamily: 'montserrat-regular' }} center size={34} color={nowTheme.COLORS.TEXT}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={nowTheme.COLORS.MUTED}
              style={styles.description}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const { navigation } = this.props;
    const { params } = navigation && navigation.state;
    const category = categories[params.id];
    return (
      <Block flex>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Block flex={3}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{ paddingRight: theme.SIZES.BASE }}
            >
              {category &&
                category.images.map((item, index) =>
                  this.renderCard(item, index)
                )}
            </ScrollView>
          </Block>
          <Block flex row style={{ marginHorizontal: theme.SIZES.BASE }}>
            {this.renderSuggestions()}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: theme.SIZES.BASE * 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  image: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  imageVertical: {
    overflow: "hidden",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4
  },
  price: {
    fontFamily: 'montserrat-bold',
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  description: {
    fontFamily: 'montserrat-regular',
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE * 2
  },
  suggestion: {
    backgroundColor: theme.COLORS.WHITE,
    marginBottom: theme.SIZES.BASE,
    borderWidth: 0,
    marginLeft: theme.SIZES.BASE / 2,
    marginRight: theme.SIZES.BASE / 2
  },
  suggestionTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6
  },
  suggestionDescription: {
    padding: theme.SIZES.BASE / 2
  }
});
