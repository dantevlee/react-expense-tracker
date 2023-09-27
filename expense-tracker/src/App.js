import { useState } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';

function App() {

  const [expenseData, setExpenseData] = useState([]);

  return (
    <div className="App">
      <ExpenseForm 	expenseData={expenseData}
					setExpenseData={setExpenseData} />
      <ExpenseTable expenseData={expenseData} setExpenseData={setExpenseData}/>
    </div>
  );
}

export default App;
