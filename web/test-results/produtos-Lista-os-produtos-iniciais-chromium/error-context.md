# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: produtos.spec.js >> Lista os produtos iniciais
- Location: e2e\produtos.spec.js:10:1

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  |                         // local e rota
  4  | test.beforeEach(async ({ page, request }) => {
> 5  |     const resposta = await request.post("http://localhost:3000:__reset"); // Vai iniciar e excluir anterior
     |                                    ^ TypeError: apiRequestContext.post: Invalid URL
  6  |     expect(resposta.status()).toBe(204); // Verificar a resposta
  7  |     await page.goto("/");                //"Go to"
  8  | }); 
  9  | 
  10 | test("Lista os produtos iniciais", async ({page}) => {
  11 |     await expect(page.getByRole("heading", {name: "Produtos"})).toBeVisible(); //elemento do h1 ao h6
  12 |     await expect(page.getByRole("row")).toHaveCount(4);
  13 |     await expect(page.getByRole("cell", { name: "Coxinha "})).toBeVisible()
  14 | })
```