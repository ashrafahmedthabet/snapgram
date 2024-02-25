import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <section className="flex flex-1 justify-center flex-col items-center py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            className="hidden xl:block h-screen bg-cover bg-no-repeat"
            alt="logo"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
