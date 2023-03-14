import { useLayoutEffect } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../../ExpenseApp/assets/constants/styles';
import Button from '../components/UI/Button';

function ManageExpense({route,navigation}) {
    const editedExpensedId = route.params?.expenseId;
    const isEditing = !!editedExpensedId;

    useLayoutEffect (()=>{
        navigation.setOptions({
        title : isEditing ? 'Edit expense' : 'Add expense'

    })

    },[navigation,isEditing])


    function deleteExpenseHandler(){
        navigation.goBack();
    }

    function cancelHandler(){
        navigation.goBack();
    }
    function confirmHandler(){
        navigation.goBack();
    }
    
    return <View style = {styles.container}> 
            <View style ={styles.buttonsContainer}>
                <Button
                 mode ='flat' 
                 onPress ={cancelHandler}
                 style = {styles.button}>
                    Cancel</Button>
                    <Button>{isEditing ? 'Update' : 'Add'}</Button>

            </View>

    
       {isEditing && (<View
       style = {styles.deleteContainer}><IconButton 
       icon ='trash'
       color ={GlobalStyles.colors.error500}
       size = {36}
       onPress ={deleteExpenseHandler}
       /></View>)}
    </View>
}
export default ManageExpense;
const styles =StyleSheet.create({
    container :{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary800
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    button:{
        minWidth:120,
        marginHorizontal:8
    },
    deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderColor:'white',
        alignItems:'center'
    }

});