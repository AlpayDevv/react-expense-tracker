function TransactionList(props) {
  return (
    <div>
      <h2>Recent Transactions</h2>

      {props.transactions.map((transaction) => (
        <div key={transaction.id}>
          <h3>{transaction.description}</h3>
          <p>{transaction.amount}</p>
          <span>{transaction.type}</span>

          <button onClick={() => props.onDeleteTransaction(transaction.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
