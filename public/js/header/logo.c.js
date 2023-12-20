import { customElement, html, css, style } from "../base.js";
customElement("c-logo", { address: "/" }, (props, ref) => {
    style(ref, () => css `
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
    return html `
    <a class="link--no-style" href="${props.address}">
      <h1 class="title__main">KSIĘGARNIA</h1>
      <p class="title__text">System zarządzania bazą danych</p>
    </a>
  `;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvbG9nby5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0QsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN2RCxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQ25CLENBQUMsQ0FBQztJQUdILE9BQU8sSUFBSSxDQUFBO3NDQUN5QixLQUFLLENBQUMsT0FBTzs7OztHQUloRCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==