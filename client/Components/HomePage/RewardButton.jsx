import React from 'react';
import {FiX} from 'react-icons/fi';
import { IconContext } from 'react-icons';
import JsxParser from 'react-jsx-parser';

function RewardButton(props) {
  const Icon = props.logo;

  return (
    <button className="RewardButton" onClick={() => console.log("clicked!")}>
        <Icon className="RewardIcon"></Icon>
    </button>
  );
}

export default RewardButton;