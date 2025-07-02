import { Page, Card, Layout, Text } from "@shopify/polaris";

export default function Index() {
  return (
    <Page>
      <ui-title-bar title="Digimoli AdPilot Kontrol Paneli" />
      <Layout>
        <Layout.Section>
          <Card>
            <Text as="h2" variant="headingMd">
              🏆 Başardık, Fatih!
            </Text>
            <Text variant="bodyMd" as="p">
              Tüm teknik engelleri aştık ve arayüzümüz artık Shopify içinde başarıyla yükleniyor. Geliştirme şimdi başlıyor!
            </Text>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}