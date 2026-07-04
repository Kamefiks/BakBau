import {
  Body,
  Head,
  Html,
  Section,
  Text,
  Row,
  Hr,
  Column,
} from "@react-email/components";

function Email({ vorname, nachname, message, email }) {
  return (
    <Html>
      <Head />
      <Body>
        <Section
          style={{ padding: "0px", width: "100%", background: "#F2F2F2" }}
        >
          <Row>
            <Column>
              <Text
                style={{
                  fontSize: "16px",
                  paddingLeft: "20px",
                  color: "green",
                }}
              >
                Witaj Marcin,
              </Text>
            </Column>
            <Column
              height="30px"
              style={{ paddingRight: "0px" }}
              width="100px"
              background="#DFDFDF"
            >
              <Text color="#989898">{new Date().toLocaleDateString()}</Text>
            </Column>
          </Row>

          <Text
            style={{
              fontSize: "20px",
              paddingLeft: "20px",
              fontWeight: "700",
              color: "#272727",
            }}
          >
            Otrzymałeś nową wiadomość
          </Text>
          <Hr />
          <Text
            style={{ fontSize: "16px", paddingLeft: "20px", color: "gray" }}
          >
            Od: {vorname} {nachname}
          </Text>
          <Row
            style={{
              width: "90%",
              display: "flex",
              alignItems: "center",
              background: "#FFFFFF",
              height: "190px",
              paddingLeft: "10px",
              paddingRight: "5px",

              borderRadius: "11px",
            }}
          >
            <Text style={{ color: "#595959", fontSize: "14px" }}>
              {message}
            </Text>
          </Row>
          <Row>
            <Column>
              <Text style={{ paddingLeft: "20px" }}>{email}</Text>
            </Column>
            <Column width="130px" style={{ paddingRight: "1px" }}>
              <Text>
                Wysłano:{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </Column>
          </Row>
        </Section>
      </Body>
    </Html>
  );
}

export default Email;
