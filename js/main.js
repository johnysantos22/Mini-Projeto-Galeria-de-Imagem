import Galeria from './Galeria.js';
import Modal from './Modal.js'

document.addEventListener('DOMContentLoaded', () => {
  new Galeria('.imgs', '#button');
  new Modal('#modal', '#fechar-modal', '#proximo', '#anterior')
});

