import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import InfiniteScroll from "react-infinite-scroll-component";

import LayoutItem from '../LayoutItem/LayoutItem.js';

import {fetchListAction} from '../../redux/actions/actions';

import "./Layout.css";

function Layout() {

  const dispatch = useDispatch();

  const [currentPage, movieData, fetchingData] = useSelector(
    (state) => [
      state.pageNumber,
      state.filteredItems,
      state.fetchingData
    ]
  );

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    if (fetchingData === true) {
      await fetch(`/data/CONTENTLISTINGPAGE-PAGE${currentPage + 1}.json`)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          dispatch(fetchListAction(data.page["content-items"].content, data.page.title));
        })
        .catch(function (err) {
          console.log(err, " error");
        });
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={movieData.length}
        next={fetchMoreData}
        hasMore={true}
      >
        <div className="layout">
          {movieData &&
            movieData.map((element, index) => (
              <LayoutItem key={index} name={element.name} image={element["poster-image"]} />
            ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Layout;
