import {render} from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('Pruebas en <FirstApp/>', () => {
  test('Debe de hacer match con el snapshot', () => {
    
    render(<FirstApp />)
  })
})
