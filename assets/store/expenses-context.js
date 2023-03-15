import { createContext, useReducer } from "react";


const Dummy_Data = [
    {
        id:'e1',
        description:'A pair of shoes',
        amount:59.99,
        date:new Date('2023-03-13')
    },
    {
        id:'e2',
        description:'food',
        amount:99,
        date:new Date('2023-03-7')
    },
    {
        id:'e3',
        description:'shirt',
        amount:5.9,
        date:new Date('2023-03-6')
    },
    {
        id:'e4',
        description:'cell phone',
        amount:9.99,
        date:new Date('2023-03-5')
    }
]


export const ExpensesContext = createContext({
    expenses:[],
    addExpense:({
        description,
        amount,
        date
    })=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,
        {
        description,
        amount,
        date})=>{}
});

function expensesReducer (state,action){
    switch (action.type){
        case 'ADD':
            const id = new Date().toString()
            + Math.random().toString();
            return [{...action.payload,id:id},...state];

        case 'UPDATE':
            // const updatableExpenseIndex = state.findIndex( 
            // (expense)=> expense.id === action.payload.id);

            // const updatableExpense = state[updatableExpenseIndex];

            // const updatedItem = {...updatableExpense,...action.payload.data };

            // const updatedExpenses = [...state];

            // updatedExpenses[updatableExpenseIndex] = updatedItem;
            // return updatableExpense;

            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
              );
              const updatableExpense = state[updatableExpenseIndex];
              
              const updatedItem = { ...updatableExpense, ...action.payload.data };
              const updatedExpenses = [...state];
              updatedExpenses[updatableExpenseIndex] = updatedItem;
              return updatedExpenses;

        case 'DELETE':
            return state.filter((expense) => 
            expense.id !== action.payload)
            default:
                return state;
    }

}
 

function ExpensesContextProvider ({children}) {

 const [expensesState,dispatch] =   
 useReducer(expensesReducer,Dummy_Data);

 function addExpense(expenseData){
    dispatch({type : 'ADD',payload:expenseData});
 }
 function deleteExpense (id){
    dispatch({type:'DELETE',payload:id});
 }
 function updateExpense(id,expenseData){
    dispatch ({type:'UPDATE',payload:{id:id,data:expenseData}});
 }
const value = {
    expenses:expensesState,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    updateExpense:updateExpense


};



    return <ExpensesContext.Provider 
    value = {value}>
            {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider;