import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, nowTheme } from '../constants/';
import {Card, Input, Select} from '../components/';

class Preference extends React.Component {
    renderPreference1 = () => {
        return (
            <Block style={styles.container}>
                <Text size={16} style={styles.title}>
                    1st Preference
                </Text>
            </Block>
        );
    };
    renderPreference2 = () => {
        return (
            <Block style={styles.container}>
                <Text size={16} style={styles.title}>
                    2nd Preference
                </Text>
            </Block>
        );
    };
    renderPreference3 = () => {
        return (
            <Block style={styles.container}>
                <Text size={16} style={styles.title}>
                    3rd Preference
                </Text>
            </Block>
        );
    };
    render() {
        return (
            <Block flex>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderPreference1()}
                    <Block flex center>
                        <Select  options={['Asian Miles', 'Cash Reward', 'Reward-U', 'enJoy Dollars']} />
                    </Block>
                    {this.renderPreference2()}
                    <Block flex center>
                    <Select  options={['Asian Miles', 'Cash Reward', 'Reward-U', 'enJoy Dollars']} />
                </Block>
                    {this.renderPreference3()}
                    <Block flex center>
                        <Select  options={['Asian Miles', 'Cash Reward', 'Reward-U', 'enJoy Dollars']} />
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
    title: {
        fontFamily: 'montserrat-bold',
        paddingBottom: theme.SIZES.BASE,
        marginTop: 44,
        color: nowTheme.COLORS.HEADER

    }
});

export default Preference;
