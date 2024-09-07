import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from '../styles/Header.module.css';

const links = [
  { link: '/dashboard', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/leaderboard', label: 'Leaderboard' },
  { link: '/contact', label: 'Contact' },
];

export function HeaderSimple() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </Link>
  ));

  const mobileItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
        close(); // Close the mobile menu when a link is clicked
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Image
        src="/images/more-logo.png"
        alt="Company Logo"
        width={130}
        height={130}
        className={classes.logo}
      />
      <Container size="md" className={classes.inner}>
        <Group gap={5} className={classes.desktopLinks}>
          {items}
        </Group>
      </Container>

      <div className={classes['burger-container']}>
        <Burger opened={opened} onClick={toggle} size="sm" />
      </div>

      {opened && (
        <div className={classes.mobileLinks}>
          {mobileItems}
        </div>
      )}
    </header>
  );
}