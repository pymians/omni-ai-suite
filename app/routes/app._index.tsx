import {
  Page,
  Card,
  Layout,
  Text,
  BlockStack,
  InlineGrid,
  Icon,
  Button,
  Box,
} from "@shopify/polaris";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { IoAnalytics, IoSparklesOutline, IoPeopleOutline, IoCashOutline, IoFlashOutline, IoImageOutline, IoMegaphoneOutline } from "react-icons/io5";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// --- SAHTE VERİLER ---
// Genel Bakış Kartları için
const statsData = {
  toplamSatis: { value: "₺0", change: "+12.5% bu ay" },
  donusumOrani: { value: "0%", change: "+0.0% geçen hafta" },
  aiOptimizasyon: { value: "0%", change: "47 ürün optimize edildi" },
  aktifZiyaretci: { value: "0", change: "Şu anda canlı" },
};
// Satış Analizi Grafiği için
const chartData = [
    { name: 'Pzt', satis: 120 }, { name: 'Sal', satis: 200 }, { name: 'Çar', satis: 150 },
    { name: 'Per', satis: 400 }, { name: 'Cum', satis: 300 }, { name: 'Cmt', satis: 500 },
    { name: 'Paz', satis: 450 },
];
// Kanal Analizi Kartları için
const channelData = {
    facebook: { spend: '2,000 TL', roas: '9.0x' },
    instagram: { spend: '1,500 TL', roas: '9.3x' },
    google: { spend: '1,500 TL', roas: '6.6x' },
    all: { spend: '5,000 TL', roas: '8.4x' }
};
// --------------------

