import { auth } from './firebase'

// Sign Up
export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)

// Sign In
export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)

// Sign out
export const signOut = () => auth.signOut()