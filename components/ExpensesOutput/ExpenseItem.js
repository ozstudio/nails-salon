import { Pressable, View,StyleSheet,Text } from "react-native";

import  {GetFormattedDate}  from "../../assets/utils/date";
import { GlobalStyles } from "../../assets/constants/styles";


function ExpenseItem({description,amount,date}) {
    return <Pressable>
        <View style = {styles.expenseItem}>
          <View>
            <Text style ={[styles.textBase,styles.description]}>{description}</Text>
            <Text style ={styles.textBase}>{GetFormattedDate(date)}</Text>
            </View> 
            <View style ={styles.amountContainer}>
                <Text style = {styles.amount}>{amount.toFixed(2)}</Text>
                </View> 
            
        </View>
    </Pressable>
    
}
export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        elevation:3,
    },
    textBase:{
        color:GlobalStyles.colors.primary50
    }
    ,
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold',

    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        minWidth:80
    },
    amount:{
color:GlobalStyles.colors.primary500,
fontWeight:'bold'
    }
})