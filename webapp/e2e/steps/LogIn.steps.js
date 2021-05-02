const {defineFeature, loadFeature}=require("jest-cucumber");
const feature = loadFeature("./features/LogIn.feature");

defineFeature(feature, (test) => {
  
  beforeEach(async () => {
    await global.page.goto("http://localhost:3000");
  });
  
   

  test("A user logs in", ({given,when,then}) => {
    
    let email;
    let username;
    let webId;
    let password;

    given("A logged out user", () => {
    password = "El_admin_necesita_1_pod"
    email = "radarines3a@gmail.com"
    username = "e2etest"
    webId = "https://e2e_test.inrupt.net/profile/card#me"
    });

    when("The user logs in", async () => {
    await expect(page).toClick("button", { text: "Sign in" })
    await expect(page).toFillForm("form[name='Sign in']", {
      WebID: webId,
     })
     await expect(page).toFill('input[name="username"]', username);
     await expect(page).toFill('input[name="Password"]', password);
     await expect(page).toClick("button", { text: "Log In" , timeout: 10000})
     await expect(page).toMatch("Bienvenidos a Radarin En esta aplicacion podras localizar a tus amigos cercanos")
    });

    then("User goes to friendlist", async () => {
      await expect(page).toClick("button", { text: "Sign in" })
      await expect(page).toMatch("Lista de amigos")
    });
  });
});