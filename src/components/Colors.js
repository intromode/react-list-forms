import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

//have to destructor otherwise you have to do colors.colors. so it was store the array as an object named colors. guess it passes over as an object? 
export default function Colors({ colors }) {
  //dont have to give Color hex, with color.hex, because the Color component gets the hex from the rgb
  const colorList = colors.map(color => {
    return (
      <>
      <li key={color.name}>
        <Color name={color.name} rgb={color.rgb} />
      </li>
      </>
    );
  });

  return (
    <ul>
      {/* dont need the fragment wrapper? */}
      <>
      {colorList}
      </>
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};
