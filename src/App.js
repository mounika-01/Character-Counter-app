import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {charArr: [], wordInput: ''}

  onChangeWord = event => {
    this.setState({wordInput: event.target.value})
  }

  onAddWord = event => {
    event.preventDefault()
    const {wordInput} = this.state
    const count = wordInput.length
    const characters = {
      id: uuidv4(),
      wordInput,
      count,
    }
    this.setState(prevState => ({
      charArr: [...prevState.charArr, characters],
      wordInput: '',
    }))
  }

  render() {
    const {wordInput, charArr} = this.state
    return (
      <div className="main-container">
        <div className="character-counter-result">
          <div className="heading-container">
            <h1>Count the characters like a Boss...</h1>
          </div>
          <div className="result-container">
            {charArr.length > 0 ? (
              <ul className="char-count-container">
                {charArr.map(eachWord => (
                  <li className="list-item" key={eachWord.id}>
                    <p>
                      {eachWord.wordInput}: {eachWord.count}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-inputs"
              />
            )}
          </div>
        </div>

        <div className="input-container">
          <h1 className="input-heading">Character Counter</h1>
          <form className="search-button-container" onSubmit={this.onAddWord}>
            <input
              type="text"
              className="input-box"
              onChange={this.onChangeWord}
              value={wordInput}
              placeholder="Enter the Characters here"
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
