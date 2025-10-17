const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve SPA frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'spa.html'));
});

// Tools for SPA project
app.get('/api/tools', (req, res) => {
  res.json({
    tools: [
      { name: "VS Code", url: "https://code.visualstudio.com/download" },
      { name: "Node.js", url: "https://nodejs.org/en/download/" },
      { name: "Express.js", url: "https://expressjs.com/" },
      { name: "React", url: "https://react.dev/" },
      { name: "Angular", url: "https://angular.io/" }
    ],
  });
});

// Section routes with detailed content
app.get('/api/what-is-spa', (req, res) => {
  res.json({
    title: "What is a Single Page Application?",
    html: `
      <h4>Definition</h4>
      <ul>
        <li>Loads a single HTML page with dynamic content changes.</li>
        <li>Enables smoother user experience without page reloads.</li>
      </ul>
      <h4>Benefits</h4>
      <ul><li>Faster navigation</li><li>Reduced bandwidth usage</li></ul>
      <h4>Frameworks</h4>
      <ul><li>React, Angular, Vue for client-side</li><li>Express.js for backend APIs</li></ul>
      <h4>Communication</h4>
      <ul><li>Uses AJAX and Fetch API</li><li>RESTful API endpoints</li></ul>
      <h4>Application Use</h4>
      <ul><li>Dashboards</li><li>E-commerce</li><li>Chat apps</li></ul>
    `,
  });
});

app.get('/api/architecture-flow', (req, res) => {
  res.json({
    title: "SPA Architecture & Flow",
    html: `
      <h4>Client-side Routing</h4>
      <ul><li>Using History API and smart URL management.</li></ul>
      <h4>API-driven UI</h4>
      <ul><li>Backend delivers data on demand.</li></ul>
      <h4>State Management</h4>
      <ul><li>Redux, Context API, or services manage UI state.</li></ul>
      <h4>Optimizations</h4>
      <ul><li>Lazy loading, code splitting, caching.</li></ul>
      <h4>User Flow</h4>
      <ul><li>Page loads once, with asynchronous data refresh.</li></ul>
    `,
  });
});

app.get('/api/features-benefits', (req, res) => {
  res.json({
    title: "Features & Benefits",
    html: `
      <h4>Navigation</h4>
      <ul><li>Instant page transitions without reloads.</li></ul>
      <h4>Reactivity</h4>
      <ul><li>Live updates, event-driven UI.</li></ul>
      <h4>Responsive Design</h4>
      <ul><li>Mobile friendly, adaptive UX.</li></ul>
      <h4>Offline & Cache</h4>
      <ul><li>Service workers and PWA support.</li></ul>
      <h4>Extensibility</h4>
      <ul><li>Modular, reusable components.</li></ul>
    `
  });
});

app.get('/api/best-practices', (req, res) => {
  res.json({
    title: "SPA Best Practices",
    html: `
      <h4>API Design</h4>
      <ul><li>RESTful services with versioning.</li></ul>
      <h4>Security</h4>
      <ul><li>JWT, CSRF protection, input sanitization.</li></ul>
      <h4>Accessibility</h4>
      <ul><li>Keyboard nav and screen reader support.</li></ul>
      <h4>Performance</h4>
      <ul><li>Bundle optimization and lazy loads.</li></ul>
      <h4>Testing & Deployment</h4>
      <ul><li>Automated tests and CI/CD pipelines.</li></ul>
    `
  });
});

app.get('/api/usecases', (req, res) => {
  res.json({
    title: "SPA Use Cases",
    html: `
      <h4>Business Dashboards</h4>
      <ul><li>KPI visualization and reports.</li></ul>
      <h4>E-Commerce</h4>
      <ul><li>Dynamic product filtering and carts.</li></ul>
      <h4>Collaborative Apps</h4>
      <ul><li>Chatting, project tracking.</li></ul>
      <h4>Portfolio</h4>
      <ul><li>Showcasing projects and work.</li></ul>
      <h4>Web Tools</h4>
      <ul><li>Editors, calculators, surveys.</li></ul>
    `
  });
});

app.get('/api/code', (req, res) => {
  // Insert your server.js and spa.html code as escaped HTML
  const serverJsCode = `
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
// ...the rest of your server.js as above...
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  `.trim();

  // Escaped (HTML-safe) spa.html here. For brevity, showing the start:
  const spaHtmlCode = `
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;
  &lt;title&gt;Single Page Application Dashboard&lt;/title&gt;
  &lt;link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&amp;display=swap" rel="stylesheet" /&gt;
  &lt;style&gt;
/* ...rest of your spa.html code (as provided above, fully escaped)... */
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  /* ... SPA HTML content ... */
&lt;/body&gt;
&lt;/html&gt;
  `.trim();

  res.json({
    title: "Project Sample Code",
    html: `
      <h4>server.js</h4>
      <pre style="background:#222;padding:12px;border-radius:8px;color:#b6c7e6;font-size:0.9em;overflow-x:auto;">
${serverJsCode}
      </pre>
      <h4>spa.html</h4>
      <pre style="background:#222;padding:12px;border-radius:8px;color:#b6c7e6;font-size:0.85em;overflow-x:auto;">
${spaHtmlCode}
      </pre>
    `
  });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
