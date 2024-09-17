import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import image from '../public/images/hero-image.png';
import styles from '../styles/HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={styles.inner}>
        <div className={styles.content}>
          <Title className={styles.title}>
            A <span className={styles.highlight}>modern</span> way <br /> to make a change...
          </Title>
          <Text c="dimmed" mt="md">
            We've built a way for you to start doing more. <br /> Here's how we do it:
          
          
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon className={styles.checkmark} size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Our Platform</b> – Shows you where you can start doing more. 
            </List.Item>
            <List.Item>
              <b>Your input</b> – We donate everytime you log your order with us!
            </List.Item>
            <List.Item>
              <b>It's all from us</b> – We donate! Thats the best part, all you have to do is keep doing you, and we'll handle the rest.
            </List.Item>
          </List>
        </div>
        { <Image src={image.src} className={styles.image} /> }
      </div>

      <Group mt={30}>
            <Button radius="xl" size="md" className={styles.control}>
              To Dashboard
            </Button>
            <Button variant="default" radius="xl" size="md" className={styles.control}>
              Contact us
            </Button>
          </Group>
    </Container>
  );
}

export default HeroBullets;