# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cliente.spec.js >> Cadastrar um novo cliente
- Location: e2e\cliente.spec.js:16:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('email')

```

# Page snapshot

```yaml
- main [ref=e3]:
  - heading "Lanchonete" [level=1] [ref=e4]
  - navigation [ref=e5]:
    - button "Produtos" [disabled] [ref=e6]
    - button "Clientes" [ref=e7]
    - button "Pedidos" [ref=e8]
  - generic [ref=e9]:
    - heading "Produtos" [level=2] [ref=e10]
    - generic [ref=e11]:
      - textbox "Nome" [active] [ref=e12]: Carla Dias
      - spinbutton "Preco" [ref=e13]
      - button "Cadastrar" [ref=e14]
    - table [ref=e15]:
      - rowgroup [ref=e16]:
        - row [ref=e17]:
          - columnheader "Nome" [ref=e18]
          - columnheader "Preco" [ref=e19]
          - columnheader [ref=e20]
      - rowgroup [ref=e21]:
        - row [ref=e22]:
          - cell "Coxinha" [ref=e23]
          - cell "R$ 5,00" [ref=e24]
          - cell [ref=e25]:
            - button "Remover" [ref=e26]
        - row [ref=e27]:
          - cell "Pastel" [ref=e28]
          - cell "R$ 8,00" [ref=e29]
          - cell [ref=e30]:
            - button "Remover" [ref=e31]
        - row [ref=e32]:
          - cell "Empada" [ref=e33]
          - cell "R$ 6,00" [ref=e34]
          - cell [ref=e35]:
            - button "Remover" [ref=e36]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.beforeEach(async ({ page, request }) => {
  4  |     const resposta = await request.post("http://localhost:3000/__reset");
  5  |     expect(resposta.status()).toBe(204);
  6  |     await page.goto("/");
  7  | });
  8  | 
  9  | test("Listar os clientes iniciais", async ({page}) => {
  10 |     await expect(page.getByRole("heading", {name: "Clientes"})).toBeVisible();
  11 |     await expect(page.getByRole("row")).toHaveCount(3);
  12 |     await expect(page.getByRole("cell", { name: "Ana Souza"})).toBeVisible()
  13 |     await expect(page.getByRole("cell", { name: "Bruno Lima"})).toBeVisible()
  14 | });
  15 | 
  16 | test("Cadastrar um novo cliente", async ({page}) => {
  17 |     await page.getByLabel("Nome").fill("Carla Dias")
> 18 |     await page.getByLabel("email").fill("carla@email.com")
     |                                    ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  19 |     await page.getByRole("button", { name: "Cadastrar"}).click();
  20 | })
```