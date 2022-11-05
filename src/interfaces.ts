namespace Interfaces {

  export interface Toast {
    message: string,
    severity: Types.Severity,
    element: Node,
    buildElement(): Element,
  }

  export interface Torrada {
    success(message: string): void,
    alert(message: string): void,
    error(message: string): void,
    clearInstances(): void,
  }

}