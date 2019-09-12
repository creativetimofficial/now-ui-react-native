import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  TextInput
} from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import TagInput from 'react-native-tag-input';

// Argon themed components
import { nowTheme, tabs, articles, Images } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";
import Blockquote from "../components/Blockquote";
import Img from "../components/Img";
import ProgressBar from "../components/ProgressBar";
import NSlider from "../components/Sliders";
import Label from "../components/Label";
import RadioButton from "../components/RadioButton";
import Checkbox from "../components/Checkbox";
import { Notification } from "../components";
import { Card } from "../components/";

const { width } = Dimensions.get("screen");

const cardWidth = width - theme.SIZES.BASE * 2;
class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkSelected: [],
      "switch-1": true,
      "switch-2": false,
      progress: 0,
      value: 50,
      checked: false,
      borderTextArea: "#E3E3E3",
      textTag:"City",
      tags:["Washington", "Sydney", "Beijing"]
    };
  }
  _onSelect = id => {
    console.log(id);
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        progress: state.progress + 0.1
      }));
    }, 1000);
  }
  onChangeCheck() {
    this.setState({ checked: !this.state.checked });
  }
  onFocus() {
    this.setState({
      borderTextArea: nowTheme.COLORS.PRIMARY
    });
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
          <Block middle row>
            <Img type="raised"></Img>
          </Block>
          <Block middle row>
            <Img type="circle" />
          </Block>
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
                color={nowTheme.COLORS.GOOGLE}
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
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              transparent
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
          <Text color={nowTheme.COLORS.PRIMARY}>PRIMARY</Text>

          <ProgressBar
            progress={this.state.progress}
            duration={500}
            barColor={nowTheme.COLORS.PRIMARY}
            fillColor={nowTheme.COLORS.PRIMARY}
            borderColor={nowTheme.COLORS.PRIMARY}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}>
          <Text color={nowTheme.COLORS.SECONDARY}>SECONDARY</Text>
          <ProgressBar
            progress={this.state.progress}
            duration={500}
            barColor={nowTheme.COLORS.SECONDARY}
            fillColor={nowTheme.COLORS.SECONDARY}
            borderColor={nowTheme.COLORS.SECONDARY}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}>
          <Text color={nowTheme.COLORS.INFO}>INFO</Text>
          <ProgressBar
            progress={this.state.progress}
            duration={500}
            barColor={nowTheme.COLORS.INFO}
            fillColor={nowTheme.COLORS.INFO}
            borderColor={nowTheme.COLORS.INFO}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}>
          <Text color={nowTheme.COLORS.SUCCESS}>SUCCESS</Text>
          <ProgressBar
            progress={this.state.progress}
            duration={500}
            barColor={nowTheme.COLORS.SUCCESS}
            fillColor={nowTheme.COLORS.SUCCESS}
            borderColor={nowTheme.COLORS.SUCCESS}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}>
          <Text color={nowTheme.COLORS.WARNING}>WARNING</Text>
          <ProgressBar
            progress={this.state.progress}
            duration={500}
            barColor={nowTheme.COLORS.WARNING}
            fillColor={nowTheme.COLORS.WARNING}
            borderColor={nowTheme.COLORS.WARNING}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}>
          <Text color={nowTheme.COLORS.ERROR}>ERROR</Text>
          <ProgressBar
            progress={this.state.progress}
            duration={500}
            barColor={nowTheme.COLORS.ERROR}
            fillColor={nowTheme.COLORS.ERROR}
            borderColor={nowTheme.COLORS.ERROR}
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
        <Block row space="evenly">
          <Block flex={1} row style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Label color="default">default</Label>
            <Label color="primary">primary</Label>
            <Label color="secondary">secondary</Label>
            <Label color="success">success</Label>
          </Block>
        </Block>
        <Block
          row
          space="evenly"
          style={{ paddingHorizontal: theme.SIZES.BASE }}
        >
          <Block flex={1} row>
            <Label color="info">info</Label>
            <Label color="warning">warning</Label>
            <Label color="error">error</Label>
            <Label color="neutral">neutral</Label>
          </Block>
        </Block>
      </Block>
    );
  };
  renderCheckboxes = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Checkboxes
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Checkbox
            label={"Checked"}
            id={"one"}
            checked={true}
            onChecked={id => this._onSelect(id)}
          />
          <Checkbox
            label={"Unchecked"}
            id={"two"}
            onChecked={id => this._onSelect(id)}
          />
        </Block>
      </Block>
    );
  };
  renderRadioButtons = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Radio Buttons
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <RadioButton id={"btn1"} text={"Disabled radio"} disabled={true} />
          <RadioButton id={"btn2"} text={"Radio is on"} />
        </Block>
      </Block>
    );
  };
  renderDefaultSocialBtns = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Social Btns V2
        </Text>
        <Block middle style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.githubBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-github"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Github
              </Text>
            </Block>
          </Button>
        </Block>
        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.twitterBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-twitter"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Twitter
              </Text>
            </Block>
          </Button>
        </Block>
        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.facebookBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-facebook"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Facebook
              </Text>
            </Block>
          </Button>
        </Block>

        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.linkedinBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-linkedin"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Linkedin
              </Text>
            </Block>
          </Button>
        </Block>
        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.youtubeBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-youtube"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Youtube
              </Text>
            </Block>
          </Button>
        </Block>
        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.pinterestBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-youtube"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Pinterest
              </Text>
            </Block>
          </Button>
        </Block>
        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.tumblrBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-youtube"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Tumblr
              </Text>
            </Block>
          </Button>
        </Block>
        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.redditBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-youtube"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Reddit
              </Text>
            </Block>
          </Button>
        </Block>
        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.googleBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-google"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Google
              </Text>
            </Block>
          </Button>
        </Block>
        <Block
          middle
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 10 }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.dribbbleBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-dribbble"
                family="Ionicon"
                size={14}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text adjustsFontSizeToFit style={styles.socialTextButtons}>
                Connect with Dribbble
              </Text>
            </Block>
          </Button>
        </Block>
      </Block>
    );
  };
  renderSocialBtnIcons = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Social Btns Icons
        </Text>
        <Block
          row
          space="evenly"
          style={{ paddingHorizontal: theme.SIZES.BASE }}
        >
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.googleBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-google"
                family="Ionicon"
                size={20}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.facebookBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-facebook"
                family="Ionicon"
                size={20}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.twitterBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-twitter"
                family="Ionicon"
                size={25}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
        </Block>
        <Block
          row
          space="evenly"
          style={{ marginTop: 10, paddingHorizontal: theme.SIZES.BASE }}
        >
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.githubBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-github"
                family="Ionicon"
                size={20}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.dribbbleBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-dribbble"
                family="Ionicon"
                size={20}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.linkedinBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-linkedin"
                family="Ionicon"
                size={25}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
        </Block>
        <Block
          row
          space="evenly"
          style={{ marginTop: 10, paddingHorizontal: theme.SIZES.BASE }}
        >
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.pinterestBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-pinterest"
                family="Ionicon"
                size={20}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.youtubeBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-youtube"
                family="Ionicon"
                size={20}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.btnIcon,
              ...styles.redditBtn,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-reddit"
                family="Ionicon"
                size={25}
                color={"white"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
        </Block>
      </Block>
    );
  };
  renderNeutralSocialBtn = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Social Btns Icons
        </Text>
        <Block
          middle
          space="evenly"
          style={{ paddingHorizontal: theme.SIZES.BASE }}
        >
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-github"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.GITHUB}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.GITHUB }}
              >
                Connect with Github
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-facebook"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.FACEBOOK}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.FACEBOOK }}
              >
                Connect with Facebook
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-google"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.GOOGLE}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.GOOGLE }}
              >
                Share on Google+
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-pinterest"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.PINTEREST}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.PINTEREST }}
              >
                Pin it - 232
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-youtube"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.YOUTUBE}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.YOUTUBE }}
              >
                View on Youtube
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-dribbble"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.DRIBBBLE}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.DRIBBBLE }}
              >
                Find us on Dribbble
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-reddit"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.REDDIT}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.REDDIT }}
              >
                Report - 232
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-tumblr"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.TUMBLR}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.TUMBLR }}
              >
                Repost
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-linkedin"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.LINKEDIN}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.LINKEDIN }}
              >
                Connect with Linkedin
              </Text>
            </Block>
          </Button>
          <Button
            style={{
              ...styles.socialButtons,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-twitter"
                family="Ionicon"
                size={14}
                color={nowTheme.COLORS.TWITTER}
                style={{ marginTop: 2, marginRight: 5 }}
              />
              <Text
                adjustsFontSizeToFit
                style={{ color: nowTheme.COLORS.TWITTER }}
              >
                Connect with Twitter
              </Text>
            </Block>
          </Button>
        </Block>
      </Block>
    );
  };
  renderNeutralSocialIcons = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Social Icons
        </Text>
        <Block
          row
          space="evenly"
          style={{ paddingHorizontal: theme.SIZES.BASE }}
        >
           <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,
              marginRight: 30
            }}
          >
            <Block row>
              <Icon
                name="logo-reddit"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.REDDIT}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
            <Block row>
              <Icon
                name="logo-tumblr"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.TUMBLR}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
            <Block row>
              <Icon
                name="logo-linkedin"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.LINKEDIN}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
            <Block row>
              <Icon
                name="logo-twitter"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.TWITTER}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
          <Block row>
              <Icon
                name="logo-github"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.GITHUB}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
        </Block>
        <Block
          row
          space="evenly"
          style={{ paddingHorizontal: theme.SIZES.BASE }}
        >

          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
            <Block row>
              <Icon
                name="logo-facebook"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.FACEBOOK}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
            <Block row>
              <Icon
                name="logo-google"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.GOOGLE}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
            <Block row>
              <Icon
                name="logo-pinterest"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.PINTEREST}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
            <Block row>
              <Icon
                name="logo-youtube"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.YOUTUBE}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>
          <Button
            style={{
              ...styles.neutralIcon,
              ...styles.neutralLink,

            }}
          >
            <Block row>
              <Icon
                name="logo-dribbble"
                family="Ionicon"
                size={25}
                color={nowTheme.COLORS.DRIBBBLE}
                style={{ marginTop: 2, marginRight: 5 }}
              />
            </Block>
          </Button>

        </Block>

      </Block>
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Cards
        </Text>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Card item={articles[0]} horizontal />
            <Block flex row>
              <Card
                item={articles[1]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={articles[2]} />
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };
  renderNotifications = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Notifications
        </Text>
        <Block flex style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Notification
            color={nowTheme.COLORS.PRIMARY}
            time="15:30"
            body="About your order #45C23B Wifey made the best Father's Day meal ever. So thankful so happy."
            iconName="ship"
            iconFamily="font-awesome"
            style={{ marginTop: 15 }}
            onPress={() =>
              Alert.alert(
                "Yes, you can use the notifications as buttons so you could send your customers to anything you want."
              )
            }
          />
          <Notification
            color={nowTheme.COLORS.SECONDARY}
            time="15:30"
            body="About your order #45C23B Wifey made the best Father's Day meal ever. So thankful so happy."
            iconName="ship"
            iconFamily="font-awesome"
            style={{ marginTop: 15 }}
            onPress={() =>
              Alert.alert(
                "Yes, you can use the notifications as buttons so you could send your customers to anything you want."
              )
            }
          />
          <Notification
            color={nowTheme.COLORS.INFO}
            time="15:30"
            body="About your order #45C23B Wifey made the best Father's Day meal ever. So thankful so happy."
            iconName="ship"
            iconFamily="font-awesome"
            style={{ marginTop: 15 }}
            onPress={() =>
              Alert.alert(
                "Yes, you can use the notifications as buttons so you could send your customers to anything you want."
              )
            }
          />
          <Notification
            color={nowTheme.COLORS.WARNING}
            time="15:30"
            body="About your order #45C23B Wifey made the best Father's Day meal ever. So thankful so happy."
            iconName="ship"
            iconFamily="font-awesome"
            style={{ marginTop: 15 }}
            onPress={() =>
              Alert.alert(
                "Yes, you can use the notifications as buttons so you could send your customers to anything you want."
              )
            }
          />
          <Notification
            color={nowTheme.COLORS.ERROR}
            time="15:30"
            body="About your order #45C23B Wifey made the best Father's Day meal ever. So thankful so happy."
            iconName="ship"
            iconFamily="font-awesome"
            style={{ marginTop: 15 }}
            onPress={() =>
              Alert.alert(
                "Yes, you can use the notifications as buttons so you could send your customers to anything you want."
              )
            }
          />
          <Notification
            time="04:23"
            body="Congratulations! Someone just ordered a pair of Yamaha HS8 speakers through your app! Hurry up and ship them!"
            iconName="ship"
            iconFamily="font-awesome"
            color={nowTheme.COLORS.SUCCESS}
            style={{ marginTop: 15 }}
            onPress={() =>
              Alert.alert(
                "Yes, you can use the notifications as buttons so you could send your customers to anything you want."
              )
            }
          />
        </Block>
      </Block>
    );
  };
  renderTextArea = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Textarea
        </Text>
        <Block flex style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <TextInput
            style={{
              ...styles.textArea,
              borderBottomColor: this.state.borderTextArea
            }}
            multiline={true}
            numberOfLines={4}
            onFocus={() => this.onFocus()}
            placeholder="You can write your text here..."
          />
        </Block>
      </Block>
    );
  };
  renderTags = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Tags
        </Text>
        <Block flex style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <TagInput
          value={this.state.tags}
          tagContainerStyle={styles.tagContainer}
          labelExtractor={(tag) => tag}
          text={this.state.textTag}
          tagTextStyle={{color: nowTheme.COLORS.WHITE}}
          onChange={(tags) => this.setState({ tags })}
          onChangeText={(textTag) => this.setState({ textTag })}
          text={"Example"}
        />
        </Block>
      </Block>
    );
  };
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
          {this.renderTextArea()}
          {this.renderTags()}
          {this.renderSocial()}
          {this.renderDefaultSocialBtns()}
          {this.renderSocialBtnIcons()}
          {this.renderNeutralSocialBtn()}
          {this.renderNeutralSocialIcons()}
          {this.renderNotifications()}
          {this.renderSwitches()}
          {this.renderProgressBar()}
          {this.renderSliders()}
          {this.renderLabels()}
          {this.renderCheckboxes()}
          {this.renderRadioButtons()}
          {this.renderNavigation()}
          {this.renderTableCell()}
          {this.renderImages()}
          {this.renderCards()}
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
  btnIcon: {
    width: 70,
    height: 50,
    paddingVertical: 11,
    paddingHorizontal: 22,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    borderRadius: 3
  },
  neutralLink: {
    backgroundColor: "rgba(0,0,0,0)"
  },
  neutralIcon: {
    width: 140,
    height: 60
  },
  socialButtons: {
    width: 240,
    height: 40,
    paddingVertical: 11,
    paddingHorizontal: 22,
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
    color: nowTheme.COLORS.WHITE,
    fontWeight: "800",
    fontSize: 14,
    alignItems: "center"
  },

  githubBtn: {
    backgroundColor: nowTheme.COLORS.GITHUB
  },
  facebookBtn: {
    backgroundColor: nowTheme.COLORS.FACEBOOK
  },
  twitterBtn: {
    backgroundColor: nowTheme.COLORS.TWITTER
  },
  googleBtn: {
    backgroundColor: nowTheme.COLORS.GOOGLE
  },
  linkedinBtn: {
    backgroundColor: nowTheme.COLORS.LINKEDIN
  },
  youtubeBtn: {
    backgroundColor: nowTheme.COLORS.YOUTUBE
  },
  pinterestBtn: {
    backgroundColor: nowTheme.COLORS.PINTEREST
  },
  tumblrBtn: {
    backgroundColor: nowTheme.COLORS.TUMBLR
  },
  dribbbleBtn: {
    backgroundColor: nowTheme.COLORS.DRIBBBLE
  },
  redditBtn: {
    backgroundColor: nowTheme.COLORS.REDDIT
  },
  behanceBtn: {
    backgroundColor: nowTheme.COLORS.BEHANCE
  },
  tagContainer:{
    backgroundColor: "#FF3636",
    paddingVertical: 3,
    paddingVertical:8,
    borderRadius: 12,
    height:30
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
    fontFamily: "open-sans-bold"
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    fontFamily: "open-sans-regular"
    // paddingBottom: theme.SIZES.BASE * 2,
  },
  textArea: {
    borderBottomWidth: 1,
    padding: 5,
    height: 50
  }
});

export default Elements;
