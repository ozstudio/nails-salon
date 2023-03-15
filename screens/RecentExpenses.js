import { useContext } from 'react';
import {View,Text} from 'react-native';
import { ExpensesContext } from '../assets/store/expenses-context';
import { getDateMinusDays } from '../assets/utils/date';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);
  
    const recentExpenses = expensesCtx
    .expenses
    .filter((expense) => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);
  
      return (expense.date >= date7DaysAgo) && (expense.date <= today);
    });
  
    return (
      <ExpensesOutput 
      expenses={recentExpenses} 
      expensesPeriod="Last 7 Days"
      fallbackText="Empty for 7 days" />
    );
  }
  
  export default RecentExpenses;