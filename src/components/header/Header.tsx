
import { BiLogInCircle, BiUserCircle, BiSearch } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import {
  AutoComplete,
  Modal,
  message,
  Avatar,
  Badge,
  Dropdown,
  Form,
} from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../container/Container";
import { useEffect, useState } from "react";
import { openAuth } from "../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";
import useSearchParamsHook from "../../hooks/UseQueryParams";
import Auth from "../auth/Auth";
import SignIn from "../auth/signIn/SignIn";
import SignUp from "../auth/signUp/SignUp";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { signOut } from "../../redux/slices/authSlice";
import { useGetProductsBySearchQuery } from "../../redux/api/productsApi";
import "./Header.css";
import { Product } from "../../types";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const { likedProducts } = useSelector((state: RootState) => state.like);
  const { data } = useGetProductsBySearchQuery({ q : search });
  const { authOpen } = useSelector((state: RootState) => state.modal);
  const { setParam, getParam, removeParam } = useSearchParamsHook();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isToken = Boolean(localStorage.getItem("token"));
  const { cartProduct }: { cartProduct: Product[] } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    if (getParam("auth")) {
      dispatch(openAuth(true));
    } else {
      dispatch(openAuth(false));
    }
  }, [getParam("auth")]);

  const showModal = () => {
    dispatch(openAuth(true));
    setParam("auth", "true");
  };

  const handleCancel = () => {
    dispatch(openAuth(false));
    removeParam("auth");
  };

  const handleLogOut = () => {
    message.success("You have been successfully logged out");
    dispatch(signOut());
    localStorage.removeItem("token");
    navigate("/");
  };

  const items = [
    {
      key: "1",
      icon: (
        <RiAccountPinBoxFill style={{ fontSize: "1rem", color: "#596780" }} />
      ),
      label: (
        <Link to="/profile">
          <strong style={{ color: "#596780", fontSize: "1rem" }}>
            Profile
          </strong>
        </Link>
      ),
    },
    {
      key: "2",
      icon: <BiLogInCircle style={{ fontSize: "1rem", color: "#596780" }} />,
      label: (
        <strong
          onClick={handleLogOut}
          style={{ color: "#596780", fontSize: "1rem" }}
        >
          Log Out
        </strong>
      ),
    },
  ];

  const handleSearchSubmit = (value: { search: string }) => {
    navigate(`/search?q=${value.search}`);
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const loadData = async (searchText: string) => {
    try {
      setSearch(searchText);
    } catch (error) {
      console.error("Error loading search data:", error);
    }
  };

  return (
    <>
      <div className="bg-green-100 w-full fixed top-0 z-50 shadow-lg">
        <Container>
          <div className="flex w-full justify-between mx-auto items-center py-4">
            <Link to="/">
              <h2 className="text-3xl font-semibold">
                DM-<span className="text-green-600">Shop</span>
              </h2>
            </Link>
            <div>
              <Form
                initialValues={{ search: getParam("q") }}
                onFinish={handleSearchSubmit}
                className="flex items-center  gap-3 bg-[#fefefe]  w-[500px] py-1 px-4 rounded-[62px] border border-gray-300  hover:border-[#56b280]"
              >
                <BiSearch className="text-[#0000005f] text-2xl" />
                <Form.Item
                  name="search"
                  className="w-full !mb-0"
                  rules={[{ required: false }]}
                >
                  <AutoComplete
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        navigate(`/search?q=${search}`);
                      }
                    }}
                    options={data?.products?.map((product) => ({
                      label: (
                        <Link
                          className="block"
                          key={product.id}
                          to={`/details/${product.id}`}
                        >
                          {product.title}
                        </Link>
                      ),
                    }))}
                    style={{ width: "100%" }}
                    className="custom-autocomplete"
                    onSelect={onSelect}
                    onSearch={(text) => (text ? loadData(text) : loadData(""))}
                    placeholder="Search..."
                  />
                </Form.Item>
              </Form>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <NavLink to="/cart">
                  <Badge count={cartProduct?.length} overflowCount={9}>
                    <BsCart3 className="text-2xl" />
                  </Badge>
                </NavLink>
              </div>
              <div className="!mb-0">
                <NavLink to="/liked" >
                  <Badge count={likedProducts?.length} overflowCount={9}>
                    <AiFillHeart className="text-[30px] text-red-500" />
                  </Badge>
                </NavLink>
              </div>
              {!isToken ? (
                <BiUserCircle
                  onClick={showModal}
                  className="text-[30px] text-[#596780] mb-1.5"
                />
              ) : (
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Avatar
                      size="large"
                      className="shadow-xl"
                      src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                    />
                  </a>
                </Dropdown>
              )}
            </div>
          </div>
        </Container>
      </div>
      <Modal
        open={authOpen}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        centered
      >
        {getParam("auth") === "true" ? (
          <Auth />
        ) : getParam("auth") === "signIn" ? (
          <SignIn />
        ) : getParam("auth") === "signUp" ? (
          <SignUp />
        ) : null}
      </Modal>
    </>
  );
};

export default Header;
