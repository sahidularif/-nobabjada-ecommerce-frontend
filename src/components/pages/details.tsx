import React from 'react';
import { useParams } from 'react-router-dom';
import storeItems from '../../data.json'
 type ID = {
    id: number|string|undefined;
  }
// export function useParams<Params extends { [K in keyof Params]?: string } = {}>(): Params;
export type MyParams = {
    id: string;
  };
const Details = () => {
    const { id } = useParams<keyof MyParams>() as unknown as MyParams;
    const myId = parseInt(id)
     const item = storeItems.find((pd) => pd.id === myId);
//   if (item == null) return null;
console.log(typeof id)

    return (
        <div>
            <h1>dd{item?.title}</h1>
            <img src={item?.img_url} alt="" />
            <h1>Hello</h1>
        </div>
    );
};

export default Details;