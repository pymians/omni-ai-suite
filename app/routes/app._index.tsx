import {
  Page,
  Layout,
  Card,
  Text,
  InlineStack,
  BlockStack,
  TextContainer,
} from "@shopify/polaris";
import {
  AiOutlineRise,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineDollar,
} from "react-icons/ai";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Pzt", click: 120, cost: 240 },
  { name: "Sal", click: 98, cost: 221 },
  { name: "Çar", click: 200, cost: 229 },
  { name: "Per", click: 278, cost: 200 },
  { name: "Cum", click: 189, cost: 218 },
  { name: "Cmt", click: 239, cost: 250 },
  { name: "Paz", click: 349, cost: 210 },
];

export default function Index() {
  return (
    <Page title="Digimoli AdPilot Kontrol Paneli">
      <Layout>

        <Layout.Section>
          <Card>
            <div style={{ padding: "1.5rem" }}>
              <Text variant="headingLg" as="h2">
                🏆 Başardık, Fatih!
              </Text>
              <Text as="p">
                Tüm teknik engelleri aştık ve artık Shopify içinden uygulaman
                başarıyla çalışıyor. Şimdi geliştirme zamanı!
              </Text>
            </div>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <InlineStack gap="400" wrap>
            <Card>
              <div style={{ padding: "1rem" }}>
                <Text variant="headingMd" as="h3">
                  <AiOutlineRise /> Tıklama
                </Text>
                <Text as="p">2.456</Text>
              </div>
            </Card>

            <Card>
              <div style={{ padding: "1rem" }}>
                <Text variant="headingMd" as="h3">
                  <AiOutlineDollar /> Harcama
                </Text>
                <Text as="p">₺4.230</Text>
              </div>
            </Card>

            <Card>
              <div style={{ padding: "1rem" }}>
                <Text variant="headingMd" as="h3">
                  <AiOutlineShoppingCart /> Dönüşüm
                </Text>
                <Text as="p">314</Text>
              </div>
            </Card>

            <Card>
              <div style={{ padding: "1rem" }}>
                <Text variant="headingMd" as="h3">
                  <AiOutlineUser /> Kullanıcı
                </Text>
                <Text as="p">1.204</Text>
              </div>
            </Card>
          </InlineStack>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <div style={{ padding: "1.5rem" }}>
              <Text variant="headingMd" as="h3">
                Haftalık Reklam Performansı
              </Text>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="click"
                    stroke="#0E7EFD"
                    name="Tıklama"
                  />
                  <Line
                    type="monotone"
                    dataKey="cost"
                    stroke="#82ca9d"
                    name="Harcama"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Layout.Section>

      </Layout>
    </Page>
  );
}
