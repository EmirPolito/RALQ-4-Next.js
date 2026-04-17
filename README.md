# RALQ - Realidad Aumentada para Laboratorios de Química

Una plataforma educativa de vanguardia construida con **Next.js**, diseñada para transformar la enseñanza de la química mediante experiencias visuales inmersivas, componentes interactivos y un diseño de alto impacto.

<div align="center">
  <img src="https://github.com/user-attachments/assets/3a812062-6e7c-4ab6-98b8-fd33d02eb491" alt="RALQ Hero Section" width="800" />
  <br />
  <p><i>https://ralq-4-next-js.vercel.app/</i></p>
</div>

---

## 🌟 Características Destacadas

### 🎨 Diseño Premium & UX

- **Deep Dark Mode**: Interfaz "True Black" optimizada para pantallas OLED, eliminando grises innecesarios para un contraste perfecto.
- **Accesibilidad**: Soporte nativo para modo **Daltónico** y reducción de movimiento.
- **Buena fluidez**: Animaciones basadas en física (Spring animations) mediante **Framer Motion** para una navegación orgánica.

### 🧪 Componentes Interactivos

- **Componenetes animados**: Elementos visuales con transiciones fluidas y optimización de carga. por empplo Accordion,Carousel,3D Pin Cards, Tabs, Image Zoom etc.

### 🔐 Seguridad y Rendimiento

- **Autenticación con Clerk**: Flujos de Login y Registro personalizados, adaptables al tema y con validación robusta.
- **Optimización de Imágenes**: Implementación de `next/image` con estrategias de carga diferida para manejar recursos de alta resolución.
- **Arquitectura Escalable**: Estructura basada en App Router y Server Components para máxima velocidad.

---

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Autenticación**: [Clerk Auth](https://clerk.com/)
- **Animaciones**: [Framer Motion / Motion React](https://www.framer.com/motion/)
- **Componentes UI**: [Shadcn/UI](https://ui.shadcn.com/) + Radix UI
- **Analíticas**: [Vercel Analytics](https://vercel.com/analytics)

---

## ⚙️ Configuración del Proyecto

### 1. Requisitos Previos

- Node.js 18+
- pnpm / npm / yarn

### 2. Instalación

```bash
git clone https://github.com/EmirPolito/RALQ-4-Next.js.git
cd RALQ-4-Next.js
pnpm install
```

### 3. Variables de Entorno

Crea un archivo `.env.local` en la raíz con las siguientes claves:

| Variable                            | Descripción                                  |
| :---------------------------------- | :------------------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clave pública de tu proyecto en Clerk        |
| `CLERK_SECRET_KEY`                  | Clave secreta de Clerk (solo servidor)       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`     | `/login`                                     |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`     | `/registro`                                  |
| `EMAIL_USER` / `EMAIL_PASS`         | Configuración para el formulario de contacto |

---

## ☁️ Despliegue

El proyecto esta desplegado en **Vercel**. Si deseas modificarlo o desplegarlo en otro servidor debes configurar las variables de entorno mencionadas arriba en el panel de control de Vercel antes de realizar el despliegue para evitar errores de renderizado en los componentes de autenticación.

---

## 👨‍💻 Autor

**Emir Polito** - _Desarrollador y Visionario detrás de RALQ_

- GitHub: [@EmirPolito](https://github.com/EmirPolito)
- LinkedIn: [Emir Polito](https://www.linkedin.com/in/emir-polito-g/)
