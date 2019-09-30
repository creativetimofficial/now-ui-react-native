import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground
} from 'react-native';
// Galio components
import { Block, Text, Button as GaButton, theme } from 'galio-framework';

// Now UI themed components
import { articles, Images, nowTheme, tabs } from '../constants';
import { Button, Select, Icon, Input, Header, Switch } from '../components';

import Img from '../components/Img';
import { Card } from '../components';

const { width } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkSelected: [],
      'switch-1': true,
      'switch-2': false,
      progress: 0,
      value: 50,
      checked: false,
      borderTextArea: '#E3E3E3',
      textTag: 'City',
      tags: ['Washington', 'Sydney', 'Beijing']
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

  toggleSwitch = switchId => this.setState({ [switchId]: !this.state[switchId] });

  renderButtons = () => {
    return (
      <Block flex>
        <Text size={16} style={styles.title}>
          Buttons
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block center>
            <Button
              textStyle={{ fontFamily: 'montserrat-regular' }}
              color="default"
              style={styles.button}
            >
              DEFAULT
            </Button>
          </Block>
          <Block center>
            <Button
              color="secondary"
              textStyle={{ fontFamily: 'montserrat-regular' }}
              style={styles.button}
            >
              SECONDARY
            </Button>
          </Block>
          <Block center>
            <Button textStyle={{ fontFamily: 'montserrat-regular' }} style={styles.button}>
              PRIMARY
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: 'montserrat-regular' }}
              color="info"
              style={styles.button}
            >
              INFO
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: 'montserrat-regular' }}
              color="success"
              style={styles.button}
            >
              SUCCESS
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: 'montserrat-regular' }}
              color="warning"
              style={styles.button}
            >
              WARNING
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: 'montserrat-regular' }}
              color="error"
              style={styles.button}
            >
              ERROR
            </Button>
          </Block>
          <Block center>
            <Button
              textStyle={{ fontFamily: 'montserrat-regular', color: nowTheme.COLORS.PRIMARY }}
              color="neutral"
              style={styles.button}
            >
              Neutral
            </Button>
          </Block>
          <Block row space="evenly">
            <Block flex left>
              <Select defaultIndex={1} options={['01', '02', '03', '04', '05']} />
            </Block>
            <Block flex center>
              <Button
                textStyle={{ fontFamily: 'montserrat-bold', fontSize: 12 }}
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
                textStyle={{ fontFamily: 'montserrat-bold', fontSize: 12 }}
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
              fontFamily: 'montserrat-regular',
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 1
          </Text>
          <Text
            h2
            style={{
              fontFamily: 'montserrat-regular',
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 2
          </Text>
          <Text
            h3
            style={{
              fontFamily: 'montserrat-regular',
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 3
          </Text>
          <Text
            h4
            style={{
              fontFamily: 'montserrat-regular',
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 4
          </Text>
          <Text
            h5
            style={{
              fontFamily: 'montserrat-regular',
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Heading 5
          </Text>
          <Text
            p
            style={{
              fontFamily: 'montserrat-regular',
              marginBottom: theme.SIZES.BASE / 2
            }}
            color={nowTheme.COLORS.DEFAULT}
          >
            Paragraph
          </Text>
          <Text style={{ fontFamily: 'montserrat-regular' }} muted>
            This is a muted paragraph.
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
            success
            right
            placeholder="Success"
            iconContent={
              <Icon size={11} color={nowTheme.COLORS.SUCCESS} name="check-22x" family="NowExtra" />
            }
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            error
            right
            placeholder="Error Input"
            iconContent={
              <Icon
                size={11}
                color={nowTheme.COLORS.INPUT_ERROR}
                name="simple-remove2x"
                family="NowExtra"
              />
            }
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            placeholder="Left Font Awesome Icon"
            iconContent={
              <Icon
                size={11}
                style={{ marginRight: 10 }}
                color={nowTheme.COLORS.ICON}
                name="zoom-bold2x"
                family="NowExtra"
              />
            }
          />
        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Icon Right"
            iconContent={
              <Icon size={11} color={nowTheme.COLORS.ICON} name="single" family="NowExtra" />
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
          <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE }}>
            <Text
              style={{ fontFamily: 'montserrat-regular' }}
              size={14}
              color={nowTheme.COLORS.TEXT}
            >
              Switch is ON
            </Text>
            <Switch
              value={this.state['switch-1']}
              onValueChange={() => this.toggleSwitch('switch-1')}
            />
          </Block>
          <Block row middle space="between">
            <Text
              style={{ fontFamily: 'montserrat-regular' }}
              size={14}
              color={nowTheme.COLORS.TEXT}
            >
              Switch is OFF
            </Text>
            <Switch
              value={this.state['switch-2']}
              onValueChange={() => this.toggleSwitch('switch-2')}
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
            <TouchableOpacity onPress={() => navigation.navigate('Pro')}>
              <Block row middle space="between" style={{ paddingTop: 7 }}>
                <Text
                  style={{ fontFamily: 'montserrat-regular' }}
                  size={14}
                  color={nowTheme.COLORS.TEXT}
                >
                  Manage Options
                </Text>
                <Icon name="chevron-right" family="entypo" style={{ paddingRight: 5 }} />
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
              white={true}
            />
          </Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header search title="Title" navigation={this.props.navigation} />
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
              <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <Card item={articles[2]} />
            </Block>
            <Card item={articles[4]} full />
            <Card item={articles[5]} full titleStyle={styles.productTitle} />
            <Card item={articles[5]} full titleStyle={styles.productTitle} />
            <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: Images.Products['View article'] }}
                style={[styles.imageBlock, { width: width - theme.SIZES.BASE * 2, height: 252 }]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text
                    style={{ fontFamily: 'montserrat-bold' }}
                    size={18}
                    color={theme.COLORS.WHITE}
                  >
                    View article
                  </Text>
                </Block>
              </ImageBackground>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };
  renderAlbums = () => {
    const { navigation } = this.props;

    return (
      <Block flex style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block row space="between">
            <Text bold size={16} color="#525F7F" style={{ marginTop: 3 }}>
              Album
            </Text>
            <Button small color="transparent" textStyle={{ color: '#5E72E4', fontSize: 14 }}>
              View All
            </Button>
          </Block>
          <Block row space="between" style={{ marginTop: theme.SIZES.BASE, flexWrap: 'wrap' }}>
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image resizeMode="cover" source={{ uri: img }} style={styles.albumThumb} />
              </Block>
            ))}
          </Block>
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
          {this.renderSocial()}
          {this.renderSwitches()}
          {this.renderTableCell()}
          {this.renderNavigation()}
          {this.renderCards()}
          {this.renderAlbums()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center'
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: 'black',
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
    width: 'auto',
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  productTitle: {
    color: nowTheme.COLORS.PRIMARY,
    textAlign: 'center',
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});

export default Components;
