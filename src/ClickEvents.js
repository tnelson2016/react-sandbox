function App() {
    const title = "Welcome to my website"
    const handleClick = () => {
        // console.log({title: 'I am the title key'})
        console.log("button is clicked")
    }

    const handleEvent = (event) => {
        // Event object is availbe automatically
        //Event is an Object in javascript 
        //I t has got alot of information
        console.log(event)

        console.log(event.target)
        console.log(event.target.innerText)
    }
    return (
        <div>
            <h1>App</h1>
            {/* here we are passing a reference of the handleClick function
            to the onClick listener*/}
            {/* We are telling the onClick listener to call handleClick function only when the button is 
            is clicked. */}
            <button onClick={handleClick}>Click me</button>
            {/* Inline functions  */}
            {/* when we have only one line of code in arrow function this can be put on the same line */}
            <button onClick={ (event) =>  console.log(event)
            }>Inline function</button>


            <button onClick={handleEvent}>Click Event</button>

        </div>
    )

}

export default App;