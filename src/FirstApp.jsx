import React from 'react';
import PropTypes from 'prop-types';
//Fragmento
//<> </>

/* const newPost = () => {
  return 12312 + 3123;
}

const newMessage = {
  message: "Hello There",
  title: "Title",
} */

//rafc
export const FirstApp = ({title, subTitle}) => {
  //console.log(props);
  return (
    <>
      {/* <h1>{newPost()}</h1> renderizar un componente externo*/}
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  )
}

FirstApp.propType = {
  title: PropTypes.string.isRequired
}