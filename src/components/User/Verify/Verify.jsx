import { verifyuser } from "../../../actions/userAction"
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Loader from "../../layout/Loader/Loader";
import TokenExpired from "../TokenExpired/TokenExpired";
import RegistrationConfirmation from "../RegistrationConfirmation/RegistrationConfirmation"
import { VERIFY_USER_RESET } from "../../../constants/userConstants";
// import VerificationMessage from "../VerificationMessage/VerificationMessage";
function Verify() {
  const dispatch = useDispatch();
  const { token } = useParams()
  const { loading, isVerified } = useSelector(state => state.userVerify);
  useEffect(() => {
    dispatch(verifyuser(token));

    dispatch({
      type:VERIFY_USER_RESET
    })

  }, [dispatch, token])

  return (
    <>
      {loading ? <Loader /> :
        (
          <>
            {isVerified ? <RegistrationConfirmation /> : <TokenExpired />}
          </>
        )
      }
    </>
  )
}

export default Verify
