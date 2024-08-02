import React, { useState } from 'react';
import auth from './Firebase';// Adjust the path to your Firebase config
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Navbar from "../components/Navbar"; // Adjust the path to your Navbar component
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(''); // Reset the error message

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful sign-up, e.g., redirect to the dashboard
      alert('User registered successfully');
      setEmail('');
      setName('');
      setPassword('');
      setMobile('');
      setAddress('');
      
    } catch (err) {
      console.error(err);
      // Improved error handling
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('Email already in use');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters');
          break;
        default:
          setError('Error signing up');
          break;
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <form
          onSubmit={handleSignUp}
          className="bg-gray-100 shadow-md rounded-md p-8 max-w-md w-full"
        >
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name:
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="mobile">
              Mobile number:
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                type="text"
                id="mobile"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                type="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Enter Password:
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="address">
              Enter Address:
              <textarea
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                id="address"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Sign-Up
          </button>
          <p>Already an existing user?<Link to ="/Login">Login</Link></p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
