import { View,Text,StyleSheet} from "react-native";
import { GlobalStyles } from "../../assets/constants/styles";
import ExpensesList from "./ExpemsesList";
import ExpensesSummary from "./ExpensesSummary";

const Dummy_Data = [
    {
        id:'e1',
        description:'A pair of shoes',
        amount:59.99,
        date:new Date('2021-12-19')
    },
    {
        id:'e2',
        description:'food',
        amount:99,
        date:new Date('2022-12-19')
    },
    {
        id:'e3',
        description:'shirt',
        amount:5.9,
        date:new Date('2021-01-19')
    },
    {
        id:'e4',
        description:'cell phone',
        amount:9.99,
        date:new Date('2021-06-19')
    }
]

function ExpensesOutput({expenses,expensesPeriod}) {
    return (<View style={style.container}>
      <ExpensesSummary
      expenses ={Dummy_Data}
      periodName={expensesPeriod}/>
      <ExpensesList expenses ={Dummy_Data}/>
    </View>)
    
}

export default ExpensesOutput;
const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    }
});
