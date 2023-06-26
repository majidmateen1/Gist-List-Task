import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGistList, setGistListUserName } from "../redux/Actions";
import { Octokit } from "@octokit/rest";

function ApiDefinitions() {
  const octokit = new Octokit();

  const dispatch = useDispatch();

  // Get the user name from redux store
  const getUserName = useSelector((state) => state.getUserName);

  useEffect(() => {
    getPublicGists();
  }, []);

  useEffect(() => {
    // Check if user name is empty
    if (getUserName === "") {
      getPublicGists();
    } else {
      // If user name is not empty then search the gist list with specific user name
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
      // Check if user name exist then call API for specific user name
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
