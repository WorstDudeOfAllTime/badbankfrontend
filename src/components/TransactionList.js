import './TransactionList.css';
import Transaction from './Transaction';
const TransactionList = () => {
  const transList = [{amount: 2000, date: "Today"},
  {amount: 2000, date: "Today"},
  {amount: 100, date: "Today"},
  {amount: 3000, date: "Today"},
  {amount: 1500, date: "Today"},
  {amount: 620, date: "Today"},
  {amount: 80, date: "Today"},
  {amount: 190, date: "Today"},
  {amount: 15, date: "Today"}]

  return(
    <div className="fullTransactions">
      {transList.map(trans => {
        return (<Transaction amount={trans.amount} date={trans.date}/>)
      })}
    </div>
  )
}

export default TransactionList;