export class Toast implements Interfaces.Toast {
  message: string
  element: Node
    
  constructor(settings: {message: string}) {
    this.message = settings.message
    this.element = this.buildElement();
  }

  buildElement(): Element {
    const toast = document.createElement('div');
    toast.setAttribute('class', 'torrada');
    toast.innerHTML = this.message;

    return toast;
  }
}