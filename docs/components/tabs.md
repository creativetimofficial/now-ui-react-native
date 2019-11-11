# Tabs

Used inside the Header component with the purpose of having a different kind of Tab navigation.

### Usage

Simple example:

```
<Tabs
  data={tabs || []}
  initialIndex={tabIndex || defaultTab}
  onChange={id => navigation.setParams({ tabId: id })}
/>
```
<p align="center">
  <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-react-native/tabs.png" width="374px">
</p>


### Props

|                                          Prop                                          | Type  | Default | Description |
| :------------------------------------------------------------------------------------: | :---: | :-----: | :---------: |
|                                          data                                          | array |  null   |             |
| [...FlatList.propTypes](https://facebook.github.io/react-native/docs/flatlist#docsNav) |       |         |             |

### FlatList

This was built using React Native's FlatList component on which you can find more about clicking [here](https://facebook.github.io/react-native/docs/flatlist).
