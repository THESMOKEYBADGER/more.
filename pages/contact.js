import { TextInput, Textarea, SimpleGrid, Group, Title, Button, MantineProvider } from '@mantine/core';
import { useForm } from '@mantine/form';
import '@mantine/core/styles.css';
import { FooterCentered } from '../components/footer';
import { HeaderSimple } from '../components/Header';
import styles from '../styles/contact.module.css'

function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <MantineProvider>
    <div className={styles.pageWrapper}>
    <HeaderSimple />

    <main className={styles.content}>
    
      <form onSubmit={form.onSubmit(() => {})}>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
          fw={900}
          ta="center"
        >
          Get in touch
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>

      </main>
      <FooterCentered /> {/* Add the Footer component here */}
      </div>
    </MantineProvider>
  );
}

// Make sure to export the component as the default export
export default GetInTouchSimple;
