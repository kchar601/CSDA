const navBar = document.createElement('template');
navBar.innerHTML = /*html*/`
<style>
:host {
    display: flex;
    background-color: var(--background);
    color: var(--text);
    font-size: 1.333rem;
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
        justify-content: end;
        margin: auto 0;
        padding: 0px 8px 0 0;
    }

    nav > span{
        display: flex;
        width: 100%;
        justify-content: start;
        margin: auto 16px;
    }

    .largeText {
        font-size: 3.158rem;
        font-family: var(--header-font);
        font-weight: 700;
        margin: auto 0 auto 8px;
    }

    .smallText {
        font-size: 1.369rem;
        font-family: var(--header-font);
        font-weight: 700;
        margin: auto 0;
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

    .CTA{
        background-color:var(--accent);
        border: 1px solid var(--background);
        color: var(--background);
        font-size: var(--h5-font);
        font-family: 'gabarito', sans-serif;
        cursor: pointer;
        font-family: var(--body-font);
    }

    .CTA:hover, .CTA:active, .CTA:focus{
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

    @media (max-width: 1340px) {
        .title .smallText{
            display: none;
        }
    }

    @media only screen and (max-width: 1065px) {
        .title{
            display: none;
        }
    }

    @media only screen and (max-width: 820px) {
        :host {
            display: grid;
            grid-template-columns: 1.8fr .2fr;
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
        }

        .logo {
            width: fit-content;
            height: fit-content;
        }

        nav {
            margin-bottom: 8px;
            flex-direction: column;
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
    <a href='/' class="logo"><img src="../../images/logo no background.png"></a>
    <span class="title">
        <span class="largeText">C</span><span class="smallText">harlton</span><span class="largeText"> & S</span><span class="smallText">livinski</span><span class="largeText"> D</span><span class="smallText">igital</span><span class="largeText"> A</span><span class="smallText">rchitects</span>
    </span>
    <ul class="hidden">
        <a href='/about.html'><li class="mainNav">About</li></a>
        <a href='/services.html'><li class="mainNav">Services</li></a>
        <a href='/portfolio.html'><li class="mainNav">Portfolio</li></a>
        <a href='/contact.html'><li class="mainNav">Contact</li></a>
        <a href='/estimate.html'><li class="CTA">Estimate</li></a>
    </ul>
</nav>
<button class="hamburger CTA">
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