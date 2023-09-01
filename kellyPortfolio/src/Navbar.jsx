import { Header, Flex, Group, Button, Text } from "@mantine/core";
import { useContext } from "react";
import { ScrollContext } from "./Contexts/ScrollContext";
export const Navbar = () => {
  const { handleScrollToProjects, handleScrollToHero } =
    useContext(ScrollContext);
  return (
    <Header
      style={{ backgroundColor: "white" }}
      shadow="sm"
      padding="xs"
      position="fixed"
      zIndex={1}
      top={0}
      left={0}
      right={0}
    >
      <Flex
        justify="space-between"
        align="center"
        style={{ width: "100%", padding: ".5rem 3rem" }}
      >
        <Text size="xl" weight={700}>
          Kelly Li
        </Text>
        <Group>
          <Button
            variant="link"
            size="lg"
            style={{ backgroundColor: "white" }}
            onClick={handleScrollToHero}
          >
            Home
          </Button>
          <Button variant="link" size="lg" style={{ backgroundColor: "white" }}>
            About
          </Button>
          <Button
            variant="link"
            size="lg"
            style={{ backgroundColor: "white" }}
            onClick={handleScrollToProjects}
          >
            Projects
          </Button>
          <Button variant="link" size="lg" style={{ backgroundColor: "white" }}>
            Contact
          </Button>
        </Group>
      </Flex>
    </Header>
  );
};
export default Navbar;
