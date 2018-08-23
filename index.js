import swagger from "./swagger.json"

import test from "./json"

console.log("KDASDFADSF ",test)

window.onload = () =>{
    const ui = SwaggerUIBundle({
        validatirUrl:undefined,
        spec: test,
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