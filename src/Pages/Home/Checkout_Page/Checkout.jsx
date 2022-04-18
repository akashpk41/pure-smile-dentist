import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';

const Checkout = () => {
     const [user] = useAuthState(auth)
     return (
          <div className='p-10 bg-red-500 text-white text-center ' >
               <h1> Welcome {user?.displayName} </h1>
               <p>please fill up the form </p>
          </div>
     );
};

export default Checkout;