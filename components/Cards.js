import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../constants/styles";
import { PriorIndicator, StateIndicator, WordPriorIndicator, WordStateIndicator } from "./Indicators";
import { COLORS, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { FavButton, OpenTicketButton } from "./Buttons";
import { Icon } from "react-native-elements";

export const TicketCard = ({nombre, solicitante, numero, plazo, estado, prioridad, handlePress}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.TicketCardContainer}>
            <View style={styles.TicketCardDeck}>
                <View style={styles.NombreContent}>
                    <View style={styles.VertDivisor}>
                        <Text style={styles.TicketCardName}>{nombre}</Text>
                    </View>
                    <FavButton/>
                </View>
                <View style={styles.TicketCardView}>                    
                    <View style={styles.CardContent}>
                        <Icon name="person-outline" color={COLORS.gray}/>
                        <Text 
                            style={styles.CardTextM} 
                            numberOfLines={1}>Solicitante: {solicitante}</Text>
                    </View>
                    <View style={styles.CardContent}>
                        <Icon name="receipt-long" color={COLORS.gray}/>
                        <Text style={styles.CardTextM}>Ticket N°: {numero}</Text>
                    </View>  
                    <View style={styles.CardContent}>
                        <Icon name="timelapse" color={COLORS.gray}/>
                        <Text style={styles.CardTextM}>Plazo: {plazo} días</Text>
                    </View>
                    <View style={styles.CardContent}>
                        <Icon name="linear-scale" color={COLORS.gray}/>
                        <Text style={styles.CardTextM}>Estado:</Text>
                        <WordStateIndicator estado={estado}/>
                    </View>               
                    <View style={styles.CardContent}>
                        <Icon name="priority-high" color={COLORS.gray}/>
                        <Text style={styles.CardTextM}>Prioridad:</Text>
                        <WordPriorIndicator prioridad={prioridad}/>
                    </View>
                    <OpenTicketButton handlePress={handlePress}/>
                </View>
            </View>
        </View>
    );
};