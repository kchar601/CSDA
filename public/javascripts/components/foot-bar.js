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
        display: flex;
        flex-direction: row;
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
        height: fit-content;
        align-items: center;
        padding: 8px 16px;
    }

    .runOff{
        white-space: wrap;
        max-width: 242px;
    }

    ul {
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
        background-color: var(--primary);
        cursor: pointer;
    }

    a {
        display: block;
        text-decoration: none;
        color: var(--text);
        border-radius: 8px;
    }

    a:hover, a:active, a:focus {
        background-color: var(--primary);
        font-weight: bold;
        color: var(--background);
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
        font-size: var(--small-font);
        margin: 0px;
        padding: 32px 0px 0px 0px;
        justify-content: center;
    }

    @media only screen and (max-width: 768px) {
        footer{
            margin: auto;
            padding: 0px;
        }
        .special{
            width: fit-content;
        }
        div{
            width: fit-content;
        }
        .hero{
            align-self: center;
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
<div class="hero">
    <a href='/index.html' class="logo"><img src="../../images/logo no background.png"></a>
    <h2 class="prevent-select">Charlton & Slivinski Digital Architects</h2>
</div>
<footer>
    <div>
        <h3 class="prevent-select">Site Directory</h3>
        <ul>
            <a href="/index.html"><li>Home</li></a>
            <a href="/meetings.html"><li>Meetings</li></a>
            <a href="/contact.html"><li>Contact</li></a>
            <a href="/about.html"><li>About</li></a>
            <a href="/faq.html"><li>FAQ</li></a>
        </ul>
    </div>
    <div>
        <h3 class="prevent-select">Admin<span class="p-1"></span></h3>
        <ul>
            <a href="/login.html"><li>Login</li></a>
            <a href="/dashboard.html"><li>Dashboard</li></a>
        </ul>
    </div>
    <div>
        <h3 class="prevent-select">Other Recovery Links</h3>
        <ul>
            <a href="https://www.youtube.com/c/AlcoholicsAnonymousWorldServicesInc"><li class="runOff">Alcoholics Anonymous World Services YouTube Channel</li></a>
            <a href="http://www.aa.org/"><li>Alcoholics Anymous Website</li></a>
        </ul>
    </div>
    <div>
        <h3 class="prevent-select">Want to stay up to date?</h3>
        <h4 class="prevent-select">Consider subscribing to our mailing list<h4>
        <ul>          
            <li>
                <label for="email" class="hide">Email address:</label>
                <input type="text" id="emailList" placeholder="Enter email address">
                <button type="submit" onclick="return addEmail()">Subscribe</button>
            </li>
        </ul>
    </div>
</footer>
<div class="hero">
    <p class="prevent-select small-text">© The Warrenton Meeting Place 2023</p>
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