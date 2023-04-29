import { Fragment } from 'react';

import ForwardCounter from './components/ForwardCounter';
import BackwardCounter from './components/BackwardCounter';

const App = () => (
  <Fragment>
    <ForwardCounter />
    <BackwardCounter />
  </Fragment>
);

export default App;
