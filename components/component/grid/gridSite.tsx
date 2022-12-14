import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Site } from "../../../src/interfaces/site";
import { Button } from "../component";

interface Grid {
  data: Site[]
}
interface CardSite {
  data: Site
}
export const GridSite: FC<Grid> = ({ data }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-3 md:gap-6`}>
      {data.map((d, i) => (
        <CardSite data={d} key={i} />
      ))}
    </div>
  )
}

const CardSite: FC<CardSite> = ({ data }) => {
  const { push, pathname, query, asPath } = useRouter()

  const onDelete = async (id: string) => {
    // Swal.fire({
    //   title: '¿Está seguro?',
    //   text: "¡No podrás revertir esto!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: '¡Sí, bórralo!'
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     await graphQLClientS.request(REMOVE_SITE, { _id: id })
    //     push(`${asPath}`)
    //   }
    // })
  }
  const { title, imageSrc, imageAlt } = data.data
  const { _id, domain } = data

  return (
    <div className="shadow-lg p-2 ">
      <Link href={`${asPath}/${_id}`}>
        <a>
          <div className="w-full bg-white rounded-sm">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={210}
              height={210}
              objectFit={'cover'}
            />
          </div>
          <div className="py-2 flex justify-between">
            <h3 className="text-xs md:text-sm text-gray-700">
              {title}
            </h3>
          </div>
        </a>
      </Link>
      <Button bg="none" content='eliminar' click={() => onDelete(_id)} />
    </div>
  )
}
