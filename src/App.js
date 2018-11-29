import React from 'react'
import BirthdayMessage from './components/BirthdayMessage'
import BirthdayData from './data/BirthdayData'
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BirthdayMessage birthdayData={BirthdayData}/>
      </div>
    )
  }
}

export default App