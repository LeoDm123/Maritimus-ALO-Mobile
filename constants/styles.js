import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { FONTS, SHADOWS, COLORS, SIZES, assets, dim } from './theme';
import { Colors } from "react-native/Libraries/NewAppScreen";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    Divisor: {
      borderBottomColor:COLORS.white,
      borderBottomWidth:0.5,
      flexDirection:"row",
      marginVertical:15,
    },

    //////////////////TEXT////////////////////////
    HeaderTitle: {
      fontFamily: FONTS.bold,
      fontSize: SIZES.large,
      color: COLORS.white,
      marginTop: SIZES.base / 2,
      textAlign:'center',
      marginTop:10,
      marginVertical:5,  
    },

    SubTitle: {
      fontFamily: FONTS.regular,
      fontSize: SIZES.large,
      color: COLORS.lightGray, 
      marginBottom:10,
    },

    ProjectCardTitle: {
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.large,
      color: COLORS.gray, 
    },

    CardTitle: {
      fontFamily: FONTS.bold,
      fontSize: SIZES.large,
      color: COLORS.gray, 
      marginVertical:5,
    },


    Title: {
      fontFamily: FONTS.bold,
      fontSize: 18,
      color: COLORS.white,
      marginBottom:10,
    },

    TextM: {
      fontFamily: FONTS.regular,
      fontSize: 16,
      color: COLORS.white,
      marginVertical:5,
      width:"auto",
      marginRight:5,
    },

    TextMGray: {
      fontFamily: FONTS.regular,
      fontSize: 16,
      color: COLORS.lightGray,
      marginVertical:5,
      width:"auto",
    },

    SmallText: {
      fontFamily: FONTS.regular,
      fontSize: 14,
      color: COLORS.lightGray,
      marginVertical:5,
    },

    WMBottomText: {
      color:COLORS.white,
      fontFamily:FONTS.semiBold,
      textAlign:"center",
    },

    GMBottomText: {
      color:COLORS.gray,
      fontFamily:FONTS.semiBold,
      textAlign:"center",
    },
    
    /////////////////INPUTS///////////////////////
    TextInput: {
      marginVertical:10,
      height: 40,
      color:COLORS.lightGray,
      borderColor:COLORS.white,
      borderRadius:20,
      borderWidth: 0.5,
      padding: 20,
      width:"100%"
    },

    //////////////////HOME////////////////////////
    LogoLayout: {
      height:"40%",
      alignItems:"center",
      justifyContent:"center",
    }, 

    LogoSize: {
      width:350,
      height:70,
    },

    LoginLayout: {
      height:"60%",
      width:"100%",
      paddingHorizontal:25,
    },

    LogButtonsLayout: {
      marginTop:25,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
    },

    LoginButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:160,
      backgroundColor:COLORS.white,
    },

    RegisterButton: {
      borderRadius: 20,
      borderWidth:1,
      borderColor:COLORS.white,
      padding: 10,
      elevation: 2,
      width:160,
    },

    FacebookLoginButton: {
      borderRadius: 20,
      borderColor:COLORS.white,
      borderWidth:0.5,
      padding: 10,
      elevation: 2,
      width:"100%",
      marginVertical:5,
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#3b5998",
    },

    FacebookText: {
      color:COLORS.white,
      fontFamily:FONTS.semiBold,
      textAlign:"center",
    },

    GoogleLoginButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:"100%",
      marginVertical:5,
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#ffffff",
    },

    GoogleText: {
      color:COLORS.gray,
      fontFamily:FONTS.semiBold,
      textAlign:"center",
    },

    //////////////////HEADER//////////////////////
    MainHeader: {
      flexDirection:"row",
      alignItems:"center",
      marginTop:20,
      paddingBottom:10,
      backgroundColor:COLORS.gray,
    },
    
    Header: {
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      paddingBottom:12,
      backgroundColor:COLORS.gray,
    },

    AvatarMenu: {
      flexDirection:"row",
      alignItems:"center",
    },

    LogoImage: {
      width: "100%",
      resizeMode: "contain",
      borderRadius:25,
      borderWidth:1,
      borderColor:COLORS.gray,
      width:42,
      height:42,
    },

    //////////////////SEARCH BAR//////////////////////

    SearchBarPosition: {
      width: "100%",
      borderRadius: SIZES.font,
      flexDirection: "row",
      alignItems: "center",
      justifyContent:"flex-start", 
    },

    SearchBarLogo: {
      resizeMode:"contain",
      width: 20, 
      height: 20,
      marginRight:SIZES.base,  
    },

    SearchBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    ModalContainer: {
      width:"100%",
      marginTop:100,
      paddingHorizontal:10,
    },

    SearchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      width:"100%",
    },

    CancelButton: {   
      marginLeft: 5,
    },

    //////////////////PROPJECT BUTTON DISPLAY//////////////////////

    HorizontalDisplay: {
      alignItems:'center',
      flexDirection:'row',
      marginVertical:15,
      justifyContent:'space-evenly',
    },

    Arrows: {
      height:25,
      width:25,
    },

    ProjectButtonDisplay: {
      width:"100%",
      height:120,
      justifyContent:"center",
      alignItems:'center',
    },

    ShowAllButton: {
      fontFamily: FONTS.semiBold,
      fontSize: 12,
      color: COLORS.primary,
      padding:5,
      marginEnd:10,
      alignSelf:"flex-end",
    },


    //////////////////TICKET CARDS//////////////////////

    TextContainer: {
      width:"80%",
      flexDirection:"row",
      alignItems:"baseline",
      justifyContent:"flex-start",
    },
    
    NombreContent: {
      marginLeft:10,
      marginTop:20,
      height:50,
      width:"75%",
    },

    TicketCardName: {
      fontFamily: FONTS.bold,
      fontSize: 18,
      color: COLORS.gray,
      marginEnd:5,
      paddingLeft:15,
    },

    VertDivisor: {
      height:45,
      marginLeft:15,
      borderStartWidth:4,
      borderStartColor:COLORS.gray,
    },

    TicketCardContainer: {
      paddingHorizontal:0,
    },

    TicketCardDeck: {
      flexDirection:"column",
      justifyContent:"space-around",
      backgroundColor: COLORS.white,
      borderRadius:25,
      width:"100%",
      height:"auto",
      marginVertical:5,
      marginBottom:20,
      borderColor:COLORS.white,
      borderWidth:0.5,
    },

    CardTextM: {
      fontFamily: FONTS.regular,
      fontSize: 16,
      color: COLORS.gray,
      marginVertical:5,
      paddingLeft:5,
      width:"auto",
    },

    TicketCardView: {
      flexDirection:"column",
      justifyContent:"space-around", 
      marginVertical:10,
      padding:5,     
    },

    CardContent: {
      flexDirection:"row",
      alignItems:"center",
      height:"auto",
      width:"100%",
      paddingLeft:10,
      marginBottom:10,
    },

    PlazoNumContent: {
      flexDirection:"row",
      alignItems:"flex-start",
      paddingLeft:20,
      width:"100%",
    },

    PriorEstadoContent: {
      flexDirection:"row",
      backgroundColor:COLORS.white,
      width:"80%",
      marginBottom:5,      
    },

    PriorEstadoLayout: {
      alignItems:"center",
    },

    PriorEstadoTitle: {
      fontFamily: FONTS.bold,
      fontSize: SIZES.large,
      color: COLORS.primary,
      marginBottom:10,
      alignSelf:"center",
    },

    OpenButtonText: {
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.large,
      color: COLORS.white, 
      width:120,
      textAlign:"center",
      transform:[{rotate:"270deg"}]
    },

    //////////////////INDICADORES//////////////////////

    //----------------Generales----------------------///
    
    IndicatorLayout: {
      flexDirection:"column",
      justifyContent:"space-between",
      height:150,
      marginLeft:20,
    },

    IndicatorHorizontal: {
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
    },

    IndicatorContainer: {
      flexDirection:"row",
      alignItems:"center",
      marginVertical:5,
    },

    IndicatorContainerVert: {
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginVertical:5,
    },

    StateSettings: {
      width:30,
      height:30,
      borderRadius:15,
      borderWidth:1.5,
      justifyContent:"center",
      alignItems:"center",
      borderColor:COLORS.lightGray,
    },

    PriorOff: {
      width:30,
      height:30,
      borderRadius:15,
      borderWidth:1,
      justifyContent:"center",
      alignItems:"center",
      borderColor:COLORS.lightGray,
    },

    IndiLabelsOff: {
      padding:5,
      color:COLORS.lightGray,
    },

    IndiLabelsOn: {
      padding:5,
      color:COLORS.white,
    },

    //----------------Prioridad----------------------///

    PriorLabel1: {
      padding:5,
      color:"#1E8449",
      fontFamily: FONTS.semiBold,
    },

    Prior1: {
      width:30,
      height:30,
      borderRadius:15,
      borderWidth:1.5,
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#1E8449",
      backgroundColor:"#1E8449",
    },

    PriorLabel2: {
      padding:5,
      color:"#FFC300",
      fontFamily: FONTS.semiBold,
    },

    Prior2: {
      width:30,
      height:30,
      borderRadius:15,
      borderWidth:1.5,
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#FFC300",
      backgroundColor:"#FFC300",
    },
    
    PriorLabel3: {
      padding:5,
      color:"#E74C3C",
      fontFamily: FONTS.semiBold,
    },

    Prior3: {
      width:30,
      height:30,
      borderRadius:15,
      borderWidth:1.5,
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#E74C3C",
      backgroundColor:"#E74C3C",
    },

    //----------------Estado----------------------///

    StateLabel1: {
      padding:5,
      color:"#D4AC0D",
      fontFamily: FONTS.semiBold,
    },

    State1: {
      width:30,
      height:30,
      borderRadius:15,
      borderWidth:1.5,
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#FFC300",
      backgroundColor:"#FFC300",
    },

    StateLabel2: {
      padding:5,
      color:"#2E86C1",
      fontFamily: FONTS.semiBold,
    },

    State2: {
      width:30,
      height:30,
      borderRadius:15,
      borderWidth:1.5,
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#2E86C1",
      backgroundColor:"#2E86C1",
    },
    
    StateLabel3: {
      padding:5,
      color:"#1E8449",
      fontFamily: FONTS.semiBold,
    },

    State3: {
      width:30,
      height:30,
      borderRadius:15,
      borderWidth:1.5,
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#1E8449",
      backgroundColor:"#1E8449",
    },

    //////////////////HOVERING BUTTON//////////////////////
    AddButton: {
      width:20,
      height:20,
    },

    //////////////////CREAR NUEVO TICKET//////////////////////

    TicketButtonLayout:{
      flexDirection:"row",
      marginTop:5
    },

    MatListLayout: {
      marginTop:10,
      marginHorizontal:10,
    },

    MatsListLayout: {
      marginVertical:5,
      marginHorizontal:10,
      borderBottomWidth:2,
      borderColor:COLORS.lightGray,
    },

    TicketInputTitle: {
      fontFamily: FONTS.bold,
      fontSize: 16,
      color: COLORS.primary,
      marginVertical:5,
    },

    TicketInput: {
      width:"100%",
      height:40,
      marginTop:10,
      color:COLORS.lightGray,
      borderColor:COLORS.lightGray,
      borderRadius:20,
      borderWidth: 0.5,
    },

    TicketPlazoInput: {
      width:"50%",
      height:40,
      borderBottomWidth:1.5,
      borderColor:COLORS.lightGray,
      marginEnd:10,
    },

    ModalCenteredView: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    ModalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
    },

    ModalTitle: {
      fontFamily: FONTS.bold,
      fontSize: 18,
      color: COLORS.gray,
      marginBottom:15,
    },
    
    ModalButtonLayout: {
      flexDirection:"row",
      justifyContent:"flex-end",
    },

    ModalButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:200,
    },

    ModalOpenButton: {
      borderRadius: 20,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:100,
      height:100,
      backgroundColor:COLORS.white,
    },

    ModalAddButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:200,
      margin:5,
    },

    ModalOpenButtonText: {
      color:COLORS.gray,
      fontFamily:FONTS.semiBold,
      textAlign:"center",
    },

    ModalCancelText: {
      color:COLORS.gray,
      fontFamily:FONTS.semiBold,
      textAlign:"center",
    },

    ModalText: {
      fontFamily: FONTS.light,
      fontSize: 16,
      marginVertical:5,
      color: COLORS.gray,
      marginBottom:10,
      textAlign:"left",
    },

    AddMatButton: {
      borderRadius: 20,
      borderColor:COLORS.gray,
      backgroundColor:COLORS.gray,
      borderWidth:1,
      padding: 10,
      elevation: 2,
      width:200,
      marginBottom:10,
    },

    CancelButton: {
      borderRadius: 20,
      borderColor:COLORS.gray,
      borderWidth:1,
      padding: 10,
      elevation: 2,
      width:200,
      marginBottom:10,
    },

    SendButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:160,
      margin:5,
      backgroundColor:COLORS.white,
    },

    ClearButton: {
      borderRadius: 20,
      borderWidth:1,
      borderColor:COLORS.white,
      padding: 10,
      elevation: 2,
      width:160,
      margin:5,
    },

    SendClearLayout: {
      flexDirection:"row",
      justifyContent:"center",
    },

    ModalTextLayout: {
      flexDirection:"row",
      marginVertical:10,
    },

    SelectedItemsContainer: {
      width:"100%",
      marginVertical:5,
      marginHorizontal:5,
      borderColor:COLORS.lightGray,
      borderBottomWidth:1,
      paddingBottom:5,
    },

    SelectedItemTitle: {
      fontFamily: FONTS.semiBold,
      fontSize: 15,
      color: COLORS.white,
      textAlign:'left',
    },
    
    SelectedItemText: {
      fontFamily: FONTS.light,
      fontSize: 15,
      color: COLORS.lightGray,
      textAlign:'left',
    },

    QtyInputLayout: {
      alignItems:"center",
      marginBottom:20,
    },

    QtyInput: {
      padding:5,
      width:100,
      height:50,
      borderBottomWidth:2,
      borderColor:COLORS.gray,
      backgroundColor:COLORS.lightGray,
    },

    ListTitle: {
      fontFamily: FONTS.bold,
      fontSize: 15,
      alignSelf:"center",
      color: COLORS.white,
      marginBottom:5,
      borderColor:COLORS.white,
      borderBottomWidth:1,
    },

    //////////////////TICKET DETAILS//////////////////////
    TicketNameContent: {
      marginTop:20,
      height:"auto",
    },
    
    TicketName: {
      fontFamily: FONTS.bold,
      fontSize: 22,
      color: COLORS.white,
      marginLeft:10,
    },

    MatListTitle: {
      fontFamily: FONTS.bold,
      fontSize: 18,
      color: COLORS.white,
      marginLeft:10,
    },

    TitleVertDivisor: {
      height:"auto",
      width:"100%",
      borderStartWidth:4,
      borderStartColor:COLORS.white,
    },

    SubTitleVertDivisor: {
      height:"auto",
      width:"100%",
      borderStartWidth:4,
      borderStartColor:COLORS.white,
    },
    
    PlazoNroLayout: {
      flexDirection:"row",
    },

    DetailsLayout: {
      flexDirection:"row",
      alignItems:"center",
    },

    ListLayout: {
      marginTop:10,
    },

    ListLayout: {
      marginVertical:5,
    },

    ItemsContainer: {
      width:"100%",
      marginVertical:5,
      paddingBottom:5,
      marginLeft:15,
    },

    ItemTitle: {
      fontFamily: FONTS.semiBold,
      fontSize: 15,
      color: COLORS.white,
      textAlign:'left',
    },
    
    ItemText: {
      fontFamily: FONTS.light,
      fontSize: 15,
      color: COLORS.lightGray,
      textAlign:'left',
    },
  });

  export default styles;

  


