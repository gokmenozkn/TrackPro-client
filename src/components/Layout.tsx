import Navigation from "./navigation"
import layout from './layout.module.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={layout.container}>
      <Navigation />
      <div className={layout.main}>
        {children}
      </div>
    </div>
  )
}

export default Layout