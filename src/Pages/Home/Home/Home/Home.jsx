import React from 'react';
import Banner from '../../Banner/Banner';
import PatientFeedback from '../../Patient_Feedback/PatientFeedback';
import Services from '../../Services/Services';

const Home = () => {
     return (
          <>
               <Banner />
               <Services />
               <PatientFeedback />
          </>
     );
};

export default Home;