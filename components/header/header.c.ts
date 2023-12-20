import { css, customElement, html, style } from "../base.js";

customElement("c-header", {}, ({}, ref) => {
  style(ref, () => css`
    header {
      width: 100%;
      height: 45vw;
      min-height: 300px;
      text-align: center;
      background-image: url("/public/background.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }

    @media (min-width: 1000px) {
      header {
        height: 40vw;
      }
    }
  `);

  return html`
    <header>
      <slot></slot>
    </header>
  `;
})