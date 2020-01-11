import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { Images, nowTheme} from '../constants/';
import {Card, Input, Select} from '../components/';
const { height, width } = Dimensions.get('screen');


class Payment extends React.Component {
    renderImage = () => {
        return (
            <Block flex middle height={200}>
                <Image source={Images.ApplePaymentConnecting} style={{ width: 200, height: 200}} resizeMode={'contain'} />
            </Block>
        );
    };


    render() {
        return (
            <Block flex>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Block
                        middle
                        style={{
                            marginTop: theme.SIZES.BASE * 20,
                            marginBottom: theme.SIZES.BASE * 2.5,
                            marginLeft: theme.SIZES.BASE,
                            marginRight: theme.SIZES.BASE,
                            backgroundColor: nowTheme.COLORS.WHITE,
                            borderRadius: 30,
                            height,
                            width
                        }}
                    >
                    {this.renderImage()}
                    </Block>
                </ScrollView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: theme.SIZES.BASE
    },

});

export default Payment;
