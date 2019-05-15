import React from 'react';
import PropTypes from 'prop-types';

//why do we have to toString the color, what else could it be?
const hexFromColor = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase();
};

const hexFromRGB = (rgb) => {
  return `#${hexFromColor(rgb.red)}${hexFromColor(rgb.green)}${hexFromColor(rgb.blue)}`;
};



//Color takes a prop = color, which we destructure to help developers know what properties come with color
export default function Color({ name, rgb }) {
  const hex = hexFromRGB(rgb);

  return (
    <dl>
      <dt>Name:</dt>
      <dd>{name || hex}</dd>

      <dt>Hex:</dt>
      <dd>{hex}</dd>

      <dt>rgb:</dt>
      <dd>
        <p>Red- {rgb.red}</p>
        <p>Green- {rgb.green}</p>
        <p>Blue- {rgb.blue}</p>
      </dd>
    </dl>
  );
}

//rgb: 
// red: 255
// green: 0
// blue: 0
Color.propTypes = {
  name: PropTypes.string.isRequired,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};
