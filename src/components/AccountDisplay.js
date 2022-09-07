import {useState} from 'react';
import './AccountDisplay.css'
const AccountDisplay = ({balance}) => {
  const [theBalance, setTheBalance] = useState(balance)
  return(
    <div className="accountContainer">
      <div className="balanceDisplay">
        <h1>Balance: ${theBalance}</h1>
        <h2>Checking</h2>
      </div>
          <div>
            <h2>Account Number: 1074376268</h2>
            <h2>Debit Card: xxxx xxxx xxxx xxxx</h2>
          </div>
    </div>
  )
}

export default AccountDisplay;