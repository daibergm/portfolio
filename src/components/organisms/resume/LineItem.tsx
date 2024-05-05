'use client';
import React from 'react';

const LineItem = () => {
  const lineArray = [
    {
      id: 1,
      color: 'text-[#FF6464]',
      name: 'Web Development',
      knowledge: 'Intermediate - Advance',
    },
    {
      id: 2,
      color: 'text-[#9272D4]',
      name: 'App Development ',
      knowledge: 'Intermediate - Advance',
    },
    {
      id: 3,
      color: 'text-[#5185D4]',
      name: 'Management',
      knowledge: 'Intermediate ',
    },
  ];

  return (
    <>
      {lineArray.map((item) => (
        <div className=" mb-2" key={item.id}>
          <div className="flex justify-between py-1">
            <span className="text-base font-semibold text-[#A6A6A6]">{item?.name}</span>
            <span className={`text-base font-semibold pr-5 ${item.color}`}>{item?.knowledge}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default LineItem;
