import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Slider,
  ProgressViewIOS,
  CheckBox
} from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";

// Argon themed components
import { nowTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";
import Blockquote from "../components/Blockquote";
import Img from "../components/Img";
import ProgressBar from "../components/ProgressBar";
import NSlider from "../components/Sliders";
import Label from "../components/Label";
import RadioButton from "../components/RadioButton";

const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  state = {
    "switch-1": true,
    "switch-2": false,
    progress: 0,
    value: 50,
    checked: false
  };
  getProgress(offset) {
    var progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        progress: state.progress + 0.1
      }));
    }, 1000);
  }
  onChangeCheck() {
    this.setState({ checked: !this.state.checked})
  }

  toggleSwitch = switchId =>
    this.setState({ [switchId]: !this.state[switchId] });

  renderButtons = () => {
    return (
      <Block flex>
        <Text size={16} style={styles.title}>
          Buttons
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              round
              style={styles.button}
            >
              ROUND
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              small
              style={styles.button}
            >
              SMALL
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              color="default"
              style={styles.button}
            >
              DEFAULT
            </Button>
          </Block>
          <Block center>
            <Button
              color="secondary"
              textStyle={{ fontFamily: "open-sans-bold", color: "black" }}
              style={styles.button}
            >
              SECONDARY
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              style={styles.button}
            >
              PRIMARY
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              color="info"
              style={styles.button}
            >
              INFO
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              color="success"
              style={styles.button}
            >
              SUCCESS
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              color="warning"
              style={styles.button}
            >
              WARNING
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              color="error"
              style={styles.button}
            >
              ERROR
            </Button>
          </Block>
          <Block row space="evenly">
            <Block flex left>
              <Select
                defaultIndex={1}
                options={["01", "02", "03", "04", "05"]}
              />
            </Block>
            <Block flex center>
              <Button
                textStyle={{ fontFamily: "open-sans-bold", fontSize: 12 }}
                small
                center
                color="default"
                style={styles.optionsButton}
              >
                DELETE
              </Button>
            </Block>
            <Block flex={1.25} right>
              <Button
                textStyle={{ fontFamily: "open-sans-bold", fontSize: 12 }}
                center
                color="default"
                style={styles.optionsButton}
              >
                SAVE FOR LATER
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };

  renderText = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Typography
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h1
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 1
          </Text>
          <Text
            h2
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 2
          </Text>
          <Text
            h3
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 3
          </Text>
          <Text
            h4
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 4
          </Text>
          <Text
            h5
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 5
          </Text>
          <Text
            p
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Paragraph
          </Text>
          <Text style={{ fontFamily: "open-sans-regular" }} muted>
            This is a muted paragraph.
          </Text>
          <Blockquote color="warning" source="NOAA" style={styles.button}>
            "I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at."
          </Blockquote>
          <Text
            color={nowTheme.COLORS.PRIMARY}
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
          >
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Text>
          <Text
            color={nowTheme.COLORS.INFO}
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
          >
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Text>
          <Text
            color={nowTheme.COLORS.SUCCESS}
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
          >
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Text>
          <Text
            color={nowTheme.COLORS.WARNING}
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
          >
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Text>
          <Text
            color={nowTheme.COLORS.ERROR}
            style={{
              fontFamily: "open-sans-regular",
              marginBottom: theme.SIZES.BASE / 2
            }}
          >
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Text>
        </Block>
      </Block>
    );
  };
  renderImages = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Images
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Img type="raised"></Img>
          <Img type="circle"/>
        </Block>
      </Block>
    );
  };
  renderInputs = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Inputs
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Regular" iconContent={<Block />} />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Regular Custom"
            style={{
              borderColor: nowTheme.COLORS.PRIMARY,
              borderRadius: 4,
              backgroundColor: "#fff"
            }}
            iconContent={<Block />}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            placeholder="Icon left"
            iconContent={
              <Icon
                size={11}
                style={{ marginRight: 10 }}
                color={nowTheme.COLORS.ICON}
                name="search-zoom-in"
                family="ArgonExtra"
              />
            }
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Icon Right"
            iconContent={
              <Icon
                size={11}
                color={nowTheme.COLORS.ICON}
                name="search-zoom-in"
                family="ArgonExtra"
              />
            }
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            success
            right
            placeholder="Success"
            iconContent={
              <Block
                middle
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: nowTheme.COLORS.INPUT_SUCCESS
                }}
              >
                <Icon
                  size={11}
                  color={nowTheme.COLORS.ICON}
                  name="g-check"
                  family="ArgonExtra"
                />
              </Block>
            }
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            error
            right
            placeholder="Error Input"
            iconContent={
              <Block
                middle
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: nowTheme.COLORS.INPUT_ERROR
                }}
              >
                <Icon
                  size={11}
                  color={nowTheme.COLORS.ICON}
                  name="support"
                  family="ArgonExtra"
                />
              </Block>
            }
          />
        </Block>
      </Block>
    );
  };

  renderSwitches = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Switches
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block
            row
            middle
            space="between"
            style={{ marginBottom: theme.SIZES.BASE }}
          >
            <Text
              style={{ fontFamily: "open-sans-regular" }}
              size={14}
              color={nowTheme.COLORS.TEXT}
            >
              Switch is ON
            </Text>
            <Switch
              value={this.state["switch-1"]}
              onValueChange={() => this.toggleSwitch("switch-1")}
            />
          </Block>
          <Block row middle space="between">
            <Text
              style={{ fontFamily: "open-sans-regular" }}
              size={14}
              color={nowTheme.COLORS.TEXT}
            >
              Switch is OFF
            </Text>
            <Switch
              value={this.state["switch-2"]}
              onValueChange={() => this.toggleSwitch("switch-2")}
            />
          </Block>
        </Block>
      </Block>
    );
  };

  renderTableCell = () => {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Table Cell
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block style={styles.rows}>
            <TouchableOpacity onPress={() => navigation.navigate("Pro")}>
              <Block row middle space="between" style={{ paddingTop: 7 }}>
                <Text
                  style={{ fontFamily: "open-sans-regular" }}
                  size={14}
                  color={nowTheme.COLORS.TEXT}
                >
                  Manage Options
                </Text>
                <Icon
                  name="chevron-right"
                  family="entypo"
                  style={{ paddingRight: 5 }}
                />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    );
  };

  renderSocial = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Social
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block row center space="between">
            <Block flex middle right>
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
            <Block flex middle center>
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
            </Block>
            <Block flex middle left>
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
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="linkedin"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.LINKEDIN}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="pinterest"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.PINTEREST}
                style={[styles.social, styles.shadow]}
              />
            </Block>
          </Block>
        </Block>
        <Block style={{ paddingVertical: theme.SIZES.BASE }}>
          <Block row center space="between">
            <Block flex middle right>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="behance"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.BEHANCE}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle center>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="youtube"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.YOUTUBE}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="tumblr"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.TUMBLR}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="github"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.GITHUB}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="google"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.GMAIL}
                style={[styles.social, styles.shadow]}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };

  renderNavigation = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Navigation
        </Text>
        <Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header back title="Title" navigation={this.props.navigation} />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              white
              back
              title="Title"
              navigation={this.props.navigation}
              bgColor={nowTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
            />
          </Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              white
              back
              title="Title"
              navigation={this.props.navigation}
              bgColor={nowTheme.COLORS.SUCCESS}
              titleColor="white"
              iconColor="white"
            />
          </Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              white
              back
              title="Title"
              navigation={this.props.navigation}
              bgColor={nowTheme.COLORS.INFO}
              titleColor="white"
              iconColor="white"
            />
          </Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              white
              back
              title="Title"
              navigation={this.props.navigation}
              bgColor={nowTheme.COLORS.WARNING}
              titleColor="white"
              iconColor="white"
            />
          </Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              white
              back
              title="Title"
              navigation={this.props.navigation}
              bgColor={nowTheme.COLORS.ERROR}
              titleColor="white"
              iconColor="white"
            />
          </Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header search title="Title" navigation={this.props.navigation} />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              tabs={tabs.categories}
              search
              title="Title"
              navigation={this.props.navigation}
            />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              options
              search
              title="Title"
              optionLeft="Option 1"
              optionRight="Option 2"
              navigation={this.props.navigation}
            />
          </Block>
        </Block>
      </Block>
    );
  };
  renderProgressBar = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Progress Bars
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <ProgressBar
            row
            progress={this.state.progress}
            duration={500}
            color={nowTheme.COLORS.SUCCESS}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <ProgressViewIOS
            progressTintColor={nowTheme.COLORS.PRIMARY}
            progress={this.getProgress(0.4)}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <ProgressViewIOS
            progressTintColor={nowTheme.COLORS.SECONDARY}
            progress={this.getProgress(0.4)}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <ProgressViewIOS
            progressTintColor={nowTheme.COLORS.SUCCESS}
            progress={this.getProgress(0.4)}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <ProgressViewIOS
            progressTintColor={nowTheme.COLORS.WARNING}
            progress={this.getProgress(0.4)}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <ProgressViewIOS
            progressTintColor={nowTheme.COLORS.ERROR}
            progress={this.getProgress(0.4)}
          />
        </Block>
      </Block>
    );
  };
  renderSliders = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Sliders
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <NSlider color="default" />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <NSlider color="primary" />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <NSlider color="secondary" />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <NSlider color="success" />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <NSlider color="warning" />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <NSlider color="error" />
        </Block>
      </Block>
    );
  };
  renderLabels = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Labels
        </Text>
        <Label color="default">default</Label>
        <Label color="primary">primary</Label>
        <Label color="secondary">secondary</Label>
        <Label color="success">success</Label>
        <Label color="warning">warning</Label>
        <Label color="error">error</Label>
        <Label color="neutral">neutral</Label>
      </Block>
    );
  };
  renderCheckboxes = () => {
    return(
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Checkboxes
        </Text>
        <CheckBox

          value={this.state.checked}
          onChange={() => this.onChangeCheck()} />
      </Block>
    )
  }
  renderRadioButtons =  () => {
    const options = [
      {
        key: 'pay',
        text: 'Radio is off',

      },
      {
        key: 'performance',
        text: 'Radio is on',
      },
      {
        key: 'aToZ',
        text: 'Disabled radio is off',
      },
      {
        key: 'zToA',
        text: 'Disabled radio is on',
      },
    ];

    return(
      <Block flex style={styles.group}>
      <Text size={16} style={styles.title}>
        Radio Buttons
      </Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <RadioButton id={"btn1"} text={"Disabled radio"} disabled={true} />
        <RadioButton id={"btn2"} text={"Radio is on"}  />
      </Block>

    </Block>
    )
  }
  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {this.renderButtons()}
          {this.renderText()}
          {this.renderInputs()}
          {this.renderSocial()}
          {this.renderSwitches()}
          {this.renderProgressBar()}
          {this.renderSliders()}
          {this.renderLabels()}
          {this.renderCheckboxes()}
          {this.renderRadioButtons()}
          {this.renderNavigation()}
          {this.renderTableCell()}
          {this.renderImages()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: nowTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: nowTheme.COLORS.PRIMARY
  },
  inputTheme: {
    borderBottomColor: nowTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: nowTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: nowTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: nowTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: nowTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  },
  sliderDummy: {
    backgroundColor: "rgba(24, 206, 15, 0.3)"
  }
});

export default Elements;
