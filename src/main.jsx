import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import { IntlProvider } from "react-intl";
import ptMessages from "./locales/pt-BR.json";
import enMessages from "./locales/en.json";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

const messages = {
  "pt-BR": ptMessages,
  "en": enMessages,
};

function Root() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/task",
      element: <TaskPage />,
    },
  ]);

  return (
    <LanguageProvider>
      <LanguageWrapper router={router} messages={messages} />
    </LanguageProvider>
  );
}

function LanguageWrapper({ router, messages }) {
  const { locale } = useLanguage();

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <RouterProvider router={router} />
    </IntlProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
