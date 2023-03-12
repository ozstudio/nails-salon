import { View,Text} from "react-native";
import ExpensesList from "./ExpemsesList";
import ExpensesSummary from "./ExpensesSummary";



function ExpensesOutput({expenses,expensesPeriod}) {
    return (<View>
      <ExpensesSummary
      expenses ={expenses}
      periodName={expensesPeriod}/>
      <ExpensesList/>
    </View>)
    
}

export default ExpensesOutput;