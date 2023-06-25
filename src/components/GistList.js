import React from "react";
import { useSelector } from "react-redux";
import GistListUI from "./GistListUI/GistListUI";
import { Spin } from "antd";
import "../components/GistList.scss";

function GistList() {
  const gistListUserName = useSelector((state) => state.gistListUserName);
  const gistList = useSelector((state) => state.gistList);
  console.log("gistList", gistList);

  return (
    <>
      {gistList ? (
        gistList?.map((item) => <GistListUI gist={item} key={item?.id} />)
      ) : (
        <div className="loader-div">
          <Spin size="large" />
        </div>
      )}
    </>
  );
}

export default GistList;
