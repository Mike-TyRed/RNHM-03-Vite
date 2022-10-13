//Exportacion independiente
/* export function HelloWorldApp() {
  return <h1>Hello World!</h1>;
} */

//Exportacion independiente de un arrow function
export const HelloWorldApp = () => {
    return (
    <div>Hello World!</div>
    );
}

//Exportacion por default
/* function HelloWorldApp() {
  return <div>Hello World!</div>;
}
export { HelloWorldApp }; */