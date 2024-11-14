import React from "react";
import { Outlet } from "react-router-dom";
import AppleYoutube from "../../../../../../WEEK-7/ReactAPIandRouting/ReactAPI-1/src/Components/YoutubeVideos/YoutubeVideos";

function SharedVideo() {
  return (
    <>
      <Outlet />
      <AppleYoutube />
    </>
  );
}
export default SharedVideo;
