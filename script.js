
const button1 = document.querySelector('.button1');
button1.addEventListener('click', () => {
    removeActive();
    button1.classList.add('active');
});
const button2 = document.querySelector('.button2');
button2.addEventListener('click', () => {
    removeActive();
    button2.classList.add('active');
});
const button3 = document.querySelector('.button3');
button3.addEventListener('click', () => {
    removeActive();
    button3.classList.add('active');
});
const button4 = document.querySelector('.button4');
button4.addEventListener('click', () => {
    removeActive();
    button4.classList.add('active');
});
const button5 = document.querySelector('.button5');
button5.addEventListener('click', () => {
    removeActive();
    button5.classList.add('active');
});

function removeActive() {
    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    button5.classList.remove('active');
}

let rating = 0;
const submit = document.querySelector('.submit-button');
submit.addEventListener('click', () => {
    if (button1.classList.contains('active')) {
        rating = 1;
        thankyouPage();
    }
    if (button2.classList.contains('active')) {
        rating = 2;
        thankyouPage();
    }
    if (button3.classList.contains('active')) {
        rating = 3;
        thankyouPage();
    }
    if (button4.classList.contains('active')) {
        rating = 4;
        thankyouPage();
    }
    if (button5.classList.contains('active')) {
        rating = 5;
        thankyouPage();
    }

})


function thankyouPage() {
    let image = document.createElement("img");
    image.setAttribute("src", "images/illustration-thank-you.svg");
    document.getElementById("image2-container").append(image);
    document.getElementById("image-container").remove();
    let title = document.getElementById("title");
    title.innerHTML = 'Thank You!'
    let text = document.getElementById("text");
    text.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    document.getElementById('button-container').remove();
    document.getElementById('submit-button').remove();
    let selection = document.getElementById('selection');
    selection.innerHTML = `You selected ${rating} out of 5`;
    var styleSheet = document.createElement("style")
    styleSheet.innerText = style;
    document.head.appendChild(styleSheet);
}


const style = `
.selection{
    margin-top: 1.8em;
    background-color: hsl(214, 20%, 25%);
    border-radius: 25px;
    color: hsl(25, 95%, 59%);
    padding-top: 0.7em;
    padding-bottom: 0.5em;
    padding-left: 1.4em;
    padding-right: 1.4em;
    letter-spacing: .04rem;
    font-size: 11px;
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.text{
    margin-top: -8px;
    padding: 2px;
}
h2 {
    margin-top: 1em;
    color: white;
}
`