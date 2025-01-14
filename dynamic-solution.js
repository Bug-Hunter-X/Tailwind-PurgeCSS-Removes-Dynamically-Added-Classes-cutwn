There are several ways to solve this. Here are a few approaches:

**1. Whitelisting Classes:** Add the classes you expect to be added dynamically to the `safelist` option in your Tailwind configuration file (tailwind.config.js):
```javascript
module.exports = {
  // ... other config
  purge: {
    content: ['./src/**/*.js'],
    safelist: ['bg-red-500', 'text-white', 'p-4'], // Add classes here
  },
  // ... rest of the config
}
```

**2. Using `@layer` to avoid PurgeCSS:**  Define your dynamic styles in a separate layer that PurgeCSS won't touch:
```javascript
/** @layer base */
.dynamic-class {
    @apply bg-blue-500;
}
```

**3.  Disabling PurgeCSS (Not Recommended):**  If you're having trouble with PurgeCSS or have a very dynamic application, you can temporarily disable it (this will increase CSS bundle size).  Remove or comment out the `purge` option in your `tailwind.config.js` file. 

**4. Using a different approach for dynamic styles:** Use techniques like CSS variables or CSS-in-JS libraries to apply dynamic styles rather than relying on Tailwind classes that might get purged.

Choose the solution that best fits your project.  Whitelisting is generally preferred for smaller additions. Disabling PurgeCSS is a last resort.