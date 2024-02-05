import React, { useEffect, useState } from "react";
import gambar from "../assets/home1.png";
import { Text6, Text7 } from "../components/Text";
import Navbar from "../components/Navbar";
import MainLayout from "../Layout/MainLayout";
import { connect } from "react-redux";
import { fetchMenuList } from "../redux/menu/MenuAction";

const MenuHidangan = (props) => {
  const { fetchMenuList, menuList } = props;
  const [data, setData] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  useEffect(() => {
    fetchMenuList();
  }, [fetchMenuList]);

  useEffect(() => {
    if (
      menuList &&
      menuList.data &&
      menuList.data.result &&
      menuList.data.result.categories
    ) {
      setData(menuList.data.result.categories);
    }
  }, [menuList]);

  console.log("data menu", data);

  return (
    <MainLayout>
      {/* <Navbar /> */}
      <div className="fixed top-0 w-full  px-2 bg-gray-100  ">
        <div className="flex justify-center items-center pt-4 pb-4">
          <Text7 text="MENU" />
        </div>
        <div className="overflow-x-auto bg-gray-100">
          <ul className="flex whitespace-nowrap">
            {data.map((item, index) => (
              <li
                key={index}
                className={`inline-block px-3 pb-4 ${
                  selectedCategoryIndex === index
                    ? "border-b-4 border-black"
                    : "border-none"
                } hover:border-b-4 border-black`}
                onClick={() => setSelectedCategoryIndex(index)}
              >
                <p>{item.category_name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* end navbar */}

      {data.map((item, index) => (
        <div
          key={index}
          className="mt-[105px] px-3 col-span-12 bg-gray-100  h-[100vh] "
        >
          <div key={index} className="mt-[105px] px-3 col-span-12 ">
            <div className="col-span-12  grid grid-cols-12">
              <div className="col-span-12 py-2">
                <Text6 text={item.category_name} />
              </div>
              {item.menu.map((item2, index2) => (
                <div className="col-span-12 grid grid-cols-12 bg-white p-3  ">
                  <div className="col-span-3 ">
                    <img src={item2.photo} alt="" className="w-[90px]" />
                  </div>
                  <div className="col-span-6 ">
                    <Text6 text={item2.name} />
                    <p className="text-[11px] text-gray-400">
                      {item2.description}
                    </p>
                  </div>
                  <div className="col-span-3 ">
                    <Text6 text={`Rp ${(item2.price || 0).toLocaleString()}`} />
                  </div>
                </div>
              ))}
            </div>
            {/* Remove the semicolon here */}
          </div>
        </div>
      ))}
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  menuList: state.menuList,
});

export default connect(mapStateToProps, { fetchMenuList })(MenuHidangan);
