import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/leaderboard.module.css'; 
import { FooterCentered } from '../components/footer';
import { HeaderSimple } from '../components/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useState } from 'react';

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



export default function Leaderboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <MantineProvider
      theme={{ /* optional theme overrides */ }}
      withGlobalStyles
      withNormalizeCSS
    >
        

        <div className={styles.pageWrapper}>
        <HeaderSimple onMenuToggle={setMobileMenuOpen}/>
        <Head>
          <title>Leaderboard</title>
          <meta name="description" content="Check in to see how your Local is doing!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={`${styles.container} ${mobileMenuOpen ? styles.pushDown : ''}`}>

        <Container className={styles.content}size="lg" py="xl">
          <Group justify="center">
            <Badge className={styles.badge}variant="filled" size="lg">
              Coming Soon!
            </Badge>
          </Group>

          <Title order={2} className={styles.title} ta="center" mt="sm">
            The Leaderboard Page
          </Title>

          <Text c="dimmed" className={styles.description} ta="center" mt="md">
            Here we will rank the compnaies that have donated the most over the past month.
          </Text>

          
        </Container>

        <main className={styles.main}>

        </main>

        </div>

        <FooterCentered />
      </div>
    </MantineProvider>
  );
}