import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { sortList, searchItem } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
        <div className="text-3xl">React Redux</div>
        <div className="flex items-center gap-5">
          <div className="text-black">
            <select
              name=""
              id=""
              className="h-10 rounded-lg"
              onChange={(e) => dispatch(sortList(e.target.value))}
            >
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="h-10 rounded-lg px-4 text-black"
            onChange={(e) => dispatch(searchItem(e.target.value))}
          />
          <div
            onClick={() => dispatch(modalFunc())}
            className="bg-indigo-800 h-[40px] w-[40px] rounded-full cursor-pointer"
          >
            <MdPostAdd size={35} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
