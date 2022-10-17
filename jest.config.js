const setup = {
    //TODO: jsdom,
    setupFiles:['./jest.setup.js']
}
export default setup;

module.exports={
    testEnvironment:['./jest-environment-jsdom'],
}