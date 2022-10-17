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
export const FirstApp = ({title, subTitle, name}) => {
  //console.log(props);
  return (
    <>
      {/* <h1>{newPost()}</h1> renderizar un componente externo*/}
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

//
FirstApp.propType = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: "Elden Ring",
  subTitle: "adsasd",
  //title: "Sin titulo",
}