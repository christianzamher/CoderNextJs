"use client";
import { auth, db, provider } from "@/firebase/config";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    emaiL: null,
    uid: null,
  });

  const router = useRouter();

  const registerUser = async (values) => {
    try {
      const Credential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
    } catch (error) {
      logger.log(error);
    }
  };

  const loginUser = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
  };

  const handleUnauthorizedAccess = () => {
    router.push("/unauthorized");
    logout();
  };

  const lessInStock = async (newValue, count) => {
    const productRef = doc(db, 'products', newValue);
    const productSnapshot = await getDoc(productRef);
    const productData = productSnapshot.data();
    const updatedInStock = productData.inStock - count;
    await updateDoc(productRef, { inStock: updatedInStock });
}

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "roles", user.uid);
        const userDoc = await getDoc(docRef);

        if (userDoc.data()?.rol === "admin") {
          setUser({
            logged: true,
            email: user.email,
            uid: user.uid,
          });
        } else {
          handleUnauthorizedAccess();
        }
      } else {
        setUser({
          logged: false,
          emaiL: null,
          uid: null,
        });
      }
    });
  }, []);

  

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        logout,
        googleLogin,
        lessInStock
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
