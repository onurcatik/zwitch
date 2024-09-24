// import React, { useEffect } from "react";
// import { Chat } from "./Chat";
// import { useParams } from "react-router-dom";
// import { ChannelDescription } from "./ChannelDescription";
// import { useChannelDetails } from "../../../shared/hooks";
// import { LoadingSpinner } from "../../../shared/components";


// export const ChannelView = () => {
//   const {isFetching , getChannelDetails, channelDetails} = useChannelDetails();
//   const {id} = useParams();
//   useEffect(() => {

//     getChannelDetails()

//   }, [])

//   if (isFetching) {
//     return <LoadingSpinner/>
//   }
//   return (
//     <div className="channel-container">
//       <div className="channel-video-description-section">
//         <div className="channel-offline-placeholder">
//           <span>Channel is offline</span>
//         </div>
//         <ChannelDescription
//           channelId={channelDetails.id}
//           title={channelDetails.title}
//           description={channelDetails.description}
//           username={channelDetails.username}
//         />
//       </div>
//       <Chat />
//     </div>
//   );
// };


import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails } from "../../../shared/hooks";
import { LoadingSpinner } from "../../../shared/components";
import { ReactFlvPlayer} from "react-flv-player"

export const Stream = ({ streamUrl }) => {
  return (
    <div className="channel-video-container">
      <ReactFlvPlayer width="100%" height="100%" url={streamUrl} />
    </div>
  );
};



export const ChannelView = ({ getChannels }) => {
  const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();

  const { id } = useParams();

  useEffect(() => {
    getChannelDetails(id);
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        {channelDetails.isOnline ? (
          <Stream streamUrl={channelDetails.streamUrl} />
        ) : (
          <div className="channel-offline-placeholder">
            <span>Channel is offline</span>
          </div>
        )}
        <ChannelDescription
          channelId={channelDetails.id}
          title={channelDetails.title}
          description={channelDetails.description}
          username={channelDetails.username}
          getChannels={getChannels}
        />
      </div>
      <Chat channelId={channelDetails.id}/>
    </div>
  );
};