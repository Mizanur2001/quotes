console.log("Welcome to Quotation website console");
AOS.init();
const newQ = document.getElementById('newQ');
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const tweet = document.getElementById('tweet');
let dataJson = '';
let rand = 0;

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${dataJson[rand].text} by ${dataJson[rand].author ? dataJson[rand].author : 'Unknown'}`;
    window.open(tweetPost);
}

const getAuthorText = () => {
    rand = Math.ceil(Math.random() * dataJson.length);
    quotes.innerText = dataJson[rand].text;
    author.innerText = dataJson[rand].author ? `by ${dataJson[rand].author}` : 'by Unknown';
}

const getQuotationApi = async () => {
    try {
        let data = await fetch(`https://type.fit/api/quotes`);
        dataJson = await data.json();
        getAuthorText();
    } catch (err) {
        console.log("Check Your internet connection");
        quotes.innerText = 'Check Your internet Connection :(';
    }
}

newQ.addEventListener('click', getAuthorText);
tweet.addEventListener('click', tweetNow)

getQuotationApi();