import React from 'react';
import { Easing, Animated } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import { Icon } from '../components';
import { nowTheme } from '../constants';
// screens
import Home from '../screens/Home';
// import Onboarding from "../screens/Onboarding";
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Components from '../screens/Components';
import Articles from '../screens/Articles';
import Beauty from '../screens/Beauty';
import Category from '../screens/Category';
import Fashion from '../screens/Fashion';
import Product from '../screens/Product';
import Gallery from '../screens/Gallery';
import Chat from '../screens/Chat';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
// settings
import SettingsScreen from '../screens/Settings';
import AgreementScreen from '../screens/Agreement';
import PrivacyScreen from '../screens/Privacy';
import AboutScreen from '../screens/About';
import NotificationsScreen from '../screens/Notifications';
// Notifications
import PersonalNotifications from '../screens/PersonalNotifications';
import SystemNotifications from '../screens/SystemNotifications';

// drawer
import Menu from './Menu';
import DrawerItem from '../components/DrawerItem';

// header for screens
import Header from '../components/Header';
import tabs from '../constants/tabs';

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

const NotificationsStack = createBottomTabNavigator(
  {
    Personal: PersonalNotifications,
    System: SystemNotifications
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Personal') {
          iconName = 'user';
        } else if (routeName === 'System') {
          iconName = 'database';
        }
        // You can return any component that you like here!
        return (
          <Icon
            name={iconName}
            family="entypo"
            size={22}
            color={tintColor}
            style={{ marginTop: 10 }}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: nowTheme.COLORS.PRIMARY,
      inactiveTintColor: 'gray',
      labelStyle: {
        fontFamily: 'montserrat-regular'
      }
    }
  }
);

const ComponentsStack = createStackNavigator(
  {
    Components: {
      screen: Components,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Components" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: '#F8F9FE'
    },
    transitionConfig
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Settings" navigation={navigation} />
      })
    },
    Agreement: {
      screen: AgreementScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="User Agreement" navigation={navigation} />
      })
    },
    Privacy: {
      screen: PrivacyScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Privacy Policy" navigation={navigation} />
      })
    },
    About: {
      screen: AboutScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="About us" navigation={navigation} />
      })
    },
    NotificationsSettings: {
      screen: NotificationsScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Notifications" navigation={navigation} />
      })
    },
    Cart: {
      screen: Cart,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Shopping Cart" navigation={navigation} />
      })
    },
    Notifications: {
      screen: NotificationsStack,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Notifications" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#F8F9FE' },
    transitionConfig
  }
);

const ArticlesStack = createStackNavigator(
  {
    Articles: {
      screen: Articles,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Articles" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: '#F8F9FE'
    },
    transitionConfig
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    },
    Cart: {
      screen: Cart,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Shopping Cart" navigation={navigation} />
      })
    },
    Notifications: {
      screen: NotificationsStack,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Notifications" navigation={navigation} />
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
        header: <Header search options title="Home" navigation={navigation} />
      })
    },
    Beauty: {
      screen: Beauty,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Beauty" tabs={tabs.beauty} navigation={navigation} />
      })
    },
    Category: {
      screen: Category,
      navigationOptions: ({ navigation }) => {
        const { params } = navigation.state;
        const title = (params && params.title) || 'Category';
        return {
          header: <Header back title={title} navigation={navigation} />
        };
      }
    },
    Fashion: {
      screen: Fashion,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Fashion" tabs={tabs.fashion} navigation={navigation} />
      })
    },
    Product: {
      screen: Product,
      navigationOptions: ({ navigation }) => ({
        header: <Header back white transparent title="" navigation={navigation} />,
        headerTransparent: true
      })
    },
    Gallery: {
      screen: Gallery,
      navigationOptions: ({ navigation }) => ({
        header: <Header back white transparent title="" navigation={navigation} />,
        headerTransparent: true
      })
    },
    Chat: {
      screen: Chat,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Rachel Brown" navigation={navigation} />
      })
    },
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Search" navigation={navigation} />
      })
    },
    Cart: {
      screen: Cart,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Shopping Cart" navigation={navigation} />
      })
    },
    Notifications: {
      screen: NotificationsStack,
      navigationOptions: ({ navigation }) => ({
        header: <Header back title="Notifications" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: '#F8F9FE'
    },
    transitionConfig
  }
);

const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Pro,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem focused={focused} title="Home" />
      })
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem focused={focused} title="Examples" />
      })
    },
    Components: {
      screen: ComponentsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Components" title="Components" />
        )
      })
    },
    Articles: {
      screen: ArticlesStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Articles" title="Articles" />
        )
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
    Account: {
      screen: Register,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Account" />
        )
      })
    }
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
