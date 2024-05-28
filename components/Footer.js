class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer is-100">
      <div class="mail-me">
        <a href="mailt:to">
        </a>
      </div>
      <span class="footer-copy">&#169; Made By Juan Kim.</span>
    </footer>
    `;
  }
}

customElements.define('main-footer', Footer);


