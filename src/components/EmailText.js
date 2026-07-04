import { render } from "@react-email/render";
import Email from "./Email";

async function generateEmail() {
  const html = await render(<Email name={"sigam"} />, {
    pretty: true,
  });

  console.log(html);
  return html;
}

generateEmail();
