import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Picker, Platform,
  ActivityIndicator
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme, Icon } from 'galio-framework';

import { Button, Input } from '../components';
import { Images, nowTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
import { Image } from 'react-native';
import { articles } from '../constants'

const { width, height } = Dimensions.get('screen');

const BANK = [{
  key: '',
  value: ''
}, {
  key: 'dbs',
  value: 'DBS'
}, {
  key: 'citi',
  value: 'CITI'
}, {
  key: 'sc',
  value: 'STANDARD CHARTERED'
}, {
  key: 'hangseng',
  value: 'HANG SENG'
}, {
  key: 'hsbc',
  value: 'HSBC'
}, {
  key: 'boc',
  value: 'BOC'
}, {
  key: 'bea',
  value: 'BEA'
}];

const CARD = [{
  key: '',
  value: ''
}, {
  key: 'visainfinite',
  value: 'Visa Infinite'
}, {
  key: 'mastercard',
  value: 'Prestige World Mastercard'
}, {
  key: 'platinum',
  value: 'Platinum Card'
}, {
  key: 'enjoycard',
  value: 'Enjoy Card'
}, {
  key: 'muji',
  value: 'MUJI Card'
}, {
  key: 'foreverfriend',
  value: 'Forever Friends Card'
}, {
  key: 'bupa',
  value: 'BUPA Card'
}];

class AddCard extends React.Component {
  state = {
    selectedCategory: '',
    selectedBank: '',
    selectedCard: '',
    added: false,
    loading: false
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleBankChange = value => this.setState({ selectedBank: value });

  handleCardChange = value => this.setState({ selectedCard: value });

  renderPickerItems = params => {
    const { items, action, selected } = params;
    return (
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue, itemIndex) => action(itemValue)}
        itemStyle={{ color: nowTheme.COLORS.BLACK }}
        style={{ height: 220 }}
      >
        {items.map(item => <Picker.Item key={item.key} label={item.value} value={item.key}/>)}
      </Picker>
    );
  };

  handleSubmit = () => {
    this.setState({ loading: true });
    this.timer = setInterval(
      () => {
        this.setState({ added: true, loading: false });
      },
      2000
    );
  };

  render() {
    return (
      <Block flex middle>
        <Block flex middle>
          <Block style={styles.registerContainer}>
            <Block flex={1}>
              <Block middle style={{ margin: 30 }}>
                <Text
                  style={{
                    fontFamily: 'montserrat-regular',
                    textAlign: 'center',
                    width: '100%'
                  }}
                  color="#333"
                  size={23}
                >
                  <Text>Please indicate which credit card you have:</Text>
                </Text>
              </Block>
              <Block
                style={{ marginBottom: 25, height: 37, backgroundColor: nowTheme.COLORS.PLACEHOLDER, width: '100%' }}
                middle>
                <Text
                  style={{
                    fontFamily: 'montserrat-regular',
                    textAlign: 'center'
                  }}
                  color={nowTheme.COLORS.WHITE}
                  size={20}
                >
                  BANK NAME
                </Text>
              </Block>
              <Block style={{ width: width, height: 37 }}>
                <Text
                  style={{
                    fontFamily: 'montserrat-regular',
                    textAlign: 'center'
                  }}
                  onPress={() => this.setState({ selectedCategory: 'bank' })}
                  color={nowTheme.COLORS.BLACK}
                  size={20}
                >
                  {this.state.selectedBank ? BANK.find(bank => bank.key === this.state.selectedBank).value : 'Please Select'}
                </Text>
              </Block>
              <Block
                style={{
                  marginBottom: 15,
                  marginTop: 25,
                  height: 37,
                  backgroundColor: nowTheme.COLORS.PLACEHOLDER,
                  width: '100%'
                }}
                middle
              >
                <Text
                  style={{
                    fontFamily: 'montserrat-regular',
                    textAlign: 'center'
                  }}
                  color={nowTheme.COLORS.WHITE}
                  size={20}
                >
                  CARD TYPE
                </Text>
              </Block>
              <Block style={{ width: width, height: 37 }}>
                <Text
                  style={{
                    fontFamily: 'montserrat-regular',
                    textAlign: 'center'
                  }}
                  onPress={() => this.setState({ selectedCategory: 'card' })}
                  color={nowTheme.COLORS.BLACK}
                  size={20}
                >
                  {this.state.selectedCard ? CARD.find(card => card.key === this.state.selectedCard).value : 'Please Select'}
                </Text>
              </Block>
            </Block>
            {this.state.added ? (
              <Block middle flex={1}>
                <Image source={articles[3].image}
                       style={{ top:-180, width: 280, height: 220, zIndex: 999 }}
                       resizeMode={'contain'}/>
              </Block>
            ) : (
              <Block flex={1}>
                {this.state.loading ? (
                  <ActivityIndicator size="large" color={nowTheme.COLORS.BACKGROUND}/>
                ) : (
                  <Block>
                    {this.state.selectedCategory !== '' ? this.renderPickerItems(this.state.selectedCategory === 'bank' ? {
                      selected: this.state.selectedBank,
                      items: BANK,
                      action: this.handleBankChange
                    } : {
                      selected: this.state.selectedCard,
                      items: CARD,
                      action: this.handleCardChange
                    }) : null}
                  </Block>
                )}
              </Block>
            )}
          </Block>
        </Block>
        {this.state.added ? (
          <Block>
            <Button style={{ marginBottom: 30 }} round uppercase
                    color="info" onPress={() => this.props.navigation.navigate('Home')}>complete</Button>
          </Block>
        ) : (
          <Block>
            <Button
              style={{ marginBottom: 30 }}
              disabled={this.state.selectedBank === '' || this.state.selectedCard === '' || this.state.added}
              onPress={this.handleSubmit}
              round
              uppercase
              color="error"
            >
              add
            </Button>
          </Block>)}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  imageBackground: {},
  registerContainer: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 200,
    // width: width * 0.9,
    // height: height < 812 ? height * 0.8 : height * 0.8,
    width: width,
    height: height,
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
    overflow: 'hidden'
  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
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
    fontWeight: '800',
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5
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
    justifyContent: 'center',
    marginHorizontal: 10
  }
});

export default AddCard;
