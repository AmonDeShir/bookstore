import { html, css, customElement, style } from "../base.js";

customElement("c-link", { href: "" }, (props, ref) => {
  style(ref, () => css`
    :host {
      padding: 5px;
      transform: scale(1);
      transition: transform 0.25s;
    }

    :host(:hover) {
      transform: scale(1.2);
    }
    
    a {
      flex: 1;
      font-size: 0.95rem;
      color: var(--color-text-inv);
      text-decoration: none;
      font-weight: 600;
    }
  `);

  return html`
    <a href="${props.href}">
      <slot></slot>
    </a>
  `;
});

