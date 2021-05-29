import heroImage from './assets/images/hero.jpg'

import './assets/styles/main.scss'

export default () => (
  <center>
    <h1>Hello, I Am Your React Application !!!</h1>
    <div className="hero">
      <img src={heroImage} alt="super hero" height={200} />
    </div>
  </center>
)