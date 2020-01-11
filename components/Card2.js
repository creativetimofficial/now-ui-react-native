import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableWithoutFeedback, Alert, Dimensions } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { nowTheme } from '../constants';
const { width } = Dimensions.get("screen");

class Card2 extends React.Component {
  render() {
    const {
      navigation,
      item,
      horizontal,
      full,
      style,
      ctaColor,
      imageStyle,
      ctaRight,
      titleStyle
    } = this.props;

    const titleStyles = [styles.cardTitle, titleStyle];
    const cardContainer = [styles.card, style];
    const imgContainer = [
      styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Payment', { otherParam: 'awda' });
          }}
        >
          <Block flex style={imgContainer}>
            <Image source={item.image} style={styles.fullImage}/>
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Block width={width-40} style={{ marginLeft: 20, marginRight: 20 }}>
            <Text
              style={{ fontFamily: 'montserrat-regular', textAlign: 'left', marginBottom:10 }}
              size={19}
              bold
              color={nowTheme.COLORS.SECONDARY}
            >
              {item.title}
            </Text>
            <Text
              style={{ fontFamily: 'montserrat-regular', textAlign: 'left' }}
              size={14}
              color={nowTheme.COLORS.SECONDARY}
            >
              {item.description}
            </Text>


          </Block>

        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card2.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
  ctaRight: PropTypes.bool,
  titleStyle: PropTypes.any,
  textBodyStyle: PropTypes.any
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: 0,
    minHeight: 114,
    marginBottom: 0
  },
  cardTitle: {
    paddingHorizontal: 9,
    paddingTop: 7,
    paddingBottom: 15
  },
  cardDescription: {
    justifyContent: 'center'
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden'
  },
  image: {
    borderRadius: 3
  },
  horizontalImage: {
    height: 122,
    width: 'auto'
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    flex: 1,
    width: 380,
    height: 310,
    resizeMode: 'contain'
  },
  shadow: {
    shadowColor: '#8898AA',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2
  },
  articleButton: {
    fontFamily: 'montserrat-bold',
    paddingHorizontal: 9,
    paddingVertical: 7
  }
});

export default withNavigation(Card2);
