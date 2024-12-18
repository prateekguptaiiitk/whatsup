import { useContext } from "react"
import { UserContext } from "./UserContext"
import RegisterAndLoginForm from "./RegisterAndLoginForm"

export default function Routes() {
    const {username, id} = useContext(UserContext)

    if (username) {
        return 'Logged In! ' + username
    }

    return (
        <RegisterAndLoginForm />
    )
}