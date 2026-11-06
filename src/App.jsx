import Header from "./components/Header";
import Balance from "./components/Balance";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "Salary",
      amount: 3000,
      type: "income",
    },
    {
      id: 2,
      description: "Groceries",
      amount: 200,
      type: "expense",
    },
    {
      id: 3,
      description: "Electricity",
      amount: 100,
      type: "expense",
    },
  ]);

  function addTransaction(newTransaction) {
    const transaction = {
      id: Date.now(),
      ...newTransaction,
    };

    setTransactions([...transactions, transaction]);
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const totalIncome = transactions.reduce((sum, transaction) => {
    if (transaction.type === "income") {
      return sum + transaction.amount;
    }
    return sum;
  }, 0);

  const totalExpenses = transactions.reduce((sum, transaction) => {
    if (transaction.type === "expense") {
      return sum + transaction.amount;
    }
    return sum;
  }, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <Header title="Expense Tracker" subtitle="Manage your income and expenses" />
      <Balance balance={balance} />
      <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
