class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header is-100" id="header">
        <a href="./index.html" class="header-logo box-bordered top">
          Juan Kim
        </a>

        <nav class="nav-container">
          <ul class="menu">
            <li class="menu-item"><a href="./index.html">home</a></li>
            <li class="menu-item"><a href="./about-me.html">about me</a></li>
            <li class="menu-item"><a href="./portfolio.html">portfolio</a></li>
          </ul>
        </nav>

        <address class="contacts">
          <a class="contact-item" title="Github" target="_blank" href="https://github.com/J00ahn">
            <i class='bx bxl-github'></i>
          </a>
          <a class="contact-item" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/juan-kim-46b09726b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <i class='bx bxl-linkedin-square' ></i>
          <a class="contact-item" title="Instagram" href="https://www.instagram.com/j00ahn/">
            <i class='bx bxl-instagram' ></i>
          </a>
        </address>
      </header>
    `;
  }
}

customElements.define('main-header', Header);


