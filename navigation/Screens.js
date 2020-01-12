import React from 'react';
import { Block } from 'galio-framework';
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
// screens
import Home from '../screens/Home';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Components from '../screens/Components';
import Articles from '../screens/Articles';
import Onboarding from '../screens/Onboarding';
import Welcome from '../screens/Welcome';
import AddCard from '../screens/AddCard';
import Preference from "../screens/Preference";
import Payment from "../screens/Payment";
import RewardGain from '../screens/Reward_Gain';
import DiscountDisplay from "../screens/DiscountDisplay";
// settings
import SettingsScreen from '../screens/Settings';

// drawer
import Menu from './Menu';
import DrawerItem from '../components/DrawerItem';

// header for screens
import Header from '../components/Header';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = 'Search';

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

// const ComponentsStack = createStackNavigator(
//   {
//     Components: {
//       screen: Components,
//       navigationOptions: ({ navigation }) => ({
//         header: <Header title="Components" navigation={navigation} />
//       })
//     }
//   },
//   {
//     cardStyle: {
//       backgroundColor: '#FFFFFF'
//     },
//     transitionConfig
//   }
// );
//
// const SettingsStack = createStackNavigator(
//   {
//     Settings: {
//       screen: SettingsScreen,
//       navigationOptions: ({ navigation }) => ({
//         header: <Header title="Settings" navigation={navigation} />
//       })
//     }
//   },
//   {
//     cardStyle: { backgroundColor: '#FFFFFF' },
//     transitionConfig
//   }
// );
//
// const ArticlesStack = createStackNavigator(
//   {
//     Articles: {
//       screen: Articles,
//       navigationOptions: ({ navigation }) => ({
//         header: <Header title="Articles" navigation={navigation} />
//       })
//     }
//   },
//   {
//     cardStyle: {
//       backgroundColor: '#FFFFFF'
//     },
//     transitionConfig
//   }
// );
const PreferenceStack = createStackNavigator(
    {
      Preference: {
        screen: Preference,
        navigationOptions: ({ navigation }) => ({
          header: <Header title="Reward Type Preference" navigation={navigation} />
        })
      }
    },
);
const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation}/>
        ),
        headerTransparent: true
      })
    }
  }
);

// const AccountStack = createStackNavigator(
//   {
//     Account: {
//       screen: Register,
//       navigationOptions: ({ navigation }) => ({
//         header: (
//           <Header transparent title="Create Account" iconColor={'#333'} navigation={navigation} />
//         ),
//         headerTransparent: true
//       })
//     }
//   },
//   {
//     cardStyle: { backgroundColor: '#FFFFFF' },
//     transitionConfig
//   }
// );

const AddCardStack = createStackNavigator(
  {
    AddCard: {
      screen: AddCard,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="Add Credit Card" iconColor={'#333'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const RewardGainStack = createStackNavigator(
  {
    RewardGain: {
      screen: RewardGain,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="Reward Gained" iconColor={'#333'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const DiscountDisplayStack = createStackNavigator(
  {
    DiscountDisplay: {
      screen: DiscountDisplay,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="Discount" iconColor={'#333'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Home" navigation={navigation} />
      })
    },
    // Pro: {
    //   screen: Pro,
    //   navigationOptions: ({ navigation }) => ({
    //     header: (
    //       <Header left={<Block />} white transparent title="" navigation={navigation} />
    //     ),
    //     headerTransparent: true
    //   })
    // }
  },
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);

const AppStack = createDrawerNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
      Payment: {
          screen: Payment,
          navigationOptions: {
              drawerLabel: () => { }
          }
      },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem focused={focused} title="Home" />
      })
    },
    // Components: {
    //   screen: ComponentsStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Components" title="Components" />
    //     )
    //   })
    // },
      DiscountDisplay: {
          screen: DiscountDisplayStack,
          navigationOptions: {
              drawerLabel: ({ focused }) => <DrawerItem focused={focused} title="DiscountDisplay" />
          }
      },
    AddCard: {
      screen: AddCardStack,
      navigationOptions: {
        drawerLabel: ({ focused }) => <DrawerItem focused={focused} title="Add Card" />
      }
    },
    Reward_Gain: {
      screen: RewardGainStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem focused={focused} title="Reward Gained" />
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Profile" />
        )
      })
    },
    Preference: {
      screen: PreferenceStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
            <DrawerItem focused={focused} screen="Preference" title="Reward Type Preference" />
        )
      })
    },
    // Articles: {
    //   screen: ArticlesStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Articles" title="Articles" />
    //     )
    //   })
    // },
    // Account: {
    //   screen: AccountStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Register" title="Account" />
    //     )
    //   })
    // }
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
