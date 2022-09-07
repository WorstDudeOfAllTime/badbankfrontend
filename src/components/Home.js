import './Home.css'
import Login from './Login';
const Home = () => {
  return(
    <div className="homeContainer flexCent">
      <div className="hollowBox flexCentCol half">
        <h1>WORST BANK</h1>
        <Login />
      </div>
      <div className="photoBox flexCent half"></div>
    </div>
  )
}

export default Home;