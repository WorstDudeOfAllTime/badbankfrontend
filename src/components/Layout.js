import NavBar from "./NavBar";
import './Layout.css'
const Layout = ({children}) => {
  return (
    <div className="container flex-cent-col">
      <NavBar/>
      <div className="contentContainer">
      {children}
      </div> 
    </div>
  )
}

export default Layout;