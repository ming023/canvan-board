import {Link} from '../../components'
import {Link as RRLink} from 'react-router-dom'
import {useAuth} from '../../contexts'
export default function NavigationBar() {
  const {loggedUser} = useAuth()
  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navbar">
        {loggedUser && (
        <Link to="/" className="btn btn-link">
          Home
        </Link>)}
        {loggedUser && (
        <Link to="/board" className="ml-4 btn btn-link">
          Board
        </Link>)}
      </div>
      <div className="flex items-center p-2">
      {!loggedUser && (
        <RRLink to="/login" className="btn btn-sm btn-primary">
          Login
        </RRLink>)}
        {!loggedUser && (
        <RRLink to="/signup" className="ml-4 btn btn-sm btn-outline btn-primary">
          Signup
        </RRLink>)}
        {loggedUser && (
        <RRLink to="/logout" className="ml-4 mr-4">
          LOGOUT
        </RRLink>)}
      </div>
    </div>
  )
}
