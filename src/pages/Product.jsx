import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { addItem, updateItem } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const [productInfo, setProductInfo] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
  });
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const location = useLocation();
  const navigate = useNavigate();
  const loc = location.search.split("=")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    if (loc) {
      setProductInfo(data?.find((x) => x.id == loc));
    }
  }, [loc]);

  const clear = () => {
    setProductInfo({
      id: "",
      name: "",
      price: "",
      image: "",
    });
  };
  const addForm = () => {
    dispatch(addItem({ ...productInfo, id: new Date().getTime() }));
    dispatch(modalFunc());
    clear();
  };
  const updateForm = () => {
    dispatch(updateItem(productInfo));
    dispatch(modalFunc());
    clear();
    navigate("/");
  };

  const onChange = (e, type) => {
    if (type == "image") {
      setProductInfo((s) => ({
        ...s,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((s) => ({ ...s, [e.target.name]: e.target.value }));
    }
  };
  const content = (
    <>
      <Input
        type={"text"}
        placeholder={"Product"}
        name={"name"}
        id={"name"}
        value={productInfo?.name}
        onChange={(e) => onChange(e, "name")}
      />
      <Input
        type={"text"}
        placeholder={"Price"}
        name={"price"}
        id={"price"}
        value={productInfo?.price}
        onChange={(e) => onChange(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"file"}
        name={"image"}
        id={"image"}
        onChange={(e) => onChange(e, "image")}
      />
      <Button
        buttonText={loc ? "Update" : "Save"}
        onClick={loc ? updateForm : addForm}
      />
    </>
  );
  const filtered = data.filter((dt) =>
    dt.name.toLocaleLowerCase().includes(keyword)
  );
  return (
    <>
      <div className="px-5">
        <div className="flex items-center flex-wrap">
          {filtered.length > 0
            ? filtered?.map((dt, i) => <ProductCard key={i} dt={dt} />)
            : "No Data Found"}
        </div>
        {modal && <Modal title={"title"} content={content} />}
      </div>
    </>
  );
};

export default Product;
