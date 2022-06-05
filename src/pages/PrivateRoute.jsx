import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
  return (
    <div>
      {props.isAuthenticated ? (
        <div>Private Route</div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  )
}

export default PrivateRoute
