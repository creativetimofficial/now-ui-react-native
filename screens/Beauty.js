import React from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../constants/Images";

const { width } = Dimensions.get("screen");

const menuCategories = {
  music: [
    { id: "artists", title: "Artists", image: Images.Music["Artists"] },
    { id: "concerts", title: "Concerts", image: Images.Music["Concerts"] },
    { id: "DJs", title: "DJs", image: Images.Music["DJs"] }
  ],
  beauty: [
    { id: "hands", title: "Hands", image: Images.Music["Hands"] },
    { id: "body", title: "Body", image: Images.Music["Body"] },
    { id: "face", title: "Face", image: Images.Music["Face"] }
  ],
  fashion: [
    { id: "trends", title: "Trends", image: Images.Music["Trends"] },
    { id: "clothes", title: "Clothes", image: Images.Music["Clothes"] },
    { id: "accessory", title: "Accessory", image: Images.Music["Accessory"] }
  ],
  clothes: [
    { id: "fashion", title: "Fashion", image: Images.Music["Fashion"] },
    { id: "garagesale", title: "Garage Sale", image: Images.Music["Garage_sale"] },
    { id: "weddingdress", title: "Wedding Dress", image: Images.Music["Wedding_dress"] }
  ]
};

export default class Categories extends React.Component {
  renderCategories = () => {
    const { navigation } = this.props;
    const tabId = navigation.getParam("tabId");
    const categories = tabId ? menuCategories[tabId] : menuCategories.beauty;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        <Block flex>
          {categories.map(category => (
            <TouchableWithoutFeedback
              key={`category-${category.id}`}
              onPress={() => navigation.navigate("Category", { ...category })}
            >
              <Block flex card style={[styles.category, styles.shadow]}>
                <ImageBackground
                  source={{ uri: category.image }}
                  style={[
                    styles.imageBlock,
                    { width: width - theme.SIZES.BASE * 2, height: 252 }
                  ]}
                  imageStyle={{
                    width: width - theme.SIZES.BASE * 2,
                    height: 252
                  }}
                >
                  <Block style={styles.categoryTitle}>
                    <Text style={{ fontFamily: 'montserrat-bold' }} size={18} color={theme.COLORS.WHITE}>
                      {category.title}
                    </Text>
                  </Block>
                </ImageBackground>
              </Block>
            </TouchableWithoutFeedback>
          ))}
        </Block>
      </ScrollView>
    );
  };
  render() {
    return (
      <Block flex center style={styles.categories}>
        {this.renderCategories()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  categories: {
    width
  },
  categoryList: {
    justifyContent: "center",
    paddingTop: theme.SIZES.BASE * 1.5
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginHorizontal: theme.SIZES.BASE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 2
  }
});
