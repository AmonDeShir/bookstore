import { customElement, html, css, style } from "../base.js";
customElement("c-navigation", {}, (_, ref) => {
    style(ref, () => css `
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
    return html `
    <nav>
      <slot></slot>
    </nav>  
  `;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTdELGFBQWEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJuQixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQTs7OztHQUlWLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9