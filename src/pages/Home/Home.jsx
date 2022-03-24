import React from 'react';
import "./Home.css"
import SearchBar from "../../components/Home/SearchBar/SearchBar"
import FilterPanel from "../../components/Home/FilterPanel/FilterPanel"
import List from "../../components/Home/List/List"

const Home = () => {
    return (
        <div className='home'>
           {/* search bar */}
           <SearchBar/>
            <div className="home_panelList-wrap">
                
                <div className="home_panel-wrap">
                {/* side pannel */}
                    <FilterPanel/>
                </div>

                <div className="home_list-wrap">
                    {/* list and emplty view */}
                    <List/>
                </div>
            </div>
        </div>
    );
};

export default Home;