import {
  Card,
  BlockStack,
  Text,
  InlineStack
} from "@shopify/polaris";
import {
  Activity,
  CreditCard,
  Users,
  Star
} from "lucide-react";

export default function Index() {
  return (
    <BlockStack gap="400">
      <Card>
        <Text as="p" variant="bodyMd">
          Tüm teknik engelleri aştık ve artık Shopify içinden uygulaman başarıyla çalışıyor. Şimdi geliştirme zamanı!
        </Text>
      </Card>

      <BlockStack gap="400">
        <Card>
          <BlockStack>
            <InlineStack gap="200" align="center">
              <Activity size={20} />
              <Text as="h3" variant="headingMd">Tıklama</Text>
            </InlineStack>
            <Text as="p" variant="bodyMd">2.456</Text>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack>
            <InlineStack gap="200" align="center">
              <CreditCard size={20} />
              <Text as="h3" variant="headingMd">Harcama</Text>
            </InlineStack>
            <Text as="p" variant="bodyMd">₺4.230</Text>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack>
            <InlineStack gap="200" align="center">
              <Users size={20} />
              <Text as="h3" variant="headingMd">Kullanıcı</Text>
            </InlineStack>
            <Text as="p" variant="bodyMd">1.204</Text>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack>
            <InlineStack gap="200" align="center">
              <Star size={20} />
              <Text as="h3" variant="headingMd">Dönüşüm</Text>
            </InlineStack>
            <Text as="p" variant="bodyMd">314</Text>
          </BlockStack>
        </Card>
      </BlockStack>
    </BlockStack>
  );
}
