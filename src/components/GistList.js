import React from "react";
import { useSelector } from "react-redux";
import GistListUI from "./GistListUI/GistListUI";
import { Spin } from "antd";
import "../components/GistList.scss";

function GistList() {
  // Access the 'gistList' state from the Redux store
  const gistList = useSelector((state) => state.gistList);

  return (
    <>
      {gistList ? (
        // If 'gistList' is not empty, render a list of 'GistListUI' components
        gistList?.map((item) => <GistListUI gist={item} key={item?.id} />)
      ) : (
        // If 'gistList' is empty, show a loading spinner
        <div className="loader-div">
          <Spin size="large" />
        </div>
      )}
    </>
  );
}

export default GistList;
