import {
  Card,
  BlockStack,
  Text,
  InlineStack,
  Page,
  Grid,
  Select,
  Button
} from "@shopify/polaris";
import {
  Activity,
  CreditCard,
  Users,
  Star,
  BarChart3,
  Settings2,
  Languages,
  SearchCode,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [selectedLang, setSelectedLang] = useState("tr");

  const langs = [
    { label: "Türkçe", value: "tr" },
    { label: "English", value: "en" },
    { label: "Deutsch", value: "de" },
    { label: "Español", value: "es" },
    { label: "Français", value: "fr" },
    { label: "Português", value: "pt" },
    { label: "Italiano", value: "it" },
    { label: "日本語", value: "ja" }
  ];

  return (
    <Page
      title="Omni AI Suite Dashboard"
      primaryAction={{
        content: "Yeni Kampanya Oluştur",
        onAction: () => console.log("Yeni kampanya tıklandı"),
      }}
    >
      <BlockStack gap="400">
        <Card>
          <InlineStack align="space-between">
            <Text variant="headingMd" as="h3">
              🎯 Omni AI Suite'e Hoş Geldin!
            </Text>
            <Select
              labelHidden
              label="Dil Seçimi"
              options={langs}
              value={selectedLang}
              onChange={(v) => setSelectedLang(v)}
            />
          </InlineStack>
          <Text as="p" variant="bodyMd">
            Yapay zekâ destekli kampanya yönetimi, performans analizleri ve çok dilli otomasyon ile Omni AI Suite mağazanıza güç katıyor.
          </Text>
        </Card>

        <Grid columns={{ xs: 1, sm: 2, md: 4 }}>
          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Activity size={18} />
                <Text as="h3" variant="headingMd">Tıklama</Text>
              </InlineStack>
              <Text as="p" variant="bodyMd">2.456</Text>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <CreditCard size={18} />
                <Text as="h3" variant="headingMd">Harcama</Text>
              </InlineStack>
              <Text as="p" variant="bodyMd">₺4.230</Text>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Users size={18} />
                <Text as="h3" variant="headingMd">Kullanıcı</Text>
              </InlineStack>
              <Text as="p" variant="bodyMd">1.204</Text>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Star size={18} />
                <Text as="h3" variant="headingMd">Dönüşüm</Text>
              </InlineStack>
              <Text as="p" variant="bodyMd">314</Text>
            </BlockStack>
          </Card>
        </Grid>

        <Grid columns={{ xs: 1, sm: 2, md: 3 }}>
          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <BarChart3 size={18} />
                <Text variant="headingMd" as="h3">Kampanya Analizi</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                En çok kazandıran kampanyaları inceleyin ve optimizasyon önerileri alın.
              </Text>
              <Button onClick={() => console.log("Analize git")}>Analiz</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Settings2 size={18} />
                <Text variant="headingMd" as="h3">Otomasyon Ayarları</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                Zamanlama, yeniden hedefleme ve bütçe yönetimi gibi özellikleri yapılandır.
              </Text>
              <Button onClick={() => console.log("Ayarlar")}>Yapılandır</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Languages size={18} />
                <Text variant="headingMd" as="h3">Çok Dilli İçerik</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                AI destekli metin çevirileri ve global hedefleme.
              </Text>
              <Button onClick={() => console.log("İçeriğe Git")}>İçeriği Gör</Button>
            </BlockStack>
          </Card>
        </Grid>

        <Card>
          <BlockStack>
            <InlineStack gap="200" align="center">
              <ShieldCheck size={18} />
              <Text variant="headingMd" as="h3">Gizlilik & Uyum</Text>
            </InlineStack>
            <Text as="p" variant="bodySm">
              Tüm kampanyalar GDPR, KVKK ve Shopify politikalarına uygun şekilde yönetilir.
            </Text>
          </BlockStack>
        </Card>
      </BlockStack>
    </Page>
  );
}
