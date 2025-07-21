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
  Sparkles,
  Languages,
  TextQuote,
  ShieldCheck
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
                Create smarter Shopify campaigns with AI-powered text, multilingual content, and predictive insights — no external ads platforms required.
              </Text>
              <InlineStack gap="400">
                <Button icon={Rocket}>Create AI Campaign</Button>
                <Button icon={Sparkles} variant="secondary">Try Prompt Console</Button>
              </InlineStack>
            </BlockStack>
          </Card>

          <Card>
            <img
              alt="Omni AI Banner"
              src="https://placehold.co/600x280/0b76ef/ffffff?text=Omni+AI+Suite"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Card>
        </Grid>

        {/* AI INSIGHTS */}
        <Card>
          <BlockStack gap="200">
            <Badge tone="success">🎯 AI says: This headline has high persuasive power.</Badge>
            <Badge tone="info">🧠 Tip: Add urgency keywords like "limited time" for more conversions.</Badge>
            <Badge tone="warning">⚠️ Avoid overly generic phrases — specificity increases CTR.</Badge>
          </BlockStack>
        </Card>

        {/* TOOLS OVERVIEW */}
        <Grid columns={{ xs: 1, sm: 2, md: 3 }}>
          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Rocket size={20} />
                <Text variant="headingMd" as="h3">AI Campaign Builder</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                Select product → Choose tone → Let AI write your campaign. Launch-ready content in seconds.
              </Text>
              <Button variant="primary">Start Building</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <BarChart3 size={20} />
                <Text variant="headingMd" as="h3">Simulated Performance</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                View AI-predicted success metrics before launch. Make data-free decisions smarter.
              </Text>
              <Button>Analyze Now</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <SearchCode size={20} />
                <Text variant="headingMd" as="h3">AI Prompt Console</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                Write prompts, get instant content. Custom ads, posts, hooks — generated on command.
              </Text>
              <Button>Open Console</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <Languages size={20} />
                <Text variant="headingMd" as="h3">Multilingual Content</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                Instantly translate all content into 8+ languages. Localized. Ready-to-publish.
              </Text>
              <Button>Translate</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <TextQuote size={20} />
                <Text variant="headingMd" as="h3">Content Variations</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                Generate multiple ad variations. Test tones, styles, calls-to-action — pick what fits.
              </Text>
              <Button>Try Variants</Button>
            </BlockStack>
          </Card>

          <Card>
            <BlockStack>
              <InlineStack gap="200" align="center">
                <ShieldCheck size={20} />
                <Text variant="headingMd" as="h3">Privacy & Compliance</Text>
              </InlineStack>
              <Text as="p" variant="bodySm">
                Everything AI generates meets GDPR and Shopify marketing guidelines by design.
              </Text>
              <Button>Learn More</Button>
            </BlockStack>
          </Card>
        </Grid>
      </BlockStack>
    </Page>
  );
}
