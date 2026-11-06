import { useState } from "react";

function TransactionForm(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (description.trim() === "" || amount === "" || Number(amount) <= 0) {
      setError("Please enter a valid description and amount.");
      return;
    }

    const newTransaction = {
      description,
      amount: Number(amount),
      type,
    };

    props.onAddTransaction(newTransaction);
    setError("");
    setDescription("");
    setAmount("");
    setType("income");
  }

  return (
    <div>
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input type="number" placeholder="Amount" value={amount} onChange={(event) => setAmount(event.target.value)} />

        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit">Add Transaction</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default TransactionForm;
