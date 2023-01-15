import {Container} from './App.styled'
import PropTypes from 'prop-types';


export const App = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

Container.propTypes = {
    children: PropTypes.node.isRequired
}