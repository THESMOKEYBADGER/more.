import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/about.module.css'; 
import { FooterCentered } from '../components/footer';
import { HeaderSimple } from '../components/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';

import classes from '../styles/FeaturesCards.module.css';

const mockdata = [
  {
    title: 'GreenPop',
    description: 'A Treevolution – a world where people and nature thrive together. When we give back and create value for the earth and our fellow human beings, joy is created – changing our own lives and changing the world. We’re on a mission to have fun and share this joy with as many people as possible.',
    icon: '/images/greenPop-logo.png',
  },
  {
    title: 'EarthChild',
    description: 'The Earthchild Project is a Non-Profit Organisation operating in the Western Cape, South Africa. We offer complimentary education to under-resourced schools with a focus on the environment, health and self-development and leadership.',
    icon: '/images/earthChild-logo.png',
  },
  {
    title: 'Animal Ocean',
    description: "Animal Ocean has provided a variety of services to scientists on the coastline, from assistance with sampling and data collection to skippering and vessel support, as well as donating images and video to researchers",
    icon: '/images/animalOcean-logo.png',
  },
];

function FeaturesCards() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Image
        src={feature.icon}
        alt={feature.title}
        width={100}
        height={100}
        className={classes.iconImage}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
      {features}
    </SimpleGrid>
  );
}

export default function About() {
  return (
    <MantineProvider
      theme={{ /* optional theme overrides */ }}
      withGlobalStyles
      withNormalizeCSS
    >
        

        <div className={styles.pageWrapper}>
        <HeaderSimple />
        <Head>
          <title>About Us</title>
          <meta name="description" content="Learn more about us and what we do." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container size="lg" py="xl">
          <Group justify="center">
            <Badge className={classes.badge}variant="filled" size="lg">
              Currently associated NGO's
            </Badge>
          </Group>

          <Title order={2} className={classes.title} ta="center" mt="sm">
            Find out about who we support
          </Title>

          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            At the end of every month we count up how many orders were placed associated with each initaitive, and then donate directly to them.
          </Text>

          <FeaturesCards />
        </Container>

        <main className={styles.main}>

        </main>

        <FooterCentered />
      </div>
    </MantineProvider>
  );
}