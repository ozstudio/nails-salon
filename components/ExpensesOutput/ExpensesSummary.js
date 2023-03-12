import { View,Text } from "react-native";


function ExpensesSummary({expenses,periodName}){
const expensesSum = expenses.reduce((sum,expenses)=>{
return sum + expenses.amount
},0)


    return  (<View>
    <Text>{period}</Text>
    <Text>{expensesSum.toFixed(2)}</Text>
</View>)

}
export default ExpensesSummary;