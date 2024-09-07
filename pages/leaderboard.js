import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/leaderboard.module.css'; 
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

import classes from '../styles/leaderboard.module.css';



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

        <Container className={classes.content}size="lg" py="xl">
          <Group justify="center">
            <Badge className={classes.badge}variant="filled" size="lg">
              Coming Soon!
            </Badge>
          </Group>

          <Title order={2} className={classes.title} ta="center" mt="sm">
            The Leaderboard Page
          </Title>

          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Here we will rank the compnaies that have donated the most over the past month.
          </Text>

          
        </Container>

        <main className={styles.main}>

        </main>

        <FooterCentered />
      </div>
    </MantineProvider>
  );
}