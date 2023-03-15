import { ExpensesContext } from '../assets/store/expenses-context';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';


function AllExpenses() {
    const context = useContext(ExpensesContext)
    return <ExpensesOutput
    expenses= {context.expenses}
     expensesPeriod="Total"
     fallbackText= "Emty"/>
}
export default AllExpenses;