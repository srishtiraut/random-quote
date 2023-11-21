import React from 'react';
import './RandomQuote.css';
import { useState } from 'react';
import reload_icon from '../Assets/reload.png';
import twitter_icon from '../Assets/twitter-x.png';


const RandomQuote = () => {

    let quotes = [];   //empty array for storing quotes

    // async fx for fetching data via api and store into above quotes array
    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");   //fetch
        quotes = await response.json();             //store
        //console.log(quotes);
    }

    //for reload button: randomly select an element from quotes variable and assign it into our own quote variable
    const random = ()=>{
        
        const select = quotes[Math.floor(Math.random()*quotes.length)];  //picks a random element from the quotes array
        //console.log(select);
        
        // assign that picked element to useState hook
        setQuote(select);
        
    }

    //for sharing the quote on twitter
    const twitter = ()=>{
        let txt = quote.text;
        let aut = quote.author.split(',')[0];

        //you have to be logged into twitter for the following line of code to work
        window.open(`https://twitter.com/intent/tweet?text=${txt} - ${aut}`);
    }
  
    //create a useState hook for storing current quote
    const [quote, setQuote] = useState({    //initialize the value of quote variable with an object
        text: "Difficulties increase the nearer we go to a goal.",
        author: "Johann Wolfgram"
    });

    //calling function so that api starts working and outputs a quote on the screen
    loadQuotes();

return (
    <div className="container">
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
            <div className="author">- {quote.author.split(',')[0]}</div>
            <div className="icons">
                <img src={reload_icon} alt="reload_icon" onClick={()=>{random()}} />
                <img src={twitter_icon} alt="twitter_icon" onClick={()=>{twitter()}} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote;
