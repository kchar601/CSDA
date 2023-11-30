const navBar = document.createElement('template');
navBar.innerHTML = /*html*/`
<style>
:host {
    display: flex;
    background-color: var(--background);
    color: var(--text);
    font-family: 'gabarito', sans-serif;
    font-size: var(--h5-font);
    border-bottom: 2px solid var(--primary);
    width: 100%;
    box-sizing: border-box; /* Add this line */
    margin: 0; /* Add this line if not already present */
    padding: 0 16px;
}

    nav {
        width: 100%;
        display: flex;
    }

    ul {
        display: flex;
        list-style-type: none;
        width: 100%;
        justify-content: center;
        margin: auto 0;
        padding: 0px 8px 0 0;
    }

    li, button {
        padding: 16px;
        border-radius: 8px;
        border: 1px solid var(--text);
    }

    li{
        position: relative;
        width: max-content;
        margin: 0px 8px;
    }

    li:has(> button){
        padding: 0px;
        margin-top: 0px;
    }

    a {
        display: inline-block;
        margin-bottom: auto;
        text-decoration: none;
        color: var(--text);
        border-radius: 8px;
        font-family: var(--body-font);
    }

    .mainNav:hover, .mainNav:active, .mainNav:focus {
        background-color: var(--secondary);
        animation: moving 5s infinite;
        -webkit-animation: moving .5s ease-in-out infinite alternate;
    }

    @keyframes moving {
        from {transform: translateY(0px);}
        to {transform: translateY(-4px);}
    }

    img {
        width: 96px;
        aspect-ratio: 16:9;
    }

    button{
        background-color:var(--accent);
        border: none;
        color: var(--background);
        font-size: var(--h5-font);
        font-family: 'gabarito', sans-serif;
        cursor: pointer;
        width: 96px;
        font-family: var(--body-font);
    }

    button:hover, button:active, button:focus{
        background-color: var(--primary);
        animation: moving 5s infinite;
        -webkit-animation: moving .5s ease-in-out infinite alternate;
    }

    .donate{
        margin-right: 16px;
    }

    .logo{
        display: flex;
    }

    .hamburger {
        display: none;
        height: fit-content;
        margin: 16px;
        padding: 8px 8px 4px 8px;
    }

    .hidden .span {
        display: flex;
    }

    .CTAwrapper {
        align-self: center;
        display: flex;
        justify-content: flex-end;
    }

    @media only screen and (max-width: 720px) {
        :host {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: fit-content;
            padding: 0px;
            margin-left: 0px;
        }

        ul {
            flex-direction: column;
            gap: 8px;
            margin: 0px;
            margin-bottom: 8px;
            width: fit-content;
        }

        .hidden {
        display: none;
        }   

        li {
            display: block;
            text-align: left;
            width: 100%;
        }

        .logo {
            width: fit-content;
            height: fit-content;
        }

        nav {
            flex-direction: column;
            margin-bottom: 8px;
        }

        .hamburger {
            display: block;
            width: fit-content;
            justify-self: end;
        }

        .mainNav{
            width: fit-content;
        }

        img{
            margin-left: 0px;
            padding-left: 0px;
        }
    }
</style>
<nav>
    <a href='/index.html' class="logo"><img src="../../images/logo no background.png"></a>
    <ul class="hidden">
        <a href='/about.html'><li class="mainNav">About Us</li></a>
        <a href='/services.html'><li class="mainNav">Services</li></a>
        <a href='/portfolio.html'><li class="mainNav">Portfolio</li></a>
    </ul>
    <span class="CTAwrapper">
    <a href='/contact.html'><button>Contact</button></a>
    </span>
</nav>
<button class="hamburger">
    <svg xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 0 448 512"><style>svg{fill:var(--background)}</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
</button>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.append(navBar.content.cloneNode(true));
        const hamburger = shadow.querySelector('.hamburger');
        const navList = shadow.querySelector('ul');
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('hidden');
        });
    }
}

window.customElements.define('nav-bar', NavBar);