# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cliente.spec.js >> Listar os clientes iniciais
- Location: e2e\cliente.spec.js:9:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Clientes' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Clientes' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Clientes' })

```

```yaml
- main:
  - heading "Lanchonete" [level=1]
  - navigation:
    - button "Produtos" [disabled]
    - button "Clientes"
    - button "Pedidos"
  - heading "Produtos" [level=2]
  - textbox "Nome"
  - spinbutton "Preco"
  - button "Cadastrar"
  - table:
    - rowgroup:
      - row "Nome Preco":
        - columnheader "Nome"
        - columnheader "Preco"
        - columnheader
    - rowgroup:
      - row "Coxinha R$ 5,00 Remover":
        - cell "Coxinha"
        - cell "R$ 5,00"
        - cell "Remover":
          - button "Remover"
      - row "Pastel R$ 8,00 Remover":
        - cell "Pastel"
        - cell "R$ 8,00"
        - cell "Remover":
          - button "Remover"
      - row "Empada R$ 6,00 Remover":
        - cell "Empada"
        - cell "R$ 6,00"
        - cell "Remover":
          - button "Remover"
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
> 10 |     await expect(page.getByRole("heading", {name: "Clientes"})).toBeVisible();
     |                                                                 ^ Error: expect(locator).toBeVisible() failed
  11 |     await expect(page.getByRole("row")).toHaveCount(3);
  12 |     await expect(page.getByRole("cell", { name: "Ana Souza"})).toBeVisible()
  13 |     await expect(page.getByRole("cell", { name: "Bruno Lima"})).toBeVisible()
  14 | });
  15 | 
  16 | test("Cadastrar um novo cliente", async ({page}) => {
  17 |     await page.getByLabel("Nome").fill("Carla Dias")
  18 |     await page.getByLabel("email").fill("carla@email.com")
  19 |     await page.getByRole("button", { name: "Cadastrar"}).click();
  20 | })
```