import React from 'react';
import './App.css';
import PersonComponent from './components/MyNewComponent';
function App() {
  return (
    <div className="App">
      <PersonComponent firstName={"John"} lastName={"Doe"} age ={"32"} hairColor = {"Brown"}/>
      <PersonComponent firstName={"Brian"} lastName={"Smith"} age ={"28"} hairColor = {"Yellow"}/>
      <PersonComponent firstName={"Hailey"} lastName={"Ryan"} age ={"34"} hairColor = {"Green"}/>
      <PersonComponent firstName={"Jessica"} lastName={"Win"} age ={"19"} hairColor = {"Blue"}/>
    </div>
  );
}

export default App;
