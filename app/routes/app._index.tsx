import {
  Card,
  BlockStack,
  Text,
  InlineStack,
  Page,
  Grid,
  Select,
  Button,
  Badge
} from "@shopify/polaris";
import {
  Activity,
  CreditCard,
  Users,
  Star,
  BarChart3,
  Settings2,
  Languages,
  ShieldCheck,
  Rocket,
  Sparkles
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [selectedLang, setSelectedLang] = useState("en");

  const langs = [
    { label: "English", value: "en" },
    { label: "Türkçe", value: "tr" },
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
        content: "🚀 Create Campaign",
        onAction: () => console.log("Campaign Creation"),
      }}
    >
      <BlockStack gap="400">
        <Card padding="600">
          <InlineStack align="space-between">
            <BlockStack gap="200">
              <Text variant="heading2xl" as="h1">
                Welcome to <b>Omni AI Suite</b>
              </Text>
              <Text as="p" variant="bodyMd">
                Manage your advertising like a pro. Omni AI helps you analyze, optimize, and scale your store across platforms with multilingual automation.
              </Text>
              <Badge tone="success">Connected</Badge>
            </BlockStack>
            <Select
              labelHidden
              label="Language"
              options={langs}
              value={selectedLang}
              onChange={(v) => setSelectedLang(v)}
            />
          </InlineStack>
        </Card>

        <Grid columns={{ xs: 1, sm: 2, md: 4 }}>
          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Activity size={20} />
                <Text variant="headingMd" as="h3">Clicks</Text>
              </InlineStack>
              <Text as="p" variant="bodyMd">2,456</Text>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <CreditCard size={20} />
                <Text variant="headingMd" as="h3">Spend</Text>
              </InlineStack>
              <Text as="p" variant="bodyMd">$4,230</Text>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Users size={20} />
                <Text variant="headingMd" as="h3">Users</Text>
              </InlineStack>
              <Text as="p" variant="bodyMd">1,204</Text>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Star size={20} />
                <Text variant="headingMd" as="h3">Conversions</Text>
              </InlineStack>
              <Text as="p" variant="bodyMd">314</Text>
            </BlockStack>
          </Card>
        </Grid>

        <Grid columns={{ xs: 1, sm: 2, md: 3 }}>
          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <BarChart3 size={20} />
                <Text variant="headingMd" as="h3">Campaign Analytics</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                View performance breakdowns and discover which ads convert best.
              </Text>
              <Button variant="primary">View Analytics</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Settings2 size={20} />
                <Text variant="headingMd" as="h3">Automation Settings</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                Configure rules for retargeting, budget management and timing.
              </Text>
              <Button>Configure</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Languages size={20} />
                <Text variant="headingMd" as="h3">Multilingual Content</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                Use AI to localize your ad texts for global reach.
              </Text>
              <Button>Manage Content</Button>
            </BlockStack>
          </Card>
        </Grid>

        <Card padding="500">
          <InlineStack gap="200" align="center">
            <ShieldCheck size={20} />
            <Text variant="headingMd" as="h3">Privacy & Compliance</Text>
          </InlineStack>
          <Text as="p" variant="bodySm">
            All campaigns comply with GDPR, CCPA, and Shopify policies.
          </Text>
        </Card>
      </BlockStack>
    </Page>
  );
}
