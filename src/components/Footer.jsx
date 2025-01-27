import React from "react";
import { FaGithub } from "react-icons/fa";
import { useIntl } from "react-intl";

function Footer() {
  const intl = useIntl();
  
  return (
    <div className="fixed bottom-0 w-full bg-slate-200 p-2 text-center">
      <footer>
        <p className="text-gray-700">
        {intl.formatMessage({ id: "footer.text" })}{" "}
          <a
            href="https://github.com/juliocedraz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Julio Cedraz</strong>
            <FaGithub
              size={20}
              color="black"
              className="inline-block ml-1 mb-1.5"
            />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
