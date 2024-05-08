import Topbar from "./components/Topbar.jsx";

const PortalLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default PortalLayout;
