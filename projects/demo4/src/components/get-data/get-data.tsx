import { fetchData } from '@/services/data-fetch';
import React from 'react'

export const GetData: React.FC = () => {

    const data = fetchData();
    console.log(data);

  return (
    <div>get-data</div>
  )
}

