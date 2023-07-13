import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { assets } from "../../constants";
import styles from "../../constants/styles";
import { BackButton, MenuButton } from "../Buttons";
import { useNavigation } from "@react-navigation/native";

//------------------------MAIN HEADER----------------------------//
function NewTicketHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.Header}>
      <BackButton imgUrl={assets.left} handlePress={() => navigation.goBack()}/>

      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={styles.HeaderTitle}>¡Creemos tu nuevo Ticket!</Text>
      </View>

      <MenuButton/>
    </View>
  );
}

export default NewTicketHeader;

