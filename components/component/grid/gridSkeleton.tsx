
import { useRouter } from "next/router";
import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const data = [1, 2, 3, 4, 5, 6,7,8,9,10]

export const GridSkeleton = () => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-3 md:gap-6`}>
      {data.map((d, i) => (
        <CardSite key={i} />
      ))}
    </div>
  )
}

const CardSite = () => {
  return (
    <div className="shadow-lg ">
      <Skeleton
        height={210} />
      <Skeleton height={30} />
    </div>
  )
}
