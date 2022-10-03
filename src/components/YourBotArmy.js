import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots,removeBot,deleteBot}) {
  //your bot army code here...
  const myBots= bots.map(bot =>
    <BotCard
     key={bot.id}
     bot ={bot}
     clickEvent = {removeBot}
     deleteBot={deleteBot}
    />
    )

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {myBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