export default function Index() {
  return (
    <Page fullWidth>
      <ui-title-bar title="Dashboard" />
      <Layout>
        {/* İstatistik Kartları */}
        <Layout.Section>
          <InlineGrid columns={{ xs: 1, sm: 2, md: 4 }} gap="400">
            <Card roundedAbove="sm"><BlockStack gap="200"><InlineGrid gap="200" columns="auto 1fr" alignItems="center"><IoCashOutline size={20} /><Text as="h2" variant="headingMd">Toplam Satış</Text></InlineGrid><Text as="p" variant="headingXl">{statsData.toplamSatis.value}</Text><Text as="p" variant="bodyMd" tone="subdued">{statsData.toplamSatis.change}</Text></BlockStack></Card>
            <Card roundedAbove="sm"><BlockStack gap="200"><InlineGrid gap="200" columns="auto 1fr" alignItems="center"><IoAnalytics size={20} /><Text as="h2" variant="headingMd">Dönüşüm Oranı</Text></InlineGrid><Text as="p" variant="headingXl">{statsData.donusumOrani.value}</Text><Text as="p" variant="bodyMd" tone="subdued">{statsData.donusumOrani.change}</Text></BlockStack></Card>
            <Card roundedAbove="sm"><BlockStack gap="200"><InlineGrid gap="200" columns="auto 1fr" alignItems="center"><IoSparklesOutline size={20} /><Text as="h2" variant="headingMd">AI Optimizasyon</Text></InlineGrid><Text as="p" variant="headingXl">{statsData.aiOptimizasyon.value}</Text><Text as="p" variant="bodyMd" tone="subdued">{statsData.aiOptimizasyon.change}</Text></BlockStack></Card>
            <Card roundedAbove="sm"><BlockStack gap="200"><InlineGrid gap="200" columns="auto 1fr" alignItems="center"><IoPeopleOutline size={20} /><Text as="h2" variant="headingMd">Aktif Ziyaretçi</Text></InlineGrid><Text as="p" variant="headingXl">{statsData.aktifZiyaretci.value}</Text><Text as="p" variant="bodyMd" tone="subdued">{statsData.aktifZiyaretci.change}</Text></BlockStack></Card>
          </InlineGrid>
        </Layout.Section>

        {/* Satış Analizi Grafiği */}
        <Layout.Section>
           <Card roundedAbove="sm">
              <BlockStack gap="500">
                <Text as="h2" variant="headingMd">Satış Analizi</Text>
                <div style={{height: '250px'}}>
                  <ResponsiveContainer width="100%" height="100%"><LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}><XAxis dataKey="name" stroke="#6D7175" /><YAxis stroke="#6D7175" /><Tooltip /><Line type="monotone" dataKey="satis" stroke="#5A31F4" strokeWidth={2} /></LineChart></ResponsiveContainer>
                </div>
              </BlockStack>
            </Card>
        </Layout.Section>

        {/* Hızlı Aksiyonlar Bölümü */}
        <Layout.Section>
          <InlineGrid columns={{ xs: 1, sm: 1, md: 3 }} gap="400">
            <div className="ActionCard ActionCard--green"><Card roundedAbove="sm"><BlockStack gap="300"><Icon source={() => <IoFlashOutline size={24} color="#008060" />} /><Text as="h3" variant="headingMd">Hızlı Optimizasyon</Text><Text as="p" tone="subdued">Seçili ürünleri AI ile optimize edin</Text><Box paddingBlockStart="200"><Button>Başlat</Button></Box></BlockStack></Card></div>
            <div className="ActionCard ActionCard--purple"><Card roundedAbove="sm"><BlockStack gap="300"><Icon source={() => <IoImageOutline size={24} color="#5A31F4" />} /><Text as="h3" variant="headingMd">Görsel Oluştur</Text><Text as="p" tone="subdued">AI ile ürün görsellerinden kampanya oluşturun</Text><Box paddingBlockStart="200"><Button>Oluştur</Button></Box></BlockStack></Card></div>
            <div className="ActionCard ActionCard--pink"><Card roundedAbove="sm"><BlockStack gap="300"><Icon source={() => <IoMegaphoneOutline size={24} color="#BC2A43" />} /><Text as="h3" variant="headingMd">Kampanya Önerisi</Text><Text as="p" tone="subdued">AI destekli pazarlama kampanyaları</Text><Box paddingBlockStart="200"><Button>İncele</Button></Box></BlockStack></Card></div>
          </InlineGrid>
        </Layout.Section>
        
        {/* --- YENİ KANAL PERFORMANSI KARTLARI --- */}
        <Layout.Section>
            <Box paddingBlockStart="200" paddingBlockEnd="200">
                <Text variant="headingLg" as="h2">Kanal Performansı</Text>
            </Box>
            <InlineGrid columns={{ xs: 1, sm: 2, md: 4}} gap="400">
                <Card roundedAbove="sm">
                    <BlockStack gap="200">
                        <InlineGrid gap="200" columns="auto 1fr" alignItems="center"><Icon source={()=><FaFacebook color="#1877F2" />} /><Text as="h3" variant="headingMd">Facebook</Text></InlineGrid>
                        <Text as="p" tone="subdued">Harcama: {channelData.facebook.spend}</Text>
                        <Text as="p" tone="subdued">ROAS: {channelData.facebook.roas}</Text>
                    </BlockStack>
                </Card>
                <Card roundedAbove="sm">
                    <BlockStack gap="200">
                        <InlineGrid gap="200" columns="auto 1fr" alignItems="center"><Icon source={()=><FaInstagram color="#E4405F" />} /><Text as="h3" variant="headingMd">Instagram</Text></InlineGrid>
                        <Text as="p" tone="subdued">Harcama: {channelData.instagram.spend}</Text>
                        <Text as="p" tone="subdued">ROAS: {channelData.instagram.roas}</Text>
                    </BlockStack>
                </Card>
                <Card roundedAbove="sm">
                    <BlockStack gap="200">
                        <InlineGrid gap="200" columns="auto 1fr" alignItems="center"><Icon source={()=><FaGoogle color="#4285F4" />} /><Text as="h3" variant="headingMd">Google</Text></InlineGrid>
                        <Text as="p" tone="subdued">Harcama: {channelData.google.spend}</Text>
                        <Text as="p" tone="subdued">ROAS: {channelData.google.roas}</Text>
                    </BlockStack>
                </Card>
                <Card roundedAbove="sm">
                    <BlockStack gap="200">
                        <InlineGrid gap="200" columns="auto 1fr" alignItems="center"><Text as="h3" variant="headingMd">Facebook & Instagram</Text></InlineGrid>
                        <Text as="p" tone="subdued">Harcama: {channelData.all.spend}</Text>
                        <Text as="p" tone="subdued">ROAS: {channelData.all.roas}</Text>
                    </BlockStack>
                </Card>
            </InlineGrid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}