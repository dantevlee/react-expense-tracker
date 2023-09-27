import { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';

function App() {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedData = JSON.parse(localStorage.getItem('expenseData')) || [];
    setExpenseData(storedData);
  }, []); // Empty dependency array to only run the effect once on mount

  const addExpense = (newExpense) => {
    setExpenseData((prevData) => {
      const newData = [...prevData, newExpense];
      localStorage.setItem('expenseData', JSON.stringify(newData));
      return newData;
    });
  };

  const deleteExpense = (id) => {
    setExpenseData((prevData) => {
      const newData = prevData.filter((expense) => expense.id !== id);
      localStorage.setItem('expenseData', JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <div className="App">
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenseData={expenseData} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
