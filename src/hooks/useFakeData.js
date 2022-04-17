import React, { useEffect, useState } from 'react';

const useFakeData = (fakeData) => {
     const [data,setData] = useState([])
     useEffect(()=> {
          fetch(fakeData)
          .then(res => res.json())
          .then(data => setData(data))
     },[fakeData])
     return [data,setData]
};

export default useFakeData;