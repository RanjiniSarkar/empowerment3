import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

var items = [
  {
    id: 1,
    name: "JavaScript"
  },
  {
    id: 2,
    name: "Java"
  },
  {
    id: 3,
    name: "Ruby"
  },
  {
    id: 4,
    name: "React Native"
  },
  {
    id: 5,
    name: "PHP"
  },
  {
    id: 6,
    name: "Python"
  },
  {
    id: 7,
    name: "Go"
  },
  {
    id: 8,
    name: "Swift"
  }
];

class CustomInput extends Component {
  render() {
    return (
      <SearchableDropdown
        multi={true}
        onItemSelect={item => {
          
        }}
        containerStyle={{ padding: 5 }}
        itemStyle={styles.item}
        itemTextStyle={{ color: "#222" }}
        itemsContainerStyle={{ maxHeight: 140 }}
        items={items}
        defaultIndex={2}
        chip={true}
        resetValue={false}
        textInputProps={{
          placeholder: "placeholder",
          underlineColorAndroid: "transparent",
          style: styles.textInput
        }}
        listProps={{
          nestedScrollEnabled: true
        }}
        onItemSelect
      />
    );
  }
}

export default CustomInput;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#ddd",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5
  },
  textInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  }
});
