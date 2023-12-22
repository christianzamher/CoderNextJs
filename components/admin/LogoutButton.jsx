"use client"
import { useAuthContext } from "../context/AuthContext"
import Button from "../ui/Buttons"

const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <Button onClick={logout} className="bg-red-500">Logout</Button>
}

export default LogoutButton