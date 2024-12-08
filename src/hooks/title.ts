import { useEffect } from 'react';

// Hook personalizado para cambiar el título de la página
export function useDocumentTitle(title : string) {
  useEffect(() => {
    document.title = title;
  }, [title]); // El efecto se ejecuta cada vez que 'title' cambia
}