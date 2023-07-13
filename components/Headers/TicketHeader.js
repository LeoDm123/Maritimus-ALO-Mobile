import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { assets } from "../../constants";
import styles from "../../constants/styles";
import { BackButton } from "../Buttons";
import { useNavigation } from "@react-navigation/native";
import { HeaderFavButton } from "../Buttons";


//------------------------MAIN HEADER----------------------------//
function TicketHeader({TicketName}) {
  const navigation = useNavigation();

  return (
     <View style={styles.Header}>
      <BackButton imgUrl={assets.left} handlePress={() => navigation.goBack()}/>

      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={styles.HeaderTitle}>Detalles del Ticket</Text>
      </View>

      <HeaderFavButton/>
    </View>
  );
}

export default TicketHeader;

