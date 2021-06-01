import React from 'react';

import './Header.css';

import { useDispatch, useSelector } from "react-redux";

import {searchAction} from "../../redux/actions/actions";

function Header() {

    const dispatch = useDispatch();

    const [searchInput, title] = useSelector(
        (state) => [
        state.searchInput,
        state.title
        ]
    );

    return (
        <div className="navBar" style={{'backgroundImage': "url('/Slices/nav_bar.png')"}}>
            <div className="topHeader">
                <img className="backButton" src="/Slices/Back.png" alt="back"/>
                <span className="title">{title}</span>
                <span className="search">
                    <img src="/Slices/search.png" alt="search"/>
                </span>
                
            </div>
            
            <input
                type="text"
                name="search"
                placeholder="Search Movie List"
                className="inputText"
                value={searchInput}
                onChange={(e) =>
                    dispatch(searchAction(e.target.value))
                }
            />
      </div>
    )
}

export default Header
