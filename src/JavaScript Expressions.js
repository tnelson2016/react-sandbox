import './App.css';
import Header from './components/Header';


//React uses webpack and babel to compile JSX into normal browser html and we can use 
//variables, constants and javascript expressions in jsx
function App() {
  const title = "Welcome to my website"
  const subtitle = "This is a website for learning react"
  const address ="http://troynelson.com"
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Header />
      {/* we can write javascript variables, constants and expressions in curly brackets */}
      <h2>{title.toUpperCase()}</h2>
      <h3>{subtitle}</h3>
      <a href={address} target='blank' >website address</a>
      {/* Date is an Object in JavaScript, so wheneever we want to print or get date we 
      create a new instance of the date object. */}
      {/* Following are the methods available on Date Object. */}
      {/* We can pass our own date to get the exact date, If we dont pass any argument it will print 
      current date.  */}
      <p>Today's date is {new Date('1-02-2050').toDateString()}</p>
      <p>Today's date is {new Date().getDate()}</p>
      <p>Today's date is {new Date().getMonth()  + 1}</p>
      <p>Today's date is {new Date().getUTCFullYear()}</p>
      <p>Random Number: {Math.random()* 1000}</p>
    </div>
  );
}

export default App;
