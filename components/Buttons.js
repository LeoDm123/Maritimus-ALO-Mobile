import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import { FloatingAction } from 'react-native-floating-action';
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import styles from "../constants/styles";
import AntDesign from "react-native-vector-icons/AntDesign";


//-----------------------------BOTON DE PROYECTOS--------------------------//
export const ProjectButton = ({ handlePress, title, color, icon, ...props }) => {
    return (
      <TouchableOpacity
        style={{
          width: 90,
          height: 110,
          backgroundColor: color,
          borderRadius: 30,
          marginHorizontal:5,
          alignItems: "center",
          justifyContent: "center",
          ...props,
        }}
        onPress={handlePress}
      >
        <Icon name={icon} size={40} color={COLORS.gray}/>
        <Text style={styles.ProjectCardTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };
//-----------------------------BOTON DE PROYECTOS--------------------------//

//-----------------------------BOTON DE VOLVER-----------------------//
export const BackButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        left:0,
        top:0,
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center",
        zIndex:1,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE VOLVER-----------------------//

//-----------------------------BOTON DE NUEVO TICKET-----------------------//
  const actions = [
    {
      name: "Crear Ticket",
      text: "Crear Ticket",
      icon: require("../assets/icons/plus.png"),
      color:"#1B1B3D",
      position:1,
    },
  ]

  export const AddButton = ({handlePress, ...props}) => {
    const navigation = useNavigation();
    
    return (
      <View 
        style={{position:"relative", 
        bottom:-30,
        right:-20,       
        }}>
        <FloatingAction
          actions={actions}
          color={COLORS.primary}
          onPressItem={handlePress}        
        />
      </View>
    );
  };
//-----------------------------BOTON DE NUEVO TICKET-----------------------//

//-----------------------------BOTON DE FAVORITO CARD-----------------------//
export const FavButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        position:"absolute",
        top:2.5,
        right:-50,
        width: 40,
        height: 40,
        backgroundColor: COLORS.light,
        borderColor:COLORS.gray,
        borderWidth:2,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        zIndex:1,
        ...props,
      }}
      onPress={handlePress}
    >
      <Icon name="favorite-outline" color={COLORS.gray}/>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE FAVORITO CARD-----------------------//

//-----------------------------BOTON DE FAVORITO HEADER-----------------------//
export const HeaderFavButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        position:"absolute",
        top:0,
        right:0,
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center",
        zIndex:1,
        ...props,
      }}
      onPress={handlePress}
    >
      <Icon name="favorite-outline" color={COLORS.gray}/>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE FAVORITO HEADER-----------------------//

//-----------------------------BOTON DE ABRIR TICKET-----------------------//
export const OpenTicketButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        position:"absolute",
        bottom:15,
        right:22,
        width: 60,
        height: 160,
        backgroundColor: COLORS.button,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        zIndex:1,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={styles.OpenButtonText}>Abrir Ticket</Text>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE ABRIR TICKET-----------------------//

//-----------------------------BOTON DE MENU-----------------------//
export const MenuButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        position:"absolute",
        top:0,
        right:0,
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center",
        zIndex:1,
        ...props,
      }}
      onPress={handlePress}
    >
      <Icon name="menu" color={COLORS.gray}/>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE MENU-----------------------//

//-----------------------------BOTON DE FILTROS-----------------------//
export const FilterMenu = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 42,
        height: 42,
        backgroundColor: COLORS.white,
        borderRadius:20,
        borderWidth:1,
        borderColor:COLORS.gray,
        alignItems: "center",
        justifyContent: "center",
        zIndex:1,
        ...props,
      }}
      onPress={handlePress}
    >
      <Icon name="filter-alt" color={COLORS.gray}/>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE FILTROS-----------------------//

//-----------------------------BOTON DE LOGIN--------------------------//
export const LoginButton = ({ handlePress, title, color, icon, ...props }) => {
  return (
    <TouchableOpacity
      style={styles.LoginButton}
      onPress={handlePress}
    >
      <Text style={styles.GMBottomText}>Ingresar</Text>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE LOGIN--------------------------//

//-----------------------------BOTON DE REGISTRO--------------------------//
export const RegisterButton = ({ handlePress, title, color, icon, ...props }) => {
  return (
    <TouchableOpacity
      style={styles.RegisterButton}
      onPress={handlePress}
    >
      <Text style={styles.WMBottomText}>Registrarse</Text>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE REGISTRO--------------------------//

//-----------------------------BOTON DE LOGIN FACEBOOK--------------------------//
export const FacebookLoginButton = ({handlePress}) => {
  return (
    <TouchableOpacity
      style={styles.FacebookLoginButton}
      onPress={handlePress}
    >
      <View style={{width:"10%"}}>
        <Icon name="facebook" color={COLORS.white} />
      </View>
      <View style={{width:"80%"}}>
        <Text style={styles.FacebookText}>Login con Facebook</Text>
      </View>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE LOGIN FACEBOOK--------------------------//

//-----------------------------BOTON DE LOGIN GOOGLE--------------------------//
export const GoogleLoginButton = ({handlePress}) => {
  return (
    <TouchableOpacity
      style={styles.GoogleLoginButton}
      onPress={handlePress}
    >
      <View style={{width:"10%"}}>
        <AntDesign name="google" color={COLORS.gray} size={20} style={{marginLeft:5}}/>
      </View>
      <View style={{width:"80%"}}>
        <Text style={styles.GoogleText}>Login con Google</Text>
      </View>
    </TouchableOpacity>
  );
};
//-----------------------------BOTON DE LOGIN GOOGLE--------------------------//
