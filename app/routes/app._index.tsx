import {
  Page,
  Card,
  BlockStack,
  InlineStack,
  Text,
  Button,
  Grid,
  Badge
} from "@shopify/polaris";
import {
  Rocket,
  BarChart3,
  SearchCode,
  LayoutDashboard,
  DollarSign,
  ShoppingCart,
  Activity,
  CreditCard,
  Users,
  Star
} from "lucide-react";

export default function Index() {
  return (
    <Page fullWidth>
      <BlockStack gap="600">
        {/* HERO */}
        <Grid columns={{ xs: 1, md: 2 }}>
          <Card padding="600">
            <BlockStack gap="300">
              <Text variant="heading2xl" as="h1">
                Welcome to <b>Omni AI Suite</b>
              </Text>
              <Text as="p" variant="bodyMd">
                AI-driven automation and optimization for next-level campaign performance.
              </Text>
              <InlineStack gap="400">
                <Button icon={Rocket}>Create Campaign</Button>
                <Button icon={SearchCode} variant="secondary">Analyze Competitor</Button>
                <Button icon={BarChart3} variant="secondary">View Reports</Button>
              </InlineStack>
            </BlockStack>
          </Card>

          <Card padding="0">
            <img
              alt="Omni AI Banner"
              src="https://placehold.co/600x280/0b76ef/ffffff?text=Omni+AI+Suite"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Card>
        </Grid>

        {/* INSIGHTS */}
        <Card>
          <BlockStack gap="200">
            <Badge tone="success">
              🎉 Your Summer Sale campaign achieved 225% ROAS in the last 3 days!
            </Badge>
            <Badge tone="warning">
              ⚠️ CTR on Google Ads dropped below 1.5% – consider updating visuals.
            </Badge>
            <Badge tone="info">
              📊 Try running competitor analysis to discover new keyword gaps.
            </Badge>
          </BlockStack>
        </Card>

        {/* METRICS */}
        <Grid columns={{ xs: 1, sm: 2, md: 4 }}>
          <Card>
            <BlockStack>
              <InlineStack align="center" gap="200">
                <Activity size={18} />
                <Text variant="headingSm" as="h3">Clicks</Text>
              </InlineStack>
              <Text as="p">2,456</Text>
            </BlockStack>
          </Card>
          <Card>
            <BlockStack>
              <InlineStack align="center" gap="200">
                <CreditCard size={18} />
                <Text variant="headingSm" as="h3">Spend</Text>
              </InlineStack>
              <Text as="p">$120.57</Text>
            </BlockStack>
          </Card>
          <Card>
            <BlockStack>
              <InlineStack align="center" gap="200">
                <ShoppingCart size={18} />
                <Text variant="headingSm" as="h3">Revenue</Text>
              </InlineStack>
              <Text as="p">$1,054.60</Text>
            </BlockStack>
          </Card>
          <Card>
            <BlockStack>
              <InlineStack align="center" gap="200">
                <DollarSign size={18} />
                <Text variant="headingSm" as="h3">ROAS</Text>
              </InlineStack>
              <Text as="p">8.75x</Text>
            </BlockStack>
          </Card>
        </Grid>

        {/* GRAPH PLACEHOLDER */}
        <Card>
          <Text variant="headingMd" as="h3">Sales Analysis</Text>
          <img
            alt="Sales Graph"
            src="https://placehold.co/700x200/f3f4f6/999?text=Graph+Coming+Soon"
            style={{ width: "100%", marginTop: 10 }}
          />
        </Card>

        {/* CHANNEL BUDGETS */}
        <Grid columns={{ xs: 1, md: 2 }}>
          <Card>
            <Text variant="headingSm" as="h3">Facebook</Text>
            <Text as="p">Daily Budget: $100.00<br/>ROAS: 6.2x</Text>
          </Card>
          <Card>
            <Text variant="headingSm" as="h3">Instagram</Text>
            <Text as="p">Daily Budget: $75.00<br/>ROAS: 5.8x</Text>
          </Card>
          <Card>
            <Text variant="headingSm" as="h3">Google</Text>
            <Text as="p">Daily Budget: $50.00<br/>ROAS: 4.2x</Text>
          </Card>
          <Card>
            <Text variant="headingSm" as="h3">Meta Suite</Text>
            <Text as="p">Daily Budget: $110.00<br/>ROAS: 7.0x</Text>
          </Card>
        </Grid>
      </BlockStack>
    </Page>
  );
}
