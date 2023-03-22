import React, { memo } from "react";
import { useNavigate, Link } from "react-router-dom";
import{formatVietnameseToString} from "../../ultils/common/formatToString"
const indexs = [0];

const Card = ({
  images,
  user,
  title,
  star,
  description,
  attributes,
  address,
  id,
  
}) => {
  return (
    <div className="w-56 h-60 lg:h-80 lg:w-72 inline-block font-serif rounded bg-white hover:bg-yellow-500 m-3">
      <Link to={`detail/${formatVietnameseToString(address)}/${id}`}>
        <div>
          {images.length > 0 &&
            images
              .filter((i, index) => indexs.some((i) => i === index))
              ?.map((i) => {
                return (
                  <img
                    src={i}
                    alt=""
                    className="rounded-t object-cover lg:h-56 h-40"
                  />
                );
              })}
        </div>
        <div className="font-semibold lg:my-2">{address}</div>
        <div className="">
          <div>
            {attributes?.price}/{attributes?.acreage}
          </div>
        </div>
        <div className="card-img-description">
          <div className="card-img-description"></div>
        </div>
      </Link>
    </div>
  );
};

export default memo(Card);
