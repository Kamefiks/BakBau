import Footer from "./Footer";
import HeadlineWelcome from "./HeadlineWelcome";
import ListElement from "./ListElement";
import PolicyElement from "./PolicyElement";
import SectionStarter from "./SectionStarter";

function PageDatenshutz() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <div className="w-full page-color flex ">
      <div className=" w-full   ml-0 md:ml-0 lg:ml-0 md:mt-10 mt-5 ">
        <HeadlineWelcome
          message="Hier können Sie sich über die Regeln der Datenspeicherung auf unserer Website informieren."
          headline="Datenverarbeitung auf unserer Website."
        />

        <SectionStarter
          sectionName="Datenschutz"
          className={"mt-[10%] mb-[3%]"}
        />
        <div className="flex flex-col gap-20 mt-[5%]">
          <div className="flex w-full">
            <div className="bg-[#212121]  w-[20%] flex items-center pl-[3%] h-[60px] rounded-e-[15px]">
              <p className="text-[#888888] text-[20px] font-inter">
                Status at: {formattedDate}
              </p>
            </div>
          </div>
          <div className="flex w-full gap-7 flex-col  pl-[7%] ">
            <PolicyElement
              headline={" Verantwortlicher für die personenbezogenen Daten"}
              message={
                "Verwalter der personenbezogenen Daten auf dieser Website ist die Firma Bak Bau mit Sitz in der Schwalbenstraße 44, 25462 Rellingen, E-Mail-Adresse: info@bak-bau.eu, Telefonnummer: 0162-8364008."
              }
              index={1}
            />
            <PolicyElement
              headline={" Zwecke der Datenverarbeitung"}
              message={
                <ListElement
                  main={
                    "Personenbezogene Daten der Nutzer werden zu folgenden Zwecken verarbeitet:"
                  }
                  elements={[
                    "Erbringung von Dienstleistungen, die über die Website bereitgestellt werden.",
                    "Kommunikation mit den Nutzern (z. B. Beantwortung von Anfragen).",
                    "Analyse der Website-Statistiken (z. B. durch Google Analytics).",
                    "Erfüllung rechtlicher Verpflichtungen, einschließlich des Datenschutzes.",
                  ]}
                />
              }
              index={2}
              //1h 10
            />
            <PolicyElement
              headline={" Rechtsgrundlage der Datenverarbeitung"}
              message={
                <ListElement
                  main={
                    "Personenbezogene Daten werden auf Grundlage folgender Rechtsgrundlagen verarbeitet:"
                  }
                  elements={[
                    "Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO)",
                    "Vertrag (Art. 6 Abs. 1 lit. b DSGVO)",
                    "Analyse der Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)-Statistiken (z. B. durch Google Analytics).",
                  ]}
                />
              }
              index={3}
            />
            <PolicyElement
              headline={" Zwecke der Datenverarbeitung"}
              message={
                <ListElement
                  main={
                    "Wir verarbeiten folgende personenbezogene Daten: Daten werden auf Grundlage folgender Rechtsgrundlagen verarbeitet:"
                  }
                  elements={[
                    "Name und Vorname",
                    "E-Mail-Adresse",
                    "Telefonnummer",
                    "IP-Adresse",
                  ]}
                />
              }
              index={4}
            />
            <PolicyElement
              headline={" Vorratsspeicherung von Daten"}
              message={
                "Personenbezogene Daten werden so lange aufbewahrt, wie es für die Erfüllung des Zwecks erforderlich ist, zu dem sie erhoben wurden. Nach Ablauf dieser Frist können sie, wenn dies gesetzlich erforderlich ist, für den in den jeweiligen Vorschriften festgelegten Zeitraum aufbewahrt werden."
              }
              index={5}
            />
            <PolicyElement
              headline={" Empfänger der personenbezogenen Daten"}
              message={
                <ListElement
                  main={
                    "Ihre personenbezogenen Daten können an folgende Empfänger weitergegeben werden:"
                  }
                  elements={[
                    "Dienstleister, die technische oder Hosting-Dienste erbringen und als Auftragsverarbeiter in unserem Auftrag tätig sind.",
                    "Dritte, wenn dies durch gesetzliche Vorschriften erforderlich ist (z. B. Strafverfolgungsbehörden).",
                  ]}
                />
              }
              index={6}
            />
            <PolicyElement
              headline={" Cookies"}
              message={
                <div>
                  <p>
                    Auf unserer Website verwenden wir Cookies, um die
                    Benutzererfahrung zu verbessern. Cookies sind kleine
                    Textdateien, die auf dem Gerät des Nutzers gespeichert
                    werden und es uns ermöglichen, das Gerät zu erkennen und die
                    Seite an die Präferenzen des Nutzers anzupassen.
                  </p>
                  <br></br>
                  <p>
                    Nutzer haben die Möglichkeit, die Cookie-Einstellungen in
                    ihrem Webbrowser zu verwalten. Bei Deaktivierung von Cookies
                    können einige Funktionen der Website möglicherweise nicht
                    genutzt werden.
                  </p>
                </div>
              }
              index={7}
            />
            <PolicyElement
              headline={" Sicherheit der personenbezogenen Daten"}
              message={
                "Wir setzen geeignete technische und organisatorische Maßnahmen ein, um die Sicherheit personenbezogener Daten zu gewährleisten. Alle Daten werden in sicheren Datenbanken gespeichert, und die Kommunikation erfolgt über das HTTPS-Protokoll."
              }
              index={8}
            />
            <PolicyElement
              headline={" Änderungen der Datenschutzerklärung"}
              message={
                "Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Alle Änderungen werden auf dieser Seite veröffentlicht, und das Datum der letzten Aktualisierung wird am Ende des Dokuments angegeben."
              }
              index={9}
            />
            {"  "}
            <div className="flex h-[100px]"></div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default PageDatenshutz;
