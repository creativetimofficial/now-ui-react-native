import React from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";
import { Block, Text } from "galio-framework";
import { Notification } from "../components";
import { nowTheme } from "../constants";

export default class SystemNotifications extends React.Component {
  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Block center style={{ width: "90%" }}>
            <Block style={styles.card}>
              <Block style={styles.cardHeader}>
                <Text
                  size={18}
                  style={{ fontFamily: "open-sans-bold" }}
                  color={nowTheme.COLORS.TEXT}
                >
                  Unread notifications
                </Text>
              </Block>
              <Block>
                <Notification
                  transparent
                  system
                  title="New message"
                  time="2 hrs ago"
                  body="The new message from the author."
                  iconName="bell"
                  iconFamily="font-awesome"
                  color={"#B0EED3"}
                  style={{ marginBottom: 10 }}
                />
                <Notification
                  transparent
                  system
                  title="New order"
                  time="3 hrs ago"
                  body="A confirmed request by one party."
                  iconName="bell"
                  iconFamily="font-awesome"
                  color={"#B0EED3"}
                  style={{ marginBottom: 10 }}
                />
              </Block>
            </Block>
            <Block style={styles.card}>
              <Block style={styles.cardHeader}>
                <Text
                  size={18}
                  style={{ fontFamily: "open-sans-bold" }}
                  color={nowTheme.COLORS.TEXT}
                >
                  Read notifications
                </Text>
              </Block>
              <Block>
              <Notification
                  transparent
                  system
                  title="Last message"
                  time="1 day ago"
                  body="Let's meet at Starbucks at 11:30. Wdyt?"
                  iconName="like1"
                  iconFamily="antdesign"
                  color={"#AAEDF9"}
                  style={{ marginBottom: 10 }}
                />
              <Notification
                  transparent
                  system
                  title="Product issue"
                  time="2 day ago"
                  body="A new issue has been reported for Argon."
                  iconName="html5"
                  iconFamily="font-awesome"
                  color={"#FDD1DA"}
                  style={{ marginBottom: 10 }}
                />
                <Notification
                  transparent
                  system
                  title="New likes"
                  time="4 days ago"
                  body="Your posts have been liked a lot."
                  iconName="like1"
                  iconFamily="antdesign"
                  color={"#AAEDF9"}
                  style={{ marginBottom: 10 }}
                />
              </Block>
            </Block>
          </Block>
          <Block style={{ marginBottom: 20 }} />
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: nowTheme.COLORS.WHITE,
    marginTop: 25,
    borderRadius: 6
  },
  cardHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
