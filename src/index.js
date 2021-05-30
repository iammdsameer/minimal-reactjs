import { render } from 'react-dom'

import App from './App'

render(<App />, document.getElementById('mount'))

// Below code is a magic, only replace in production.
if (import.meta.hot) {
  import.meta.hot.accept()
}
