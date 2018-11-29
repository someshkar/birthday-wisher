import React from 'react'
import BirthdayMessage from './components/BirthdayMessage'
import BirthdayData from './data/BirthdayData'
class App extends React.Component {
  componentWillMount() {
    document.body.style.background = BirthdayData.color
    document.querySelector('title').innerText = `Happy Birthday, ${BirthdayData.wishee}!`
    document.querySelector('.favicon').href = `//dummyimage.com/64x64/${BirthdayData.color.substring(1)}/${BirthdayData.color.substring(1)}`
  }
  
  render() {
    return (
      <div className='App'>
        <BirthdayMessage birthdayData={BirthdayData}/>
      </div>
    )
  }
}

export default App