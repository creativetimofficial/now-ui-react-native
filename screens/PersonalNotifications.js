import React from "react";
import { ScrollView, Alert } from "react-native";
import { Block } from "galio-framework";
import { Notification } from "../components";
import { nowTheme } from "../constants";

export default class PersonalNotifications extends React.Component {
  render() {
    return (
      <Block middle flex>
        <Block flex style={{ width: "90%" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Notification
              time="15:30"
              body="About your order #45C23B Wifey made the best Father's Day meal ever. So thankful so happy."
              iconName="ship"
              iconFamily="font-awesome"
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('Yes, you can use the notifications as buttons so you could send your customers to anything you want.')}
            />
            <Notification
              time="12:10"
              body="Customize our products. Now you can make the best and perfect clothes just for you."
              iconName="ship"
              iconFamily="font-awesome"
              color={nowTheme.COLORS.INFO}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('Yes, you can use the notifications as buttons so you could send your customers to anything you want.')}
            />
            <Notification
              time="11:30"
              body="Breaking News! We have new methods to payment. Learn how to pay off debt fast using the stack method."
              iconName="ship"
              iconFamily="font-awesome"
              color={nowTheme.COLORS.WARNING}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('Yes, you can use the notifications as buttons so you could send your customers to anything you want.')}
            />
            <Notification
              time="04:23"
              body="Congratulations! Someone just ordered a pair of Yamaha HS8 speakers through your app! Hurry up and ship them!"
              iconName="ship"
              iconFamily="font-awesome"
              color={nowTheme.COLORS.SUCCESS}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('Yes, you can use the notifications as buttons so you could send your customers to anything you want.')}
            />
            <Block style={{ marginBottom: 20 }} />
          </ScrollView>
        </Block>
      </Block>
    );
  }
}
