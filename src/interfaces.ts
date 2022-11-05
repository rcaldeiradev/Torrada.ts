namespace Interfaces {
  export interface Toast {
    message: string,
    element: Node,
    buildElement(): Element,
  }

  export interface Torrada {
    success(message: string): void,
    clearInstances(): void,
  }
}