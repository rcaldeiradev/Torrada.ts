import { Toast } from "./Toast";

class Torrada implements Interfaces.Torrada {
  constructor() {
    console.log('Constructor called');
  }

  success(message: string): void {
    this.clearInstances();

    const toast = new Toast({ message: message });
    const body = document.querySelector('body');

    body?.appendChild(toast.element);
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
  TorradaObject.success('Roosevelt is an awesome band!!')
})

alert?.addEventListener('click', e => {
  e.preventDefault();
  TorradaObject.success('Is it?')
})

error?.addEventListener('click', e => {
  e.preventDefault();
  TorradaObject.success('No, I do like Coldplay.')
})