import logger from 'logging-library';
"use client"
import { auth, db, provider } from "@/firebase/config"
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState , useReducer } from "react"
// import Notification from "../notification/Notification"


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const initialState = {
    logged: false,
    email: null,
    uid: null
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          logged: true,
          email: action.payload.email,
          uid: action.payload.uid
        };
      case 'LOGOUT':
        return {
          ...state,
          logged: false,
          email: null,
          uid: null
        };
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(userReducer, initialState);
  const router = useRouter();

  const registerUser = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      logger.error(error);
    }
  };

  const loginUser = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      logger.error(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
  };

  const handleUnauthorizedAccess = () => {
    router.push('/unauthorized');
    logout();
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'roles', user.uid);
        const userDoc = await getDoc(docRef);

        if (userDoc.data()?.rol === 'admin') {
          dispatch({
            type: 'LOGIN',
            payload: {
              email: user.email,
              uid: user.uid
            }
          });
        } else {
          handleUnauthorizedAccess();
        }
      } else {
        dispatch({
          type: 'LOGOUT'
        });
      }
    });
  }, []);

  return children;
};
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