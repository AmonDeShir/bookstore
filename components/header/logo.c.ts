import { customElement, html, css, style } from "../base.js";

customElement("c-logo", { address: "/" }, (props, ref) => {
  style(ref, () => css`
    :host {
      width: 100%;
      font-family: 'Changa', sans-serif;
    }

    a {
      text-decoration: none;
    }

    h1 {
      color: var(--color-text-inv);
      font-size: 3rem;
      line-height: 3.25rem;
      padding-top: 15px;
    }

    p {
      color: var(--color-text-inv);
      font-size: 1.25rem;
      line-height: 1.2rem;
      font-weight: bold;
    }

    @media (min-width: 667px) {
      h1 {
        font-size: 6.77vw;
        line-height: 7.34vw; 
      }

      p {
        font-size: 2.8vw;
        line-height: 2.7vw;
      }
    }

    @media (min-width: 300px) {
      h1 {
        font-size: 6.77vw;
        line-height: 7.34vw; 
      }

      p {
        font-size: 2.8vw;
        line-height: 2.7vw;
      }
    }
  `);


  return html`
    <a class="link--no-style" href="${props.address}">
      <h1 class="title__main">KSIĘGARNIA</h1>
      <p class="title__text">System zarządzania bazą danych</p>
    </a>
  `;
});