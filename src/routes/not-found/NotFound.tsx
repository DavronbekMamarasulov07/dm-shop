import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#56b280]">
      <Link to={"/"}>
        <div className="text-center flex items-center ">
          <h1 className="text-3xl font-bold text-white">404</h1>
          <span className="text-5xl font-extralight  text-white mx-4">|</span>
          <p className="text-base font-semibold text-white">
            This page could not be found.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default NotFound
