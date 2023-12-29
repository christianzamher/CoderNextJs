"use client";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Buttons";

const LogoutButton = () => {
  const { logout } = useAuthContext();

  return (
    <Button
      onClick={logout}
      className="bg-red-500 rounded p-2 text-white transition transform hover:-translate-y-0.5"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
