# 🔔 Sistema de Notificaciones de Compra

## 📋 Descripción

Sistema de notificaciones automáticas que muestra alertas de compras recientes para generar **prueba social** y **urgencia** en los visitantes de la landing page.

## ✨ Características

### ⏱️ Temporización
- **Primera notificación**: Aparece 5 segundos después de cargar la página
- **Notificaciones siguientes**: Cada 20 segundos
- **Duración visible**: 5 segundos por notificación
- **Auto-cierre**: Las notificaciones desaparecen automáticamente

### 🎨 Diseño
- **Posición**: Esquina inferior izquierda
- **Estilo**: Card blanco con sombra profesional
- **Animación**: Desliza desde la izquierda y se desvanece al salir
- **Borde**: Verde (color principal de la marca)
- **Icono**: Checkmark (✓) en círculo verde

### 📱 Responsivo
- **Desktop**: Ancho máximo 350px
- **Mobile**: Se adapta al ancho de la pantalla (con márgenes)
- **Tamaños ajustados**: Iconos y padding reducidos en móvil

## 📊 Datos de las Notificaciones

### 👤 Nombres (20 variaciones)
```
María González, Carlos Ramírez, Laura Martínez, Jorge Silva,
Ana Rodríguez, Diego Torres, Carmen López, Roberto Fernández,
Patricia Sánchez, Miguel Ángel, Sofía Morales, Fernando Castro,
Valentina Ruiz, Andrés Vargas, Gabriela Mendoza, Luis Herrera,
Isabella Romero, Ricardo Jiménez, Camila Ortiz, Pablo Navarro
```

### 🌎 Ubicaciones (20 ciudades)
```
Ciudad de México, Bogotá (Colombia), Madrid (España),
Buenos Aires (Argentina), Lima (Perú), Santiago (Chile),
Caracas (Venezuela), Quito (Ecuador), Montevideo (Uruguay),
San José (Costa Rica), Panamá, La Paz (Bolivia),
Asunción (Paraguay), San Salvador (El Salvador),
Tegucigalpa (Honduras), Managua (Nicaragua),
Guatemala, Santo Domingo (Rep. Dominicana),
San Juan (Puerto Rico), Barcelona (España)
```

### ⏰ Tiempos (10 variaciones)
```
Hace 1 minuto, Hace 2 minutos, Hace 3 minutos,
Hace 5 minutos, Hace 7 minutos, Hace 8 minutos,
Hace 10 minutos, Hace 12 minutos, Hace 15 minutos,
Hace 18 minutos
```

## 🎯 Estructura de la Notificación

```html
┌─────────────────────────────────────┐
│ [✓]  María González                 │ [×]
│      Compró el ebook desde          │
│      Ciudad de México               │
│      Hace 5 minutos                 │
└─────────────────────────────────────┘
```

### Elementos:
1. **Icono verde**: Checkmark en círculo con gradiente
2. **Nombre**: En negrita, color negro
3. **Mensaje**: "Compró el ebook desde [ubicación]"
4. **Tiempo**: Texto pequeño en gris
5. **Botón cerrar**: × en la esquina superior derecha

## 🔧 Funcionalidades

### Interactividad
- ✅ **Botón de cerrar**: Los usuarios pueden cerrar manualmente
- ✅ **Auto-cierre**: Se cierra automáticamente después de 5 segundos
- ✅ **Hover en botón**: Cambia de color al pasar el mouse
- ✅ **No bloquea la navegación**: z-index alto pero no intrusivo

### Tracking
- Cada notificación mostrada se registra en Facebook Pixel
- Evento personalizado: `PurchaseNotificationShown`

## 📝 Código Relevante

### HTML
```html
<div id="notification-container"></div>
```

### CSS Principal
```css
#notification-container {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 9999;
    max-width: 350px;
}

.notification {
    background: var(--white);
    border-radius: 12px;
    padding: 16px 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    animation: slideInLeft 0.5s ease-out, fadeOut 0.5s ease-out 4.5s;
    border-left: 4px solid var(--primary-green);
}
```

