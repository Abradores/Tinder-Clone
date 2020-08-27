import React from "react";
import "./Chat.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Elon Musk"
        message="MONEY MONEY MONEY"
        timestamp="40 seconds ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
      />
      <Chat
        name="Mark Zuckerberg"
        message="What's up?"
        timestamp="55 seconds ago"
        profilePic="https://www.money.it/local/cache-vignettes/L300xH300/moton1660-066a8.jpg?1585565194"
      />
      <Chat
        name="Donald Trump"
        message="AMERICA!"
        timestamp="3 days ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
      />
      <Chat
        name="Tom Cruise"
        message="No way"
        timestamp="1 week ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg"
      />
    </div>
  );
}

export default Chats;
