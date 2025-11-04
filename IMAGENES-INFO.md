# 📸 Información de Imágenes Integradas

## Imágenes Utilizadas en la Landing Page

### ✅ Imágenes Integradas

#### 1. **Imagen Principal del Hero** 
- **Archivo**: `Imagenes/principal 2.jpeg`
- **Ubicación**: Sección Hero (parte superior)
- **Descripción**: Imagen con silueta de mujer fitness en tonos azul/verde con el título "27 Consejos Exclusivos Para Bajar de Peso Rápidamente"
- **Dimensiones recomendadas**: 450px de ancho máximo
- **Efecto**: Animación flotante + hover scale

#### 2. **Imagen Order Bump**
- **Archivo**: `Imagenes/Order bumps.png`
- **Ubicación**: Sección Order Bump (oferta especial)
- **Descripción**: Plato con variedad de alimentos saludables (vegetales, proteínas, carbohidratos)
- **Uso**: Representa el Recetario Saludable Express
- **Efecto**: Hover scale

#### 3. **Imagen Bono #1**
- **Archivo**: `Imagenes/Bono 1.png`
- **Ubicación**: Sección de Bonos Gratis
- **Descripción**: Meal prep containers con comidas saludables preparadas
- **Representa**: Guía de Combinaciones de Alimentos
- **Badge**: "BONO #1" en naranja (esquina superior derecha)
- **Dimensiones**: 250px altura, object-fit: cover

#### 4. **Imagen Bono #2**
- **Archivo**: `Imagenes/Bono 2.png`
- **Ubicación**: Sección de Bonos Gratis
- **Descripción**: Hombre corriendo al atardecer (motivación fitness)
- **Representa**: Guía de Motivación y Mentalidad Fitness
- **Badge**: "BONO #2" en naranja (esquina superior derecha)
- **Dimensiones**: 250px altura, object-fit: cover

### 📁 Imágenes Disponibles No Utilizadas

#### 5. **Principal.jpeg**
- **Archivo**: `Imagenes/Principal.jpeg`
- **Descripción**: Collage con aguacate, frutas, cinta métrica y título del ebook
- **Estado**: Disponible como alternativa
- **Uso sugerido**: Puede reemplazar `principal 2.jpeg` si prefieres un diseño más colorido

#### 6. **Captura de pantalla 2025-11-04 104543.png**
- **Archivo**: `Imagenes/Captura de pantalla 2025-11-04 104543.png`
- **Estado**: No integrada
- **Nota**: Parece ser una captura de pantalla de referencia

## 🎨 Estilos Aplicados

### Imagen Principal (Hero)
```css
.ebook-image {
    width: 100%;
    max-width: 450px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.ebook-image:hover {
    transform: scale(1.05);
}
```

### Imagen Order Bump
```css
.order-bump-image {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
}

.order-bump-image:hover {
    transform: scale(1.05);
}
```

### Imágenes de Bonos
```css
.bonus-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.bonus-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--primary-orange);
    color: var(--white);
    padding: 8px 20px;
    border-radius: 25px;
    font-weight: 700;
    font-size: 14px;
}
```

## 🔄 Cómo Cambiar las Imágenes

### Para cambiar la imagen principal:
1. Abre `index.html`
2. Busca la línea 78:
```html
<img src="Imagenes/principal 2.jpeg" alt="..." class="ebook-image">
```
3. Cambia `principal 2.jpeg` por `Principal.jpeg` si prefieres la otra versión

### Para agregar más imágenes:
1. Coloca las nuevas imágenes en la carpeta `Imagenes/`
2. Actualiza la ruta en el HTML
3. Los estilos CSS se aplicarán automáticamente

## 📱 Optimización Responsiva

Las imágenes están optimizadas para diferentes dispositivos:

- **Desktop (>1024px)**: Tamaño completo con efectos
- **Tablet (768-1024px)**: Tamaño adaptado
- **Mobile (<768px)**: 
  - Imagen principal: max-width 300px
  - Order bump: ancho completo
  - Bonos: ancho completo, altura 250px

## ⚡ Rendimiento

### Recomendaciones de Optimización:
1. **Comprimir imágenes**: Usa herramientas como TinyPNG o ImageOptim
2. **Formatos modernos**: Considera convertir a WebP para mejor compresión
3. **Lazy loading**: Las imágenes se cargan cuando son visibles

### Tamaños Actuales:
- Principal.jpeg: 171 KB
- principal 2.jpeg: 160 KB
- Order bumps.png: 627 KB ⚠️ (considerar optimizar)
- Bono 1.png: 429 KB ⚠️ (considerar optimizar)
- Bono 2.png: 156 KB

**Nota**: Las imágenes PNG pueden comprimirse significativamente sin perder calidad visible.

## 🎯 Mejores Prácticas Implementadas

✅ **Alt text descriptivo**: Todas las imágenes tienen texto alternativo para SEO y accesibilidad
✅ **Rutas relativas**: Fácil de mover el proyecto completo
✅ **Responsive**: Se adaptan a todos los tamaños de pantalla
✅ **Efectos hover**: Mejora la interactividad
✅ **Sombras y bordes**: Dan profundidad y profesionalismo
✅ **Object-fit**: Las imágenes mantienen proporciones correctas

## 🔧 Solución de Problemas

### Si las imágenes no se ven:
1. Verifica que la carpeta se llame exactamente `Imagenes` (con mayúscula)
2. Verifica que los nombres de archivo coincidan exactamente
3. Abre la consola del navegador (F12) para ver errores
4. Verifica que estés abriendo `index.html` desde la ubicación correcta

### Si las imágenes se ven pixeladas:
1. Usa imágenes de mayor resolución
2. Verifica que el `object-fit: cover` esté aplicado
3. Considera usar imágenes 2x para pantallas Retina

---

**Última actualización**: Noviembre 4, 2025
**Integración completada**: ✅ Todas las imágenes principales integradas exitosamente
