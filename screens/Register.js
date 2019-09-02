import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Block, Checkbox, Text } from "galio-framework";

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
                    <Block flex={0.6} middle>
                      <Text color="#8898AA" size={12}>
                        Sign up with
                      </Text>
                    </Block>
                    <Block flex={0.4} row style={{ marginBottom: 18 }}>
                      <Button
                        style={{ ...styles.socialButtons, marginRight: 30 }}
                      >
                        <Block row>
                          <Icon
                            name="logo-github"
                            family="Ionicon"
                            size={14}
                            color={"black"}
                            style={{ marginTop: 2, marginRight: 5 }}
                          />
                          <Text style={styles.socialTextButtons}>GITHUB</Text>
                        </Block>
                      </Button>
                      <Button style={styles.socialButtons}>
                        <Block row>
                          <Icon
                            name="facebook-square"
                            family="font-awesome"
                            size={14}
                            color={"black"}
                            style={{ marginTop: 2, marginRight: 5 }}
                          />
                          <Text style={styles.socialTextButtons}>FACEBOOK</Text>
                        </Block>
                      </Button>
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
                        size={12}
                      >
                        Or sign up the classic way
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
                              placeholder="Name"
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
                          <Block width={width * 0.8}>
                            <Input
                              password
                              borderless
                              placeholder="Password"
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="padlock-unlocked"
                                  family="ArgonExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                            <Block row style={styles.passwordCheck}>
                              <Text
                                style={{ fontFamily: "open-sans-regular" }}
                                size={12}
                                color={nowTheme.COLORS.MUTED}
                              >
                                password strength:
                              </Text>
                              <Text
                                style={{ fontFamily: "open-sans-bold" }}
                                size={12}
                                color={nowTheme.COLORS.SUCCESS}
                              >
                                {" "}
                                strong
                              </Text>
                            </Block>
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
                          <Button color="primary" style={styles.createButton}>
                            <Text
                              style={{ fontFamily: "open-sans-bold" }}
                              size={14}
                              color={nowTheme.COLORS.WHITE}
                            >
                              CREATE ACCOUNT
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
    backgroundColor: "#F4F5F7",
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(136, 152, 170, 0.3)"
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
  }
});

export default Register;
