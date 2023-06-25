import { Avatar, Image } from "antd";
import React from "react";
import "./GistListUI.scss";
import fileIcon from "../../images/icons/left-and-right.png";
import forkIcon from "../../images/icons/code.png";
import comment from "../../images/icons/comment.png";
import star from "../../images/icons/star.png";
import docs from "../../images/icons/docs.png";
import { DateFormat } from "../../utils/DateFormat/DateFormat";
import { CountFiles } from "../../utils/CountFiles/CountFiles";

function GistListUI(props) {
  let { gist } = props || {};
  let {
    owner,
    description,
    created_at,
    updated_at,
    files,
    comments_url,
    forks_url,
  } = gist || {};
  let { login, avatar_url, starred_url } = owner || {};

  return (
    <div className="main-container">
      <div className="top-div">
        <div className="profile-div">
          <Avatar size="small" src={avatar_url ?? avatar_url} />
          <span className="name-div">{login}</span>
        </div>
        <div className="icons-div">
          <div className="files-div">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={15} height={15} src={fileIcon} preview={false} />
              <span>{`${CountFiles(files)} Files`}</span>
            </a>
          </div>

          <div className="forks-div">
            <a href={forks_url} target="_blank" rel="noopener noreferrer">
              <Image width={15} height={15} src={forkIcon} preview={false} />
              <span>Forks</span>
            </a>
          </div>

          <div className="comments-div">
            <a href={comments_url} target="_blank" rel="noopener noreferrer">
              <Image width={15} height={15} src={comment} preview={false} />
              <span>Comment</span>
            </a>
          </div>
          <div className="star-div">
            <a href={starred_url} target="_blank" rel="noopener noreferrer">
              <Image width={15} height={15} src={star} preview={false} />
              <span>Stars</span>
            </a>
          </div>
        </div>
      </div>
      <div className="date-div">
        <div className="created-div">
          Created at: {DateFormat(created_at ?? created_at)}
        </div>
        <div className="updated-div">
          Last updated :{DateFormat(updated_at ?? updated_at)}
        </div>
      </div>

      <div className="description-div">
        <span>{description ? description : "No description"}</span>
      </div>

      <div className="files-name">
        {Object.keys(files)?.map((item) => (
          <div>
            <Image width={15} height={15} src={docs} preview={false} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GistListUI;
