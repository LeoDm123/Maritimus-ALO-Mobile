import React, { useState } from "react";
import styles from "../constants/styles";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const PriorLabels = ["Baja", "Media", "Alta"];
const StateLabels = ["Pendiente", "Aprobado", "Entregado"];

//-----------------------------INDICADOR DE PRIORIDAD--------------------------//
export const PriorIndicator = ({prioridad}) => {
    if (prioridad===1) {
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.Prior1}>
                        <Text style={styles.IndiLabelsOn}>1</Text>
                    </View>
                    <Text style={styles.PiorLabel1}>{PriorLabels[0]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>2</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[1]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>3</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[2]}</Text>
                </View>
            </View>
        ) 
    } else if (prioridad===2) {
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>1</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[0]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.Prior2}>
                        <Text style={styles.IndiLabelsOn}>2</Text>
                    </View>
                    <Text style={styles.PiorLabel2}>{PriorLabels[1]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>3</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[2]}</Text>
                </View>
            </View>
         )
    } else { 
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>1</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[0]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>2</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[1]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.Prior3}>
                        <Text style={styles.IndiLabelsOn}>3</Text>
                    </View>
                    <Text style={styles.PiorLabel3}>{PriorLabels[2]}</Text>
                </View>
            </View>
        )};
};
//-----------------------------INDICADOR DE PRIORIDAD--------------------------//

//-----------------------------INDICADOR DE ESTADO-----------------------------//
export const StateIndicator = ({estado}) => {
    if (estado===1) {
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.State1}>
                        <Text style={styles.IndiLabelsOn}>1</Text>
                    </View>
                    <Text style={styles.StateLabel1}>{StateLabels[0]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>2</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{StateLabels[1]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>3</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{StateLabels[2]}</Text>
                </View>
            </View>
        ) 
    } else if (estado===2) {
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.State2}>
                        <Text style={styles.IndiLabelsOn}>1</Text>
                    </View>
                    <Text style={styles.StateLabel2}>{StateLabels[0]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.State2}>
                        <Text style={styles.IndiLabelsOn}>2</Text>
                    </View>
                    <Text style={styles.StateLabel2}>{StateLabels[1]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>3</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{StateLabels[2]}</Text>
                </View>
            </View>
         )
    } else { 
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.State3}>
                        <Text style={styles.IndiLabelsOn}>1</Text>
                    </View>
                    <Text style={styles.StateLabel3}>{StateLabels[0]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.State3}>
                        <Text style={styles.IndiLabelsOn}>2</Text>
                    </View>
                    <Text style={styles.StateLabel3}>{StateLabels[1]}</Text>
                </View>
                <View style={styles.IndicatorContainerVert}>
                    <View style={styles.State3}>
                        <Text style={styles.IndiLabelsOn}>3</Text>
                    </View>
                    <Text style={styles.StateLabel3}>{StateLabels[2]}</Text>
                </View>
            </View>
        )};
};
//-----------------------------INDICADOR DE ESTADO-----------------------------//


//-----------------------------SETTER DE PRIORIDAD-----------------------------//
export const PriorSetter = ({ prioridad, setPrioridad }) => {;

    if (prioridad===1) {
        return ( 
            <View style={styles.IndicatorLayout}>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(1)}>
                    <View style={styles.Prior1}>
                        <Text style={styles.IndiLabelsOn}>1</Text>
                    </View>
                    <Text style={styles.PriorLabel1}>{PriorLabels[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(2)}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>2</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(3)}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>3</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[2]}</Text>
                </TouchableOpacity>
            </View>
        ) 
    } else if (prioridad===2) {
        return ( 
            <View style={styles.IndicatorLayout}>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(1)}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>1</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(2)}>
                    <View style={styles.Prior2}>
                        <Text style={styles.IndiLabelsOn}>2</Text>
                    </View>
                    <Text style={styles.PriorLabel2}>{PriorLabels[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(3)}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>3</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[2]}</Text>
                </TouchableOpacity>
            </View>
         )
    } else { 
        return ( 
            <View style={styles.IndicatorLayout}>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(1)}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>1</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(2)}>
                    <View style={styles.PriorOff}>
                        <Text style={styles.IndiLabelsOff}>2</Text>
                    </View>
                    <Text style={styles.IndiLabelsOff}>{PriorLabels[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.IndicatorContainer}
                    onPress={() => setPrioridad(3)}>
                    <View style={styles.Prior3}>
                        <Text style={styles.IndiLabelsOn}>3</Text>
                    </View>
                    <Text style={styles.PriorLabel3}>{PriorLabels[2]}</Text>
                </TouchableOpacity>
            </View>
        )};
};
//-----------------------------SETTER DE PRIORIDAD-----------------------------//

//-----------------------------INDICADOR DE ESTADO PALABRA-----------------------------//
export const WordStateIndicator = ({estado}) => {
    if (estado===1) {
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <Text style={styles.StateLabel1}>{StateLabels[0]}</Text>
                <Icon name="error-outline" color={"#D4AC0D"}/>
            </View>
        ) 
    } else if (estado===2) {
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <Text style={styles.StateLabel2}>{StateLabels[1]}</Text>
                <Icon name="check" color={"#2E86C1"}/>
            </View>
         )
    } else { 
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <Text style={styles.StateLabel3}>{StateLabels[2]}</Text>
                <Icon name="where-to-vote" color={"#1E8449"}/>
            </View>
        )};
};
//-----------------------------INDICADOR DE ESTADO PALABRA-----------------------------//

//-----------------------------INDICADOR DE PRIORIDAD PALABRA-----------------------------//
export const WordPriorIndicator = ({prioridad}) => {
    if (prioridad===1) {
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <Text style={styles.PriorLabel1}>{PriorLabels[0]}</Text>
                <Icon name="arrow-drop-down" color={"#1E8449"} size={40}/>
            </View>
        ) 
    } else if (prioridad===2) {
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <Text style={styles.PriorLabel2}>{PriorLabels[1]}</Text>
                <Icon name="remove" color={"#FFC300"} size={40}/>
            </View>
         )
    } else { 
        return ( 
            <View style={styles.IndicatorHorizontal}>
                <Text style={styles.PriorLabel3}>{PriorLabels[2]}</Text>
                <Icon name="arrow-drop-up" color={"#E74C3C"} size={40}/>
            </View>
        )};
};
//-----------------------------INDICADOR DE PRIORIDAD PALABRA-----------------------------//