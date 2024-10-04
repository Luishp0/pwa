const CACHE_NAME = 'appShell2'; // Versiona el cache
const DYNAMIC_CACHE = 'dinamico';
const FILES_TO_CACHE = [
  '/src/img/image(1).jpg',
  '/src/img/image(2).jpg',
  '/src/img/image(3).jpg',
  '/img/error.jpg', // Ruta corregida de la imagen de error
  '/index.html',
  '/src/App.js',
  '/src/components/inicio.jsx',
  '/src/components/login.jsx',
  '/src/components/navbar.jsx',
  '/src/components/registro.jsx',
];

// Durante la instalación, cachea los archivos definidos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE).catch(error => {
        console.error('Error al agregar archivos al cache:', error);
      });
    })
  );
  self.skipWaiting();
});

// Elimina caches antiguos durante la activación
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME && cache !== DYNAMIC_CACHE) {
            return caches.delete(cache); // Borrar caches anteriores
          }
        })
      );
    })
  );
  self.clients.claim(); // Tomar control inmediato de la página sin recargar
});

// Manejo del fetch para servir recursos y gestionar el cache dinámico
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la respuesta es válida, guárdala en el cache dinámico
        if (response && response.status === 200) {
          return caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        } else {
          // Si la respuesta no es válida, buscar en el cache
          console.error('Respuesta no válida, buscando en cache:', event.request.url);
          return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            } else {
              // Si no está en el cache, muestra la imagen de error
              return caches.match('/img/error.jpg'); // Ruta corregida
            }
          });
        }
      })
      .catch(() => {
        // Si fetch falla, buscar en el cache
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          } else {
            // Si no está en el cache, obtener la imagen de error y almacenarla en el cache dinámico
            return caches.match('/img/error.jpg').then(errorImage => {
                if (errorImage) {
                  return errorImage; // No intentes almacenar la imagen en la caché dinámica
                
                
              }
            });
          }
        });
      })
  );
});