import auth0 from "auth0-js";

const webAuth = new auth0.webAuth({
    domain: "dev-mjzr0qh4.eu.auth0.com",
    clientId: "grV5fx4faObz5TYflMUYonIuUEH0clLm",
    redirectUri: "",
    responseType: "token id_token",
    scope: "openid profile",
});

const login = () => {
    webAuth.authorize();
};