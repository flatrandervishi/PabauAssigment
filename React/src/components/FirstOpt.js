import React from "react";

function FirstOpt(props) {
  const handleNext = (title) => {
    props.handleNext(title);
  };
  return (
    <div className="firstOpt-container">
      <button
        onClick={() => handleNext("Anti Wrinkle Treatment")}
        className="mainContainer"
      >
        <div className="description">
          <div className="descImage">
            <img
              src="https://camo.githubusercontent.com/ac89bf09db8ab8f4f5da843612540495d14b5b8209cb74231eea580c06eb9eb1/68747470733a2f2f7777772e70616261752e636f6d2f77702d636f6e74656e742f75706c6f6164732f656c656d656e746f722f7468756d62732f646f776e6c6f61642d70713366736e6169746779796c7572626672797a6967686d34367939626535386c6f796d747334656f6b2e706e67"
              alt="Pabau Logo"
            />
          </div>
          <div className="descHeading">
            <h1>Anti Wrinkle Treatment</h1>
          </div>
        </div>
        <div className="nextArrow">
          <span>&#8680;</span>
        </div>
      </button>

      <button
        onClick={() => handleNext("Dermal Fillers")}
        className="mainContainer"
      >
        <div className="description">
          <div className="descImage">
            <img
              src="https://camo.githubusercontent.com/ac89bf09db8ab8f4f5da843612540495d14b5b8209cb74231eea580c06eb9eb1/68747470733a2f2f7777772e70616261752e636f6d2f77702d636f6e74656e742f75706c6f6164732f656c656d656e746f722f7468756d62732f646f776e6c6f61642d70713366736e6169746779796c7572626672797a6967686d34367939626535386c6f796d747334656f6b2e706e67"
              alt="Pabau Logo"
            />
          </div>
          <div className="descHeading">
            <h1>Dermal Fillers</h1>
          </div>
        </div>
        <div className="nextArrow">
          <span>&#8680;</span>
        </div>
      </button>

      <button onClick={() => handleNext("Secret RF")} className="mainContainer">
        <div className="description">
          <div className="descImage">
            <img
              src="https://camo.githubusercontent.com/ac89bf09db8ab8f4f5da843612540495d14b5b8209cb74231eea580c06eb9eb1/68747470733a2f2f7777772e70616261752e636f6d2f77702d636f6e74656e742f75706c6f6164732f656c656d656e746f722f7468756d62732f646f776e6c6f61642d70713366736e6169746779796c7572626672797a6967686d34367939626535386c6f796d747334656f6b2e706e67"
              alt="Pabau Logo"
            />
          </div>
          <div className="descHeading">
            <h1>Secret RF</h1>
          </div>
        </div>
        <div className="nextArrow">
          <span>&#8680;</span>
        </div>
      </button>

      <button onClick={() => handleNext("HarmonyCA")} className="mainContainer">
        <div className="description">
          <div className="descImage">
            <img
              src="https://camo.githubusercontent.com/ac89bf09db8ab8f4f5da843612540495d14b5b8209cb74231eea580c06eb9eb1/68747470733a2f2f7777772e70616261752e636f6d2f77702d636f6e74656e742f75706c6f6164732f656c656d656e746f722f7468756d62732f646f776e6c6f61642d70713366736e6169746779796c7572626672797a6967686d34367939626535386c6f796d747334656f6b2e706e67"
              alt="Pabau Logo"
            />
          </div>
          <div className="descHeading">
            <h1>HarmonyCA</h1>
          </div>
        </div>
        <div className="nextArrow">
          <span>&#8680;</span>
        </div>
      </button>
    </div>
  );
}

export default FirstOpt;
