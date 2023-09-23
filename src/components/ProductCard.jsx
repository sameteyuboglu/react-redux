/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const update = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt.id}`);
  };
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img
        className="w-full h-full rounded-md"
        alt=""
        src={dt?.image}
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="no-photo.jpg";
          }}
      />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price}</div>
      </div>
      <div className="absolute top-0  right-0">
        <BsThreeDots
          color="white"
          size={24}
          onClick={() => setOpenEdit(!openEdit)}
        />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-5 right-2 p-2 text-sm">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(deleteItem(dt.id))}
          >
            Delete
          </div>
          <div className="cursor-pointer" onClick={() => update()}>
            Edit
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