### JavaScript
```javascript
// Inicialización
initPurchaseNotifications();

// Primera notificación: 5 segundos
// Siguientes: cada 20 segundos
```

## ⚙️ Personalización

### Cambiar el intervalo de tiempo
En `script.js`, línea ~315:
```javascript
setInterval(() => {
    createNotification();
}, 20000); // Cambiar 20000 (20 segundos) al valor deseado en milisegundos
```

### Cambiar duración visible
En `script.js`, línea ~297:
```javascript
setTimeout(() => {
    notification.remove();
}, 5000); // Cambiar 5000 (5 segundos) al valor deseado
```

### Cambiar posición
En `styles.css`, línea ~920:
```css
#notification-container {
    bottom: 20px;  /* Cambiar para mover verticalmente */
    left: 20px;    /* Cambiar a 'right: 20px' para esquina derecha */
}
```

### Agregar más nombres o ubicaciones
En `script.js`, líneas 212-256, agregar elementos a los arrays:
```javascript
const names = [
    'María González',
    'Tu Nuevo Nombre',  // Agregar aquí
    // ...
];

const locations = [
    'Ciudad de México',
    'Tu Nueva Ciudad',  // Agregar aquí
    // ...
];
```

## 🎨 Variaciones de Estilo

### Cambiar color del borde
```css
.notification {
    border-left: 4px solid var(--primary-orange); /* Cambiar a naranja */
}
```

### Cambiar color del icono
```css
.notification-icon {
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); /* Naranja */
}
```

### Cambiar animación
```css
@keyframes slideInLeft {
    from {
        transform: translateX(-100%); /* Desde la izquierda */
        /* Cambiar a translateY(-100%) para desde arriba */
    }
}
```

## 🚀 Beneficios de Conversión

### Prueba Social
- ✅ Muestra que otras personas están comprando
- ✅ Genera confianza en el producto
- ✅ Reduce la fricción en la decisión de compra

### Urgencia
- ✅ Crea sensación de popularidad
- ✅ Motiva a no quedarse atrás
- ✅ Refuerza el mensaje de "oferta limitada"

### Credibilidad
- ✅ Nombres y ubicaciones realistas
- ✅ Tiempos recientes creíbles
- ✅ Diseño profesional y no intrusivo

## 📊 Mejores Prácticas Implementadas

✅ **No intrusivo**: Esquina inferior, no bloquea contenido
✅ **Cerrable**: Usuario tiene control
✅ **Auto-cierre**: No satura la pantalla
✅ **Aleatorio**: Datos variados para mayor credibilidad
✅ **Responsivo**: Se adapta a móviles
✅ **Animado**: Atrae la atención sutilmente
✅ **Rastreado**: Integrado con Facebook Pixel

## 🔍 Testing

### Verificar funcionamiento:
1. Abre `index.html` en el navegador
2. Espera 5 segundos → Aparece primera notificación
3. Espera 20 segundos → Aparece segunda notificación
4. Prueba el botón de cerrar (×)
5. Verifica en móvil (responsive)

### Consola del navegador:
```javascript
// Ver si hay errores
F12 → Console

// Forzar una notificación (en consola)
createNotification();
```

## ⚠️ Consideraciones

### Éticas
- Las notificaciones son simuladas para prueba social
- Asegúrate de que cumplan con las regulaciones de tu país
- Considera agregar un disclaimer si es requerido

### Rendimiento
- Sistema ligero, no afecta la velocidad de carga
- Usa eventos nativos de JavaScript
- No requiere librerías externas

### Accesibilidad
- Las notificaciones no interfieren con lectores de pantalla
- Pueden cerrarse con el mouse
- No bloquean la navegación por teclado

## 📈 Métricas Sugeridas

Monitorea en Facebook Pixel:
- `PurchaseNotificationShown`: Cuántas veces se muestran
- Correlación con `InitiateCheckout`: ¿Aumentan las conversiones?
- Tiempo en página: ¿Los usuarios permanecen más tiempo?

---

**Sistema implementado y listo para generar conversiones! 🎉**
