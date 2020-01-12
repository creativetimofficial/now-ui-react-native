import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { Images, nowTheme} from '../constants/';
import {Card, Input, Select} from '../components/';
const { height, width } = Dimensions.get('screen');


class Payment extends React.Component {
    componentDidMount(){
        // Toggle the state every second
        setInterval(() => (
            this.setState(previousState => (
                { change: false }
            ))
        ), 5000);
    }

    state = { change: true };

    renderImageApplePay = () => {
        return (
            <Block flex middle height={200}>
                <Image source={Images.ApplePaymentConnecting} style={{ width: 200, height: 200}} resizeMode={'contain'} />
            </Block>
        );
    };

    renderImageCardWise = () => {
        return (
            <Block flex middle height={200} >
                <Image source={Images.CardWise} style={{ width: 200, height: 200}} resizeMode={'contain'}/>
            </Block>
        );
    };

    render() {
        const { navigation } = this.props;
        if (this.state.change) {
            return (

                <Block flex>
                    <ScrollView showsVerticalScrollIndicator={false} >

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
                            {this.renderImageApplePay()}
                        </Block>

                    </ScrollView>
                </Block>

            );
        }
            return (
                <TouchableWithoutFeedback  onPress={() => {
                    navigation.navigate('Profile');
                }}>
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
                            {this.renderImageCardWise()}
                        </Block>
                    </ScrollView>
                </Block>
                </TouchableWithoutFeedback>
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: theme.SIZES.BASE
    },

});

export default Payment;
