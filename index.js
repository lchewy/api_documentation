
window.onload = () =>{
    const ui = SwaggerUIBundle({
        // url: "https://petstore.swagger.io/v2/swagger.json",
        spec: window.spec,
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      })

      window.ui = ui
}