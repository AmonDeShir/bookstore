import { html, css, customElement, style } from "../base.js";
customElement("c-link", { href: "" }, (props, ref) => {
    style(ref, () => css `
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
    return html `
    <a href="${props.href}">
      <slot></slot>
    </a>
  `;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2xpbmsuYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTdELGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbkQsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCbkIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUE7ZUFDRSxLQUFLLENBQUMsSUFBSTs7O0dBR3RCLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9