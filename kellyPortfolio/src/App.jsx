import {
  MantineProvider,
  Image,
  Flex,
  Button,
  Stack,
  Group,
  Text,
  Title,
  AppShell,
} from "@mantine/core";
import { useContext, useRef } from "react";
import { User, FileText, Mail, Award } from "react-feather";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import Projects from "./Projects";
import { ScrollContext } from "./Contexts/ScrollContext";

const FramerButton = motion(Button);
export default function App() {
  const { handleScrollToProjects, projectRef, heroRef } =
    useContext(ScrollContext);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          Card: {
            styles: (theme, _) => ({
              root: {
                transition: "background-color 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.colors.blue[7],
                },
              },
            }),
          },
          Button: {
            styles: (theme, _) => ({
              root: {
                transition: "background-color 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.colors.blue[7],
                },
                backgroundColor: "#171717",
              },
            }),
          },
        },
      }}
    >
      <AppShell header={<Navbar />}>
        <Flex
          w="100vw"
          h="100vh"
          justify="center"
          align="center"
          direction="column"
          ref={heroRef}
        >
          <Stack spacing="xl">
            <Title order={1}>Hi, I&lsquo;m @kellycupmuffin uwu</Title>
            <Image withPlaceholder />
            <Group position="center" spacing="lg">
              <FramerButton
                whileHover={{ scale: 1.05, zIndex: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <User />
              </FramerButton>
              <FramerButton
                whileHover={{ scale: 1.05, zIndex: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScrollToProjects}
              >
                <FileText />
              </FramerButton>
              <FramerButton
                whileHover={{ scale: 1.05, zIndex: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail />
              </FramerButton>
              <FramerButton
                whileHover={{ scale: 1.05, zIndex: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Award />
              </FramerButton>
            </Group>
          </Stack>
        </Flex>
        <Flex
          w="100vw"
          h="100vh"
          justify="center"
          align="center"
          direction="column"
        >
          <Projects ref={projectRef} />
        </Flex>
      </AppShell>
    </MantineProvider>
  );
}
