## [1.4.0] 2020 - 03 - 08
### Updated dependencies
- updated `@react-navigation/drawer@5.8.1` to `@react-navigation/drawer@5.12.4`
- updated `@react-navigation/native@5.5.0` to `@react-navigation/native@5.9.3`
- updated `@react-navigation/stack@5.4.1` to `@react-navigation/stack@5.14.3`
- updated `expo SDK@39` to `expo SDK@40`
- updated `expo-asset@8.2.0` to `expo-asset@8.2.1`
- updated `expo-font@8.3.0` to `expo-font@8.4.0`
- updated `react-native SDK@39` to `react-native SDK@40`
- updated `react-native-gesture-handler@1.7.0` to `react-native-gesture-handler@1.8.0`
- updated `react-native-safe-area-context@3.1.4` to `react-native-safe-area-context@3.1.9`
- updated `react-native-screens@2.10.1` to `react-native-screens@2.15.2`
- added `expo-app-loading@1.01`

### Updated files
- `useNativeDriver` warning solved for `Tabs.js`

## [1.3.0] 2020 - 11 - 06
### Updated dependencies
- updated `@react-native-community/masked-view@0.1.6` to `@react-native-community/masked-view@0.1.10`
- updated `expo@37` to `expo@39`
- updated `expo-asset@8.1.5` to `expo-asset@8.2.0`
- updated `expo-font@8.1.0 ` to `expo-font@8.3.0`
- updated `galio-framework@0.6.3` to `galio-framework@0.7.1`
- updated `react@16.9.0` to `react@16.13.1`
- updated `react-native SDK@37` to `react-native SDK@39`
- updated `react-native-gesture-handler@1.6.0` to `react-native-gesture-handler@1.7.0`
- updated `react-native-reanimated@1.7.0` to `react-native-reanimated@1.13.0`
- updated `react-native-safe-area-context@0.7.3 ` to `react-native-safe-area-context@3.1.4`
- updated `react-native-screens@2.2.0` to `react-native-screens@2.10.1`
- updated `react-native-svg@11.0.1` to `react-native-svg@12.1.0`
- changed the git source for react-native-modal-dropdown
### Updated files
- App.js - removed `packagerOpts` which solved Expo failed loading
- Components.js - fixed layout for ScrollView, Horizontal Gallery and Select positioning
- Header.js - fixed search input autofocusing and creating an error where the back button wouldn't work anymore keeping the user in a loop

## [1.2.0] 2020 - 06 - 20
### Updated dependencies
- updated `expo-asset@8.0.0` to `expo-asset@8.1.5`
- updated `expo-font@8.0.0` to `expo-font@8.1.0`
- updated `react-native-gesture-handler@1.5.0` to  `react-native-gesture-handler@1.6.0`
- updated `react-native-reanimated@1.4.0` to `react-native-reanimated@1.7.0`
- updated `react-native-screens@2.0.0-alpha.12` to `react-native-screens@2.2.0`
- updated `react-native-safe-area-context@0.6.0` to `react-native-safe-area-context@0.7.3`
- updated `@react-native-community/masked-view@0.1.5` to `@react-native-community/masked-view@0.1.6`
- updated `react-native SDK@36.0.0` to `react-native SDK@37.0.0`
- updated `babel-preset-expo@7.0.0` to `babel-preset-expo@8.2.1`
- updated `Expo @36.0.0` to `Expo @37.0.0`
- updated `@react-navigation/native@5.0.0` to `@react-navigation/native@5.5.0`
- updated `@react-navigation/stack@5.0.0` to `@react-navigation/stack@5.4.1`
- updated `@react-navigation/compat@5.0.0` to `@react-navigation/compat@5.1.25`
- updated `@react-navigation/bottom-tabs@5.0.0` to `@react-navigation/bottom-tabs@5.5.1`
- updated `@react-navigation/drawer@5.0.0` to `@react-navigation/drawer@5.8.1`

### Updated files
- change function for fontLoading in `App.js`, this should fix the often occurrence of the error
- moved `assets/font/now.json` to `assets/config/now.json` in order to make sure there wouldn't be any issue with the build for Android
- edited `Header.js` in order to fix the Pro routing error
- edited `Screens.js` and fixed the headerless Components Screen

## [1.1.0] 2020 - 03 - 12
### Removed dependencies
- removed `react-navigation@4.0.10`
### Added dependencies
- added `@react-navigation/compat@5.0.0`
- added `@react-navigation/drawer@5.0.0`
- added `@react-navigation/native@5.0.0`
- added `@react-navigation/stack@5.0.0`
- added `@react-native-community/masked-view@0.1.5`
- added `react-native-reanimated@1.4.0`
- added `react-native-safe-area-context@0.6.0`
- added `react-native-screeens@2.0.0-alpha.12`
### Updated dependencies
- updated `expo@35.0.0` to `expo@36.0.1`
- updated `expo-asset@7.0.0` to `expo-asset@8.0.0`
- updated `expo-font@7.0.0` to `expo-font@8.0.0`
- updated `react@16.8.3` to `react@16.9.0`
- updated `babel-preset-expo@7.1.0` to `babel-preset-expo@8.0.0`
### Updated files
- changed the whole routing from `Screens.js` because `react-navigation@5.0.0` has a new dynamic API
- changed `Menu.js` for a new Drawer custom component
- changed `DrawerItem.js` for a new type of `<DrawerCustomItem />`
- changed props and variables so that the new `react-navigation` API could work with the following files: `Header.js`, `Pro.js`, `Settings.js`, `Search.js`, `Cart.js`, 'Card.js`, `Onboarding.js`

## [1.0.1] 2019-11-12
### HotFix
- small fix on responsive for Profile Page
- added pre-cache for images for a faster experience

## [1.0.0] 2019-11-11

### Initial Release
