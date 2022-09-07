import AccountDisplay from './AccountDisplay';
import TransactionList from './TransactionList';
import './AccountPage.css';
const AccountPage = ({ loggedIn }) => {
  return (
    <div className="fullAccounts">
      {loggedIn ? (
        <>
          <div className="userAccount">
            <AccountDisplay balance={1000} />
            <TransactionList />
          </div>
          <div className="userAccount">
            <AccountDisplay balance={10000} />
            <TransactionList />
          </div>
        </>
      ) : (
        <h1>You are not Logged In</h1>
      )}
    </div>
  );
};

export default AccountPage;
