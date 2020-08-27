import React, { useState } from "react";
import "./ChatScreen.css";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [Input, SetInput] = useState("");
  const [messages, Setmessages] = useState([
    {
      name: "Elon",
      image:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      message: "What's up",
    },
    {
      name: "Elon",
      image:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
      message: "How is it going",
    },
    { message: "Hello, How are you?" },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    Setmessages([...messages, { message: Input }]);
    SetInput("");
  };

  return (
    <div className="ChatScreen">
      <p className="ChatScreen__TimeStamp">YOU MATCHED WITH ELON ON 10/8/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="ChatScreen__message">
            <Avatar
              className="ChatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="ChatScreen__Text">{message.message}</p>
          </div>
        ) : (
          <div className="ChatScreen__message">
            <p className="ChatScreen__TextUser">{message.message}</p>
          </div>
        )
      )}

      <div>
        <form className="ChatScreen__input">
          <input
            type="text"
            placeholder="Type a message"
            className="ChatScreen__InputField"
            value={Input}
            onChange={(e) => SetInput(e.target.value)}
          />
          <IconButton>
            <button className="InputButton" type="submit" onClick={handleSend}>
              {" "}
              SEND
            </button>
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
