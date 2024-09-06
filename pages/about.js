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
    description: 'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: '/images/greenPop-logo.png',
  },
  {
    title: 'EarthChild',
    description: 'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: '/images/earthChild-logo.png',
  },
  {
    title: 'Animal Ocean',
    description: "They're popular, but they're rare. Trainers who show them off recklessly may be targeted by thieves",
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
            <Badge variant="filled" size="lg">
              Currently associated NGO's
            </Badge>
          </Group>

          <Title order={2} className={classes.title} ta="center" mt="sm">
            Integrate effortlessly with any technology stack
          </Title>

          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Every once in a while, you'll see a Golbat that's missing some fangs. This happens when
            hunger drives it to try biting a Steel-type Pokémon.
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