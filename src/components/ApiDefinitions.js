import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGistList, setGistListUserName } from "../redux/Actions";
import { Octokit } from "@octokit/rest";

function ApiDefinitions() {
  const octokit = new Octokit({
    auth: "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",
  });
  const dispatch = useDispatch();
  const gistList = useSelector((state) => state.gistList);
  const getUserName = useSelector((state) => state.getUserName);
  console.log("getUserName", typeof getUserName);

  useEffect(() => {
    getPublicGists();
  }, []);

  useEffect(() => {
    if (getUserName === "") {
      getPublicGists();
    } else {
      getPublicGistsByUsername(getUserName);
    }
  }, [getUserName]);

  async function getPublicGists() {
    try {
      const response = await octokit.gists.listPublic();
      const publicGists = response.data;
      dispatch(setGistList(publicGists));
    } catch (error) {
      console.error(error);
    }
  }

  async function getPublicGistsByUsername(userName) {
    try {
      if (userName) {
        // console.log("userName", userName);

        const response = await octokit.gists.listForUser({
          username: userName,
        });
        const publicGists = response.data;
        dispatch(setGistListUserName(publicGists));
      }
    } catch (error) {
      console.error(error);
    }
  }
  return <></>;
}

export default ApiDefinitions;
