import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Block, Checkbox, Text,  Button as GaButton, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, nowTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class Register extends React.Component {
  render() {
    return (
      <DismissKeyboard>
        <Block flex middle>
          <StatusBar hidden />
          <ImageBackground
            source={Images.RegisterBackground}
            style={{ width, height, zIndex: 1 }}
          >
            <Block flex middle>
              <Block style={styles.registerContainer}>
                <Block flex space="between">
                  <Block flex={0.2} middle style={styles.socialConnect}>
                    <Block flex={0.3} middle>
                      <Text  size={18}>
                         Register
                      </Text>
                    </Block>
                    <Block flex={0.7}  row style={{ marginBottom: 18 }}>
                    <GaButton
                round
                onlyIcon
                shadowless
                icon="twitter"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.TWITTER}
                style={[styles.social, styles.shadow]}
              />

                      <GaButton
                round
                onlyIcon
                shadowless
                icon="dribbble"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.DRIBBBLE}
                style={[styles.social, styles.shadow]}
              />
                 <GaButton
                round
                onlyIcon
                shadowless
                icon="facebook"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.FACEBOOK}
                style={[styles.social, styles.shadow]}
              />

                    </Block>
                  </Block>
                  <Block flex={0.8} middle space="between">
                    <Block flex={0.2} middle>
                      <Text
                        style={{
                          fontFamily: "open-sans-regular",
                          textAlign: "center"
                        }}
                        color="#8898AA"
                        size={20}

                      >
                        or be classical
                      </Text>
                    </Block>
                    <Block center flex={0.9}>
                      <Block flex space="between">
                        <Block>
                          <Block
                            width={width * 0.8}
                            style={{ marginBottom: 5 }}
                          >
                            <Input
                              borderless
                              placeholder="First Name"
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="hat-3"
                                  family="ArgonExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          <Block
                            width={width * 0.8}
                            style={{ marginBottom: 5 }}
                          >
                            <Input
                              borderless
                              placeholder="Last Name"
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="ic_mail_24px"
                                  family="ArgonExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          <Block width={width * 0.8}>
                          <Input
                              borderless
                              placeholder="Email"
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="ic_mail_24px"
                                  family="ArgonExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />

                          </Block>
                          <Block row width={width * 0.75}>
                            <Checkbox
                              checkboxStyle={{
                                borderWidth: 1
                              }}
                              color={nowTheme.COLORS.PRIMARY}
                              labelStyle={{
                                color: nowTheme.COLORS.TEXT,
                                fontFamily: "open-sans-regular"
                              }}
                              label="I agree with the"
                            />
                            <Button
                              style={{ width: 100 }}
                              color="transparent"
                              textStyle={{
                                color: nowTheme.COLORS.PRIMARY,
                                fontSize: 14,
                                fontFamily: "open-sans-regular",
                                marginRight: 5
                              }}
                            >
                              Privacy Policy
                            </Button>
                          </Block>
                        </Block>
                        <Block center>
                          <Button color="primary" round  style={styles.createButton}>
                            <Text
                              style={{ fontFamily: "open-sans-bold" }}
                              size={14}
                              color={nowTheme.COLORS.WHITE}
                            >
                              Get Started
                            </Text>
                          </Button>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height < 812 ? height * 0.9 : height * 0.8,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 4,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
    marginVertical: 10
  },
});

export default Register;
