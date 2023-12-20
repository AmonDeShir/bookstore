import { customElement, html, css, style } from "../base.js";

customElement("c-navigation", {}, (_, ref) => {
  style(ref, () => css`
    :host {
      width: 100%;
      height: 50px;
      background-color: var(--color-main);
      box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 6px 2px;
    }

    nav {
      width: 100%;
      height: 100%;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
    }
  `);

  return html`
    <nav>
      <slot></slot>
    </nav>  
  `;
});
