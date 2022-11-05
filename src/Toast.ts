export class Toast implements Interfaces.Toast {
  message: string
  severity: Types.Severity
  element: Node
    
  constructor(settings: { message: string, severity: Types.Severity }) {
    this.message = settings.message
    this.severity = settings.severity
    this.element = this.buildElement();
  }

  buildElement(): Element {
    const toast = document.createElement('div');

    const classes = [
      'torrada',
      'torrada--' + this.severity,
    ];

    toast.setAttribute('class', classes.join(' '));
    toast.innerHTML = this.message;

    return toast;
  }
}