import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const navigate = useNavigate()

  const loginUser = () => {
    setTimeout(() => {
      props.login()
      navigate('/')
    }, 1000)
  }

  return (
    <div>
      <button type="button" onClick={loginUser}>
        Log me in
      </button>
    </div>
  )
}

export default Login
