const footBar = document.createElement('template');
footBar.innerHTML = /*html*/`
<style>
    :host {
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        color: var(--text);
        font-family: 'gabarito', sans-serif;
        font-size: var(--body-font);
        width: 100%;
        padding-bottom: 32px;
        border-top: 2px solid var(--primary);
        font-family: 'RocknRoll One';
        font-weight: 400;
        background-color: var(--background);
        color: var(--text);
    }

    h1, h2, h3, h4, h5 {
    font-family: 'Caudex';
    font-weight: 700;
    }

    footer {
        margin: 32px 0px;
        display: grid;
        padding: 0px 64px;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .prevent-select {
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    img {
        width: 96px;
        aspect-ratio: 16:9;
    }

    h2{
        font-size: 2.369rem;
        margin-left: 8px;
    }

    h3{
        font-size: 1.333rem;
        margin-bottom: 4px;
    }

    .hero {
        display: flex;
        flex-direction: column;
        height: fit-content;
        align-items: center;
        padding: 8px 16px;
    }

    footer div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hero h3{
        text-align: center;
        margin: 0;
    }

    .runOff{
        white-space: wrap;
        max-width: 242px;
    }

    ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        gap: 8px;
        margin: 8px;
    }

    li {
        font-size: var(--body-font);
        border-radius: 8px;
        padding: 8px;
        font-family: var(--body-font-type);
    }

    .hide {
        display: none;
    }

    input {
        border-radius: 8px;
        border: none;
        padding: 8px;
        background-color: var(--background-hover);
        font-size: var(--body-font);
        font-family: var(--body-font-type);
        width: 60%;
    }

    button{
        background-color:var(--accent);
        border: none;
        color: var(--background);
        font-size: var(--body-font);
        padding: 8px;
        border-radius: 8px;
    }

    button:hover, button:active, button:focus{
        background-color: var(--secondary);
        cursor: pointer;
    }

    a {
        display: block;
        text-decoration: none;
        color: var(--text);
        border-radius: 8px;
    }

    a:hover, a:active, a:focus {
        background-color: var(--secondary);
        font-weight: bold;
    }

    .logo:hover {
        background-color: transparent;
        font-weight: normal;
    }

    .special {
        background-color: var(--accent);
        color: var(--background);
    }

    .special:hover, .special:active, .special:focus {
        background-color: var(--accent-hover);
        font-weight: normal;
    }

    .noHover:hover, .noHover:active, .noHover:focus {
        background-color: transparent;
        font-weight: normal;
    }

    .small-text {
        display: flex;
        width: 100%;
        border-top: 1px solid var(--primary);
        font-size: 0.750rem;
        margin: 0px;
        padding: 32px 0px 0px 0px;
        justify-content: center;
    }

    @media only screen and (max-width: 1190px) {
        footer{
            padding: 0px;
        }
    }

    @media only screen and (max-width: 1060px) {
        ul{
            flex-direction: column;
        }
        footer div{
            justify-content: start;
        }
    }

    @media only screen and (min-width: 769px) {
        footer{
            grid-template-columns: .6fr 1fr .6fr;
        }
    }

    @media only screen and (max-width: 768px) {
        footer{
            margin: auto;
            padding: 0px;
            grid-template-rows: auto auto auto;
        }

        footer > div {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .special{
            width: fit-content;
        }
        div{
            width: fit-content;
        }
        .hero{
            align-self: center;
            flex-direction: row;
        }

        .hero h3{
            margin: 0px;
        }
    }

    @media (max-width: 720px) {
        .img{
            margin: 0;
            padding-left: 0;
        }
    }

    @media only screen and (max-width: 486px) {
        .logo {
            padding-top:16px;
        }
    }

    .p-1{
        padding-right: 64px;
    }
</style>
<footer>
    <div class="hero">
        <a href='/index.html' class="logo"><img src="../../images/logo no background.webp"></a>
        <h3 class="prevent-select">Charlton & Slivinski <br>Digital Architects</h3>
    </div>
    <div>
        <h3 class="prevent-select">Site Directory</h3>
        <ul>
            <a href="/index.html"><li>Home</li></a>
            <a href="/about.html"><li>About Us</li></a>
            <a href="/services.html"><li>Services</li></a>
            <a href="/portfolio.html"><li>Portfolio</li></a>
            <a href="/contact.html"><li>Contact Us</li></a>
        </ul>
    </div>
    <div>
        <h3 class="prevent-select">Looking for a estimate?</h3>
        <ul>
            <a href="/estimate.html"><li>Fill out our form!</li></a>
        </ul>
    </div>
</footer>
<div class="hero">
    <p class="prevent-select small-text">© Charlton and Slivinski Digital Architects 2023</p>
</div>
`;

class FootBar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.append(footBar.content.cloneNode(true));
    }

}

window.customElements.define('foot-bar', FootBar);

async function addEmail(){
    const email = document.querySelector('foot-bar').shadowRoot.querySelector('#emailList').value;
    if(email == ""){
        alert("Please enter a valid email address"); 
        return false;
    };
    const body = {email: email};
    const response = await fetch('/api/addEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });
    const result = await response.json();
    if(result.success){
        alert("Thank you for subscribing to our mailing list!");
        return true;
    }
    else{
        alert("An error occured. Please try again later.");
        return false;
    }
}