import React from "react";

export default class Typography extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Typography
        </h1>
        <p>
          Tha base copy size is <strong>16/1.5</strong> and the base copy color is <strong>#333333</strong>
          <br/>
          Roboto is used for all copy. Roboto Regular, <strong>Roboto Bold</strong> and <span className="text-black">Roboto Black</span>
        </p>
        <br/>
        <span>
          Main heading using element <strong>h1</strong>
        </span>
        <h1>
          Main Heading
        </h1>

        <br/>
        <span>
          Form category heading using element <strong>h6</strong>
        </span>
        <h6>
          Form category heading
        </h6>

      </div>
    );
  }
}