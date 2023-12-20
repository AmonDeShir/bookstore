import { css, customElement, html, style } from "../base.js";
customElement("c-header", {}, ({}, ref) => {
    style(ref, () => css `
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
    return html `
    <header>
      <slot></slot>
    </header>
  `;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTdELGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQm5CLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFBOzs7O0dBSVYsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFBIn0=