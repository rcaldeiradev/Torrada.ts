import { Toast } from "./Toast";
import './sass/main.scss';

class Torrada implements Interfaces.Torrada {

  constructor() {
    console.log('Constructor called');
  }

  success(message: string): void {
    this.clearInstances();

    const toast = new Toast({ message: message, severity: 'success' });
    const body = document.querySelector('body');

    body?.appendChild(toast.element);
  }

  alert(message: string): void {
    this.clearInstances();

    const toast = new Toast({ message: message, severity: 'alert' });
    const body = document.querySelector('body');

    body?.appendChild(toast.element)
  }

  error(message: string): void {
    this.clearInstances();

    const toast = new Toast({ message: message, severity: 'error' });
    const body = document.querySelector('body');

    body?.appendChild(toast.element)
  }

  clearInstances(): void {
    const elements = document.querySelectorAll('.torrada');
    elements.forEach(element => {
      element.remove();
    })
  }

}

const TorradaObject = new Torrada();

const success = document.getElementById('success');
const alert = document.getElementById('alert');
const error = document.getElementById('error');

success?.addEventListener('click', e => {
  e.preventDefault();
  TorradaObject.success('Roosevelt is an awesome band.')
})

alert?.addEventListener('click', e => {
  e.preventDefault();
  TorradaObject.alert('Is it?')
})

error?.addEventListener('click', e => {
  e.preventDefault();
  TorradaObject.error('No, I do like Coldplay.')
})