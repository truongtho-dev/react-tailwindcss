import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      openMenu: false
    };
  }

  handleClickMenu() {
    console.log("check state !");
    this.setState({
      isMobile: true,
      openMenu: !this.state.openMenu
    });
    console.log(this.state);
  }
  render() {
    return (
      <>
        <nav className="relative fixed top-0 flex w-auto text-white text-xl text-center bg-gray-900 ">
          <div className="pt-5  w-1/5 ml-2 block h-20">Brand</div>
          <div className="hidden w-4/5 sm:flex sm:justify-end text-base h-20">
            <div className="w-1/2 pt-5 flex justify-center">
              <input
                className="placeholder-gray-600 w-1/2 h-10 rounded focus:outline-none focus:shadow-outline text-sm shadow-lg bg-gray-300 pl-2"
                type="search"
                placeholder="Search..."
              />
            </div>

            <ul className="w-1/2 pt-6 font-thin flex">
              <li className="mr-6 hover:text-gray-500">
                <Link to="/">Home</Link>
              </li>
              <li className="mr-6 hover:text-gray-500">
                <Link to="/login">Login</Link>
              </li>
              <li className="mr-6 hover:text-gray-500">
                <Link to="/manage">Manage</Link>
              </li>
            </ul>
          </div>

          <div
            onClick={this.handleClickMenu.bind(this)}
            className=" sm:hidden pt-6 w-full"
          >
            {this.state.openMenu ? (
              <button
                className="float-right mr-8 flex items-center px-3 py-2 border 
          rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            ) : (
              <button
                className="float-right mr-8 flex items-center px-3 py-2 border 
            rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            )}
          </div>
        </nav>
        {this.state.openMenu && this.state.isMobile ? (
          <div className=" w-full flex flex-col sm:hidden text-base h-56 text-white font-hairline bg-gray-800">
            <div className=" pt-5 flex justify-center">
              <input
                className="placeholder-gray-600 w-3/4 h-10 rounded focus:outline-none focus:shadow-outline text-sm shadow-lg bg-gray-300 pl-2"
                type="search"
                placeholder="Search..."
              />
            </div>
            <div className="flex justify-center">
              <ul className="w-3/4 pt-4 justify-center flex flex-col">
                <li className="hover:text-gray-500 border-white border-b ">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-gray-500 mt-1 border-white border-b">
                  <Link to="/login">Login</Link>
                </li>
                <li className="hover:text-gray-500 mt-1 border-white border-b">
                  <Link to="/manage">Manage</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default Header;
