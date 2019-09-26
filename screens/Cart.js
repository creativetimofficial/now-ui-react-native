import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableWithoutFeedback
} from "react-native";
import { Block, Text, theme } from "galio-framework";
// butoane text mai gros ca la register screen
import { Card, Select, Button } from "../components/";
import { nowTheme } from "../constants/";
import { cart } from "../constants";

const { width } = Dimensions.get("screen");

export default class Cart extends React.Component {
  state = {
    cart: cart.products
  };

  handleQuantity = (id, qty) => {
    const { cart } = this.state;

    const updatedCart = cart.map(product => {
      if (product.id === id) product.qty = qty;
      return product;
    });

    this.setState({ cart: updatedCart });
  };

  handleDelete = id => {
    const { cart } = this.state;
    const updatedCart = cart.filter(product => product.id !== id);
    this.setState({ cart: updatedCart });
  };

  handleAdd = item => {
    const { cart } = this.state;

    cart.push({
      ...item,
      id: cart.length + 1,
      stock: true,
      qty: 1
    });

    this.setState({ cart });
  };

  renderProduct = ({ item }) => {
    const { navigation } = this.props;

    return (
      <Block>
        <Block card shadow style={styles.product}>
          <Block flex row>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Product", { product: item })}
            >
              <Block style={styles.imageHorizontal}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    height: theme.SIZES.BASE * 5,
                    marginTop: -theme.SIZES.BASE * 2,
                    borderRadius: 3
                  }}
                />
              </Block>
            </TouchableWithoutFeedback>
            <Block flex style={styles.productDescription}>
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("Product", { product: item })
                }
              >
                <Text size={14} style={styles.productTitle} color={nowTheme.COLORS.TEXT}>
                  {item.title}
                </Text>
              </TouchableWithoutFeedback>
              <Block flex row space="between">
                <Block bottom>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={theme.SIZES.BASE * 0.75}
                    color={nowTheme.COLORS[item.stock ? "SUCCESS" : "ERROR"]}
                  >
                    {item.stock ? "In Stock" : "Out of Stock"}
                  </Text>
                </Block>
                <Block bottom>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={theme.SIZES.BASE * 0.75}
                    color={nowTheme.COLORS.ACTIVE}
                  >
                    ${item.price * item.qty}
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block flex row space="between" style={styles.options}>
            <Block>
              <Select
                defaultIndex={1}
                disabled={!item.stock}
                options={[1, 2, 3, 4, 5]}
                onSelect={(index, value) => this.handleQuantity(item.id, value)}
              />
            </Block>
            <Button
              center
              shadowless
              color="default"
              textStyle={styles.optionsButtonText}
              style={styles.optionsButton}
              onPress={() => this.handleDelete(item.id)}
            >
              DELETE
            </Button>
            <Button
              center
              shadowless
              color="default"
              textStyle={styles.optionsButtonText}
              style={styles.optionsButton}
              onPress={() => console.log("save for later")}
            >
              SAVE FOR LATER
            </Button>
          </Block>
        </Block>
      </Block>
    );
  };

  renderHorizontalProduct = ({ item }) => {
    const buttonStyles = {
      ...styles.optionsButton,
      marginTop: 5
  };
    return (
      <Block style={{ marginRight: theme.SIZES.BASE }}>
        <Card
          item={item}
          imageStyle={{ width: "auto", height: 94 }}
          style={{ width: width / 2.88 }}
        />
        <Button
          center
          shadowless
          color="active"
          style={buttonStyles}
          textStyle={[styles.optionsButtonText, { color: "white" }]}
          onPress={() => this.handleAdd(item)}
        >
          ADD TO CART
        </Button>
      </Block>
    );
  };

  renderHorizontalProducts = () => {
    return (
      <Block style={{ marginHorizontal: theme.SIZES.BASE }}>
        <Text bold size={theme.SIZES.BASE} style={styles.similarTitle} color={nowTheme.COLORS.TEXT}>
          Customers who shopped for items in your cart also shopped for:
        </Text>
        <FlatList
          data={cart.suggestions}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}-${item.title}`}
          renderItem={this.renderHorizontalProduct}
        />
      </Block>
    );
  };

  renderDivider() {
    return <Block style={styles.divider} />;
  }

  renderHeader = () => {
    const { navigation } = this.props;
    const { cart } = this.state;
    const productsQty = cart.length;
    const total =
      cart &&
      cart.reduce((prev, product) => prev + product.price * product.qty, 0);

    return (
      <Block flex style={styles.header}>
        <Block style={{ marginBottom: theme.SIZES.BASE * 2 }}>
          <Text style={{ fontFamily: 'montserrat-regular' }} color={nowTheme.COLORS.TEXT}>
            Cart subtotal ({productsQty} items):{" "}
            <Text style={{ fontFamily: 'montserrat-bold' }} color={nowTheme.COLORS.ERROR}>
              ${total}
            </Text>
          </Text>
        </Block>
        <Block center>
          <Button
            flex
            center
            style={styles.checkout}
            color="active"
            onPress={() => navigation.navigate("SignIn")}
            fontSize={14}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Block>
        <Block style={styles.divider} />
      </Block>
    );
  };

  renderFooter = () => {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.footer}>
        {this.renderHorizontalProducts()}
        <Block style={{ marginHorizontal: theme.SIZES.BASE }}>
          <Block style={styles.divider} />
        </Block>
        <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Button
            flex
            center
            style={styles.checkout}
            color="active"
            onPress={() => navigation.navigate("SignIn")}
            fontSize={14}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Block>
      </Block>
    );
  };

  renderEmpty() {
    return <Text style={{ fontFamily: 'montserrat-regular' }} color={nowTheme.COLORS.ERROR}>The cart is empty</Text>;
  }

  renderCheckoutButton() {
    const { navigation } = this.props;
    return (
      <Block center>
        <Button
          flex
          center
          style={styles.checkout}
          color="active"
          onPress={() => navigation.navigate("SignIn")}
          fontSize={14}
        >
          PROCEED TO CHECKOUT
        </Button>
      </Block>
    );
  }

  render() {
    return (
      <Block flex center style={styles.cart}>
        <FlatList
          data={this.state.cart}
          renderItem={this.renderProduct}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}-${item.title}`}
          ListEmptyComponent={this.renderEmpty()}
          ListHeaderComponent={this.renderHeader()}
          ListFooterComponent={this.renderFooter()}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  cart: {
    width: width
  },
  header: {
    paddingVertical: theme.SIZES.BASE,
    marginTop: theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE
  },
  footer: {
    marginBottom: theme.SIZES.BASE * 2
  },
  divider: {
    height: 1,
    backgroundColor: nowTheme.COLORS.INPUT,
    marginVertical: theme.SIZES.BASE
  },
  checkoutWrapper: {
    paddingTop: theme.SIZES.BASE * 2,
    margin: theme.SIZES.BASE,
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: nowTheme.COLORS.INPUT
  },
  products: {
    minHeight: "100%"
  },
  product: {
    width: width * 0.9,
    borderWidth: 0,
    marginVertical: theme.SIZES.BASE * 1.5,
    marginHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: theme.SIZES.BASE / 4,
    shadowOpacity: 0.1
  },
  productTitle: {
    fontFamily: 'montserrat-regular',
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageHorizontal: {
    width: theme.SIZES.BASE * 6.25,
    margin: theme.SIZES.BASE / 2
  },
  options: {
    padding: theme.SIZES.BASE / 2
  },
  qty: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: theme.SIZES.BASE * 6.25,
    backgroundColor: nowTheme.COLORS.INPUT,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  optionsButtonText: {
    fontFamily: 'montserrat-bold',
    fontSize: theme.SIZES.BASE * 0.75,
    color: theme.COLORS.WHITE,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.29
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  checkout: {
    height: theme.SIZES.BASE * 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  similarTitle: {
    lineHeight: 26,
    marginBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE
  },
  productVertical: {
    height: theme.SIZES.BASE * 10.75,
    width: theme.SIZES.BASE * 8.125,
    overflow: "hidden",
    borderWidth: 0,
    borderRadius: 4,
    marginBottom: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: theme.SIZES.BASE / 4,
    shadowOpacity: 1
  }
});
