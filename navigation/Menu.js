import React from "react";
import { DrawerItems } from "react-navigation";
import { ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../constants/Images";
import { DrawerItem } from '../components/index'

import nowTheme from '../constants/Theme';

const { width } = Dimensions.get("screen");

const Drawer = props => (
  <Block
    style={styles.container}
    forceInset={{ top: "always", horizontal: "never" }}
  >
    <Block flex={0.05} style={styles.header}>
      <Image styles={styles.logo} source={Images.Logo} />
    </Block>
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DrawerItems {...props} />
        <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
            <Block style={{ borderColor: "white", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
            <Text color={nowTheme.COLORS.WHITE} style={{ marginTop: 16, marginLeft: 8, fontFamily: 'open-sans-regular' }}>DOCUMENTATION</Text>
        </Block>
        <TouchableOpacity onPress={() => Linking.openURL('https://demos.creative-tim.com/argon-pro-react-native/docs/').catch((err) => console.error('An error occurred', err))}>
          <DrawerItem   {...props} title="Getting Started" />
        </TouchableOpacity>
      </ScrollView>
    </Block>
  </Block>
);

const Menu = {
  contentComponent: props => <Drawer {...props} />,
  drawerBackgroundColor: nowTheme.COLORS.PRIMARY,
  drawerWidth: width * 0.8,
  contentOptions: {
    activeTintColor: nowTheme.COLORS.WHITE,
    inactiveTintColor: nowTheme.COLORS.WHITE,
    activeBackgroundColor: "transparent",
    itemStyle: {
      width: width * 0.75,
      backgroundColor: "transparent"
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 12,
      fontWeight: "normal",

    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      overflow: "hidden"
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center"
  }
});

export default Menu;
