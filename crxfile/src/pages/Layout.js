import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">My Home Page</Link>
          </li>
          <li>
            <Link to="/blogs">Our Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Address</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
