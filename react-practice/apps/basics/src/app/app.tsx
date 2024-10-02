// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { NxPlayground } from './playground';

export function App() {
  return (
    <div>
      {/*<NxWelcome title="basics" />*/}
      <NxPlayground message="This is a serious react practice code" />
    </div>
  );
}

export default App;
