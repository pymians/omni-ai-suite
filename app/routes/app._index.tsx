import { Card, Text, BlockStack, Box } from "@shopify/polaris";
import { FaUsers, FaChartLine, FaCreditCard, FaStar } from "react-icons/fa";

export default function Index() {
  return (
    <BlockStack gap="400">
      <Card>
        <Text as="h2" variant="headingLg">
          🏆 Başardık, Fatih!
        </Text>
        <Text as="p" variant="bodyMd">
          Tüm teknik engelleri aştık ve artık Shopify içinden uygulaman başarıyla çalışıyor.
          Şimdi geliştirme zamanı!
        </Text>
      </Card>

      <Box padding="400">
        <BlockStack gap="400">
          <Card>
            <FaChartLine />
            <Text as="h3" variant="headingMd">Tıklama</Text>
            <Text as="p" variant="bodyMd">2.456</Text>
          </Card>
          <Card>
            <FaCreditCard />
            <Text as="h3" variant="headingMd">Harcama</Text>
            <Text as="p" variant="bodyMd">₺4.230</Text>
          </Card>
          <Card>
            <FaUsers />
            <Text as="h3" variant="headingMd">Kullanıcı</Text>
            <Text as="p" variant="bodyMd">1.204</Text>
          </Card>
          <Card>
            <FaStar />
            <Text as="h3" variant="headingMd">Dönüşüm</Text>
            <Text as="p" variant="bodyMd">314</Text>
          </Card>
        </BlockStack>
      </Box>
    </BlockStack>
  );
}