import { AiFillHeart } from "react-icons/ai"; 
import { BsCart3 } from "react-icons/bs"; 
import {  Modal } from "antd";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Avatar, Badge } from "antd";
import Container from "../container/Container";
import "./Header.css";
import { useEffect, useState } from "react";
import { openAuth } from "../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";
import useSearchParamsHook from "../../hooks/UseQueryParams";
import Auth from "../auth/Auth";
import SignIn from "../auth/signIn/SignIn";
import SignUp from "../auth/signUp/SignUp";

const Header = () => {
   const { likedProducts } = useSelector((state: RootState) => state.like);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { authOpen } = useSelector((state: RootState) => state.modal);
  const {setParam , getParam, removeParam} = useSearchParamsHook()
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
  };
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if(getParam('auth')){
      dispatch(openAuth(true))
    }
    else {
      dispatch(openAuth(false))
    }
  }, [getParam('auth')])


  const showModal = () => {
    dispatch(openAuth(true))
    setParam('auth', authOpen ? 'false' : 'true')
  };

  
  const handleCancel = () => {
    dispatch(openAuth(false)) 
    removeParam('auth')
  };

  

  return (
    <>
      <div className="bg-green-100  w-full  fixed top-0 z-50 ">
        <Container>
          <div className="flex w-full justify-between  mx-auto items-center py-4">
            <h2 className="text-3xl font-semibold">
              DM-<span className="text-green-600">Shop</span>
            </h2>
            <div className="flex gap-4 items-center pl-2  bg-[#ffffffad] w-full max-w-[500px]">
              <span className="mb-[2px] text-gray-400">|</span>
              <form
                onSubmit={handleSearch}
                className="flex items-center gap-2 justify-between w-full"
              >
                <input
                  className="outline-none border-none bg-transparent w-full"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button
                  onClick={handleSearch}
                  type="button"
                  className="bg-green-600 text-xl px-4 py-2 text-white"
                >
                  <BiSearch />
                </button>
              </form>
            </div>

            <div className="flex  gap-4">
              <NavLink
                className="!mb-0 flex items-center justify-center"
                to="/liked-recipes"
              >
                <Badge count={11} overflowCount={9} >
                  <BsCart3 className="text-2xl" />
                </Badge>
              </NavLink>

              <NavLink
                className="!mb-0 flex items-center justify-center"
                to="/liked-recipes"
              >
                <Badge count={likedProducts?.length} overflowCount={9} >
                  <AiFillHeart className="text-[26px] text-red-500" />
                </Badge>
              </NavLink>

              <Avatar
                onClick={showModal}
                size="large"
                className="shadow-xl"
                src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
              />
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
        {(getParam("auth") === "true" && <Auth />) ||
          (getParam("auth") === "signIn" && <SignIn />) ||
          (getParam("auth") === "signUp" && <SignUp />)}
      </Modal>
    </>
  );
};

export default Header;
