import React, { useState } from "react";

const ExpenseForm = ({ expenseData, setExpenseData }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [description, setDescription] = useState("");
  const [formValid, setFormValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !amount || !selectedCategory || !description) {
      // If any field is empty, set formValid to false and prevent submission
      setFormValid(false);
      return;
    }

    const expense = {
      id: Math.random(),
      date,
      amount,
      selectedCategory, // Corrected variable name
      description,
    };

    // Use the spread operator to update the expenseData array
    setExpenseData([...expenseData, expense]);

    // Clear the form fields and reset formValid after submitting
    setDate("");
    setAmount("");
    setSelectedCategory("");
    setDescription("");
    setFormValid(true);
  };

  return (
    <React.Fragment>
      <div>
        {!formValid && <p className="error-message">Please fill out all fields.</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date of Purchase:</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            id="date"
          />
          <label htmlFor="amount">Amount:</label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="number"
            min={1}
            id="amount"
          />
          <label htmlFor="category">Category:</label>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            id="category"
          >
            <option value="">Select a category</option>
            <option value="Bills & Utilities">Bills & Utilities</option>
            <option value="Dining">Dining</option>
            <option value="Retail Purchase">Retail Purchase</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="description">Description:</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="enter description.."
            id="description"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ExpenseForm;
