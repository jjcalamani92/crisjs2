/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useContext, useState } from 'react';

interface Props {

}
export const Loading:FC<Props> = () => {  
  // console.log(tree);
  
  // let url = asPath.substring(1).split('/')
  // console.log(url[url.length-1].length);
  // const site = data.find((data: {_id: string; }) => data._id === url[url.length-1])
  // console.log(site);
  
  return (
    <div className="flex justify-center items-center w-full h-screen">
			<div className="sk-chase">
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
			</div>
		</div>
  )
}
