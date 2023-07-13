import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { assets } from "../../constants";
import styles from "../../constants/styles";
import { SIZES } from "../../constants";
import SearchBarComponent from "../Inputs";
import FilterComponent from "../Filters";
import { MenuButton } from "../Buttons";


//------------------------MAIN HEADER----------------------------//
function MainHeader() {

  return (
    <View style={styles.MainHeader}>
      <View style={styles.AvatarMenu}>
        <Image style={styles.LogoImage} source={assets.avatar} />
      </View>

      <View style={{alignItems:"center", marginLeft:10}}>
        <Text style={styles.TextM}>¡Bienvenido Leandro!</Text>
      </View>
      <MenuButton/>
    </View>
  );
}

export default MainHeader;

