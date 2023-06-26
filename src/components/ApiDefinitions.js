import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGistList, setGistListUserName } from "../redux/Actions";
import { Octokit } from "@octokit/rest";

function ApiDefinitions() {
  const octokit = new Octokit({
    auth: "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",
  });
  const dispatch = useDispatch();
  const getUserName = useSelector((state) => state.getUserName);

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

  // Function to retrieve public gists
  async function getPublicGists() {
    try {
      const response = await octokit.gists.listPublic();
      const publicGists = response.data;
      dispatch(setGistList(publicGists)); // Dispatch the public gists data to update the Redux store.
    } catch (error) {
      console.error(error);
    }
  }

  // Function to retrieve public gists by username
  async function getPublicGistsByUsername(userName) {
    try {
      if (userName) {
        const response = await octokit.gists.listForUser({
          username: userName,
        });
        const publicGists = response.data;
        dispatch(setGistListUserName(publicGists)); // Dispatch the public gists by user name data to update the Redux store.
      }
    } catch (error) {
      console.error(error);
    }
  }

  return <></>;
}

export default ApiDefinitions;
