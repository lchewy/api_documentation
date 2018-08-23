import swagger from "./json";

window.onload = () => {
  const ui = SwaggerUIBundle({
    validatirUrl: undefined,
    spec: swagger,
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout"
  });

  window.ui = ui;
};
