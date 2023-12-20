import { THEME } from "./theme.js";

export function customElement<T extends {}>(name: string, defaultProps: T, render: (props: T, instance) => string) {
  const Class = class extends HTMLElement {
    static observedAttributes = Object.keys(defaultProps);
    protected created = false;
    protected props = { ...defaultProps };
    public shadow: ShadowRoot;
    public css = (props: T) => ``;

    public constructor() {
      super();
      
      this.shadow = this.attachShadow({ mode: 'open' });
      
      render(this.props, this);
      this.created = true;
    }

    public connectedCallback() {
      this.shadow.innerHTML = this.css(this.props) + render(this.props, this);
    }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {      
      if (name in this.props) {  
        this.props[name] = newValue;
        this.shadow.innerHTML = this.css(this.props) + render(this.props, this);
      } 
    }
  } 

  customElements.define(name, Class);
  return Class;
}

export function style<T>(ref: any, style:  (props: T) => string) {
  if (!ref.created) {
    ref.css = style;
  }
}

export function html(strings: any, ...values: any[]): string {
  return String.raw(strings, ...values);
}

export function css(strings: any, ...values: any[]): string {
  return `<style>
    ${THEME}
    ${String.raw(strings, ...values)}
  </style>`;
}