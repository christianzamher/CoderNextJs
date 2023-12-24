"use client"
import { auth, db, provider } from "@/firebase/config"
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        emaiL: null,
        uid: null
    })



    const router = useRouter()
    

    const registerUser = async (values) => {
        try {
          const Credential = await createUserWithEmailAndPassword(auth, values.email, values.password)
        //   const userCredentials = Credential.user;
        //   const res = await setDoc(doc(db, "users", userCreds.uid), ({
        //     cart: {}
        // }));
        // toast.success("Usuario creado correctamente.", {
        //     hideProgressBar: true,
        //   });
           
        }catch (error) {
        logger.log(error);
       }
    }

    const loginUser = async (values) => {
        try {
        await signInWithEmailAndPassword(auth, values.email, values.password)
       
        } catch (error) {
           
            console.log(error);
        }
        
        
    }

    const logout = async () => {
        await signOut(auth)
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }

    const handleUnauthorizedAccess = () => {
        router.push("/unauthorized")
        logout()
    }

     useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user) {
                const docRef = doc(db, "roles", user.uid)
                const userDoc = await getDoc(docRef)

                if (userDoc.data()?.rol === "admin") {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid
                    })
                } else {
                    
                    handleUnauthorizedAccess()
                }

            } else {
                setUser({
                    logged: false,
                    emaiL: null,
                    uid: null
                })
            }
        })
    }, []) 

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}