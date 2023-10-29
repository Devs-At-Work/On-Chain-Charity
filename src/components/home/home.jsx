import React from "react";
import "./home.css";
import Sidebar from "./components/sidebar/sidebar";
import SearchBar from "./components/searchbar/searchbar";
function Home (){
    return <div className="home">
        <Sidebar />
        <SearchBar />
    </div>;
}

export default Home;