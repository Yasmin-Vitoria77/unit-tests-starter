import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page, request }) => {
    const resposta = await request.post("http://localhost:3000/__reset");
    expect(resposta.status()).toBe(204);
    await page.goto("/");
});

test("Listar os clientes iniciais", async ({page}) => {
    await expect(page.getByRole("heading", {name: "Clientes"})).toBeVisible();
    await expect(page.getByRole("row")).toHaveCount(3);
    await expect(page.getByRole("cell", { name: "Ana Souza"})).toBeVisible()
    await expect(page.getByRole("cell", { name: "Bruno Lima"})).toBeVisible()
});

test("Cadastrar um novo cliente", async ({page}) => {
    await page.getByLabel("Nome").fill("Carla Dias")
    await page.getByLabel("email").fill("carla@email.com")
    await page.getByRole("button", { name: "Cadastrar"}).click();
})