import { defineConfig, devices } from "@playwright/test";

export default defineConfig ({
    testDir: "./e2e",   // Diretório
    workers: 1,         // Um teste por vez
    reporter: "html",   // Como ele vai ser gerado
    use: {
        baseURL: "http://localhost:5173", // Porta padrão do vite do React
    },
    projects: [{name: "chromium", use: {...devices["Desktop Chrome"]}}],
    webServer: [
        {
            command: "npm run api:e2e", // Comando pra executar
            cwd: "..",                  // Pra rodas antes 2x
            url: "http://localhost:3000/produtos",
            reuseExistingServer: true,
        },
        {
            command: "npm run dev",
            url: "http://localhost:5173",
            reuseExistingServer: true,
        },
    ],
});