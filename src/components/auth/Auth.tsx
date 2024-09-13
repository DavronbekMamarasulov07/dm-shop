import { Button, Divider } from "antd"
import useSearchParamsHook from "../../hooks/UseQueryParams"

const Auth = () => {
  const {setParam} = useSearchParamsHook()

  const handleSignIn = () => {
    setParam('auth', 'signIn')
  }

   const handleSignUp = () => {
    setParam('auth', 'signUp')
   };
  return (
    <div className="flex flex-col items-center py-10 px-14">
      <Button className="w-[200px] !bg-[#56b280]" type="primary" size="large" onClick={() => handleSignIn()}>Sign In</Button>
      <Divider >Or</Divider>
      <Button className="w-[200px] !bg-[#56b280]" size="large" type="primary" onClick={() => handleSignUp()}>Sign Up</Button>
    </div>
  )
}

export default Auth
