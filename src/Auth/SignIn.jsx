import React, { useEffect } from 'react'

const SignIn = () => {
    useEffect(()=>{
        document.title="Sign in"
    })
  return (
    <>
    <main className="sign-in-container">
        <h1>Sign in</h1>
    </main>
    
    </>
  );
};

export default SignIn
