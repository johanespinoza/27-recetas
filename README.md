# Landing Page - 27 Consejos Para Bajar de Peso

## 🎯 Descripción
Landing page moderna, persuasiva y totalmente responsiva diseñada para vender el ebook "27 Consejos Exclusivos Para Bajar de Peso Rápidamente" por $6.99 USD.

## ✨ Características Principales

### 🎨 Diseño
- **Colores energéticos**: Verde (#10b981), Naranja (#f97316) y Blanco
- **Totalmente responsivo**: Adaptado para móviles, tablets y computadoras
- **Animaciones suaves**: Efectos de hover, scroll y pulsaciones
- **Tipografía moderna**: Google Fonts (Poppins)

### 🛒 Elementos del Embudo
1. **Producto Principal**: Ebook "27 Consejos Exclusivos Para Bajar de Peso Rápidamente" - $6.99 USD
2. **Order Bump**: Ebook "Recetario Saludable Express" - $3.99 USD
3. **Bonos Gratis**:
   - Guía de Combinaciones de Alimentos
   - Guía de Motivación y Mentalidad Fitness

### ⏰ Urgencia y Conversión
- **Cronómetro diario**: Se reinicia cada 24 horas
- **Múltiples CTAs**: Botones estratégicamente ubicados
- **Testimonios**: 6 reseñas de clientes satisfechos
- **Prueba social**: Badges de confianza y garantías

### 📊 Tracking y Analytics
- **Facebook Pixel**: ID 1275097784113610
- **Eventos rastreados**:
  - PageView
  - ViewContent
  - InitiateCheckout
  - AddToCart
  - ScrollDepth (25%, 50%, 75%, 100%)
  - TimeOnPage (30s, 1min, 2min)
  - ExitIntent

## 📁 Estructura de Archivos

```
27 recetas/
├── index.html              # Estructura HTML principal
├── styles.css              # Estilos CSS responsivos
├── script.js               # JavaScript para interactividad
├── README.md               # Este archivo
├── IMAGENES-INFO.md        # Información sobre las imágenes
├── NOTIFICACIONES-INFO.md  # Documentación del sistema de notificaciones
└── Imagenes/               # Carpeta con imágenes del producto
    ├── Principal.jpeg      # Imagen alternativa del ebook
    ├── principal 2.jpeg    # Imagen principal del hero ✅ USADA
    ├── Order bumps.png     # Imagen del recetario ✅ USADA
    ├── Bono 1.png          # Imagen del bono #1 ✅ USADA
    └── Bono 2.png          # Imagen del bono #2 ✅ USADA
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Navega a la carpeta `c:\Users\JohanyLaura\Documents\WEB\27 recetas`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

### Opción 2: Servidor local (recomendado para pruebas)
```bash
# Con Python
cd "c:\Users\JohanyLaura\Documents\WEB\27 recetas"
python -m http.server 8000

# Con Node.js (si tienes npx)
npx serve

# Luego abre: http://localhost:8000
```

### Opción 3: Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🔗 Enlaces Importantes

**Página de Pago**: https://pay.hotmart.com/J102724575E?checkoutMode=10
- Este enlace está configurado en todos los botones CTA
- Incluye tanto el producto principal como el order bump

## 📱 Secciones de la Landing Page

1. **Hero Section**
   - Título impactante
   - Cronómetro de urgencia
   - Precio con descuento
   - CTA principal
   - Mockup del ebook

2. **Beneficios**
   - 6 tarjetas con beneficios clave
   - Iconos visuales
   - Diseño en grid responsivo

3. **Contenido del Ebook**
   - Lista de lo que incluye
   - CTA secundario

4. **Order Bump**
   - Oferta especial del recetario
   - Precio con descuento
   - Beneficios adicionales

5. **Bonos Gratis**
   - 2 bonos exclusivos
   - Valor total del paquete
   - Ahorro destacado

6. **Testimonios**
   - 6 reseñas de clientes
   - Calificación 5 estrellas
   - Avatares y ubicaciones

7. **Transformación**
   - Comparación Antes/Después
   - Resultados esperados

8. **FAQ**
   - Preguntas frecuentes
   - Acordeón interactivo

9. **CTA Final**
   - Último llamado a la acción
   - Cronómetro repetido
   - Garantía de satisfacción

## 🎨 Paleta de Colores

```css
--primary-green: #10b981    /* Verde principal */
--dark-green: #059669       /* Verde oscuro */
--primary-orange: #f97316   /* Naranja principal */
--dark-orange: #ea580c      /* Naranja oscuro */
--white: #ffffff            /* Blanco */
--light-gray: #f9fafb       /* Gris claro */
--gray: #6b7280             /* Gris medio */
--dark-gray: #1f2937        /* Gris oscuro */
--black: #111827            /* Negro */
```

## 📐 Breakpoints Responsivos

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Funcionalidades JavaScript

1. **Cronómetro**: Cuenta regresiva hasta medianoche (reinicio diario)
2. **FAQ Acordeón**: Expandir/colapsar preguntas
3. **Smooth Scroll**: Desplazamiento suave
4. **Scroll Animations**: Elementos aparecen al hacer scroll
5. **Analytics Tracking**: Eventos de Facebook Pixel
6. **Exit Intent**: Detecta cuando el usuario va a salir
7. **🔔 Notificaciones de Compra**: Sistema automático de prueba social
   - Primera notificación: 5 segundos después de cargar
   - Nuevas notificaciones: Cada 20 segundos
   - 20 nombres y 20 ubicaciones diferentes
   - Auto-cierre después de 5 segundos
   - Totalmente responsivo

## 🔧 Personalización

### Cambiar el enlace de pago
Busca y reemplaza en `index.html`:
```html
https://pay.hotmart.com/J102724575E?checkoutMode=10
```

### Cambiar el Facebook Pixel
En `index.html`, línea ~14:
```javascript
fbq('init', '1275097784113610'); // Reemplaza con tu ID
```

### Modificar precios
Busca en `index.html`:
- `$6.99 USD` - Precio principal
- `$3.99 USD` - Precio order bump

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-green: #10b981;
    --primary-orange: #f97316;
    /* ... más colores */
}
```

## ✅ Checklist de Lanzamiento

- [x] Diseño responsivo implementado
- [x] Cronómetro funcionando
- [x] Facebook Pixel instalado
- [x] Todos los CTAs apuntan al enlace correcto
- [x] Testimonios incluidos
- [x] Order bump destacado
- [x] Bonos visibles
- [x] FAQ implementado
- [x] Garantía mostrada
- [x] **Imágenes reales integradas** ✨
- [x] Imagen principal del ebook
- [x] Imagen del recetario (order bump)
- [x] Imágenes de ambos bonos
- [ ] Probar en diferentes navegadores
- [ ] Probar en dispositivos móviles reales
- [ ] Verificar velocidad de carga
- [ ] Optimizar imágenes PNG (opcional)
- [ ] Configurar dominio personalizado (opcional)

## 🚀 Próximos Pasos

1. **Prueba la página**: Abre `index.html` en tu navegador
2. **Verifica los enlaces**: Asegúrate de que todos los botones funcionen
3. **Prueba el cronómetro**: Confirma que se reinicia correctamente
4. **Revisa en móvil**: Usa las herramientas de desarrollador para simular dispositivos
5. **Sube a hosting**: Considera servicios como Netlify, Vercel o tu propio servidor

## 📞 Soporte

Si necesitas hacer ajustes o tienes preguntas sobre la implementación, revisa los comentarios en el código o consulta la documentación de:
- [Facebook Pixel](https://developers.facebook.com/docs/facebook-pixel)
- [Hotmart](https://developers.hotmart.com/)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 📄 Licencia

Este proyecto fue creado específicamente para tu negocio. Puedes modificarlo y usarlo como desees.

---

**¡Éxito con tus ventas! 🚀💰**
