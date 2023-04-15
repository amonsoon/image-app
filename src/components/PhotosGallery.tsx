import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Heart, Download } from "react-feather";
import { Image as FeatherImage } from "react-feather";

const breakpointColumnsObj = {
    default: 3,
    860: 2,
    480: 1,
};

type Props = {
  photos: object[];
  category: string;
};

export default function PhotosGallery({ photos }: Props) {
  return (
    <div className="w-full">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo, index) => {
          return <Photo photo={photo} key={index} />;
        })}
      </Masonry>
    </div>
  );
}

type PhotoProps = {
  photo: object;
};

function Photo({ photo }: PhotoProps) {
  return (
    <div className="relative rounded overflow-hidden">
      <Image
        src={photo.urls.small}
        alt={photo.alt_description}
        title={photo.alt_description}
        width={photo.width}
        height={photo.height}
        className={`w-full h-auto rounded`}
        style={{ backgroundColor: photo.color }}
        priority={true}
      />
      <Link href={""}>
        <div className="absolute inset-0 h-full w-full p-4 opacity-0 hover:opacity-100 bg-gradient-to-b from-black/20 via-transparent to-black/20">
          <div className="flex h-full flex-col justify-between">
            {/* ------ */}
            <div className="flex self-end gap-3">
              <button className="p-[10px] rounded-md bg-white/90 hover:bg-white">
                <Bookmark size={20} strokeWidth={1.8} />
              </button>
              <button className="p-[10px] rounded-md bg-white/90 hover:bg-white">
                <Heart size={20} strokeWidth={1.8} />
              </button>
            </div>
            {/* ------- */}
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-[42px] h-[42px] rounded-full bg-white"> </div>
                <div className="flex flex-col justify-between">
                  <span className="text-white font-semibold"> Braydon Coyar </span>
                  <span className="text-white text-xs">
                    {" "}
                    In collaboration with{" "}
                    <Link href={""} className="text-slate-100">
                      {" "}
                      Braydon Coyer{" "}
                    </Link>{" "}
                  </span>
                </div>
              </div>
              <button className="p-[10px] rounded-md bg-white/90 hover:bg-white">
                <Download size={20} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
