// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    imageLink: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      const tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      const {heads} = this.state
      this.setState({heads: heads + 1, imageLink: tossImage})
    } else {
      const tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      const {tails} = this.state
      this.setState({tails: tails + 1, imageLink: tossImage})
    }
  }

  render() {
    const {heads, tails, imageLink} = this.state
    const total = heads + tails

    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="quote">Heads (or) Tails</p>
          <img src={imageLink} className="image" alt="toss result" />
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Toss Coin
            </button>
          </div>
          <div className="resultsContainer">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
