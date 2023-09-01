import { useState, forwardRef } from "react";
import {
  Container,
  Grid,
  Col,
  Card,
  Image,
  Text,
  TextInput,
  Title,
  Flex,
} from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";

const FramerCol = motion(Col, { forwardMotionProps: true });
const FramerCard = motion(Card, { forwardMotionProps: true });
const CardGrid = ({ search }) => {
  const cards = [
    {
      id: 1,
      image: "path/to/your/image1.jpg",
      text: "Card 1 content here",
      tag: "python",
    },
    {
      id: 2,
      image: "path/to/your/image2.jpg",
      text: "Card 2 content here",
      tag: "tableau",
    },
    {
      id: 3,
      image: "path/to/your/image2.jpg",
      text: "Card 2 content here",
      tag: "python",
    },
    {
      id: 4,
      image: "path/to/your/image2.jpg",
      text: "Card 2 content here",
      tag: "tableau",
    },

    // Add more cards as needed
  ];

  return (
    <div style={{ width: "50vw", margin: "0 auto", overflow: "auto" }}>
      <Grid gutter="lg" columns={2}>
        <AnimatePresence>
          {cards
            .filter((card) => card.tag.includes(search))
            .map((card) => (
              <FramerCol
                span={1}
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <FramerCard
                  shadow="lg"
                  whileHover={{ scale: 1.05, zIndex: 1 }}
                  whileTap={{ scale: 0.95 }}
                  layout
                >
                  <Image
                    src={card.image}
                    height={150}
                    fit="cover"
                    alt="Card image"
                  />
                  <Text size="sm" style={{ marginTop: "1rem" }}>
                    {card.text}
                  </Text>
                </FramerCard>
              </FramerCol>
            ))}
        </AnimatePresence>
      </Grid>
    </div>
  );
};

const Projects = forwardRef((props, ref) => {
  const [search, setSearch] = useState("");
  return (
    <Flex
      direction="column"
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      style={{ padding: "2rem" }}
      ref={ref}
    >
      <Title order={1} style={{ fontSize: "2rem" }}>
        Here are some of my projects
      </Title>
      <Container w="50vw" style={{ marginTop: "2rem" }}>
        <TextInput
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search"
          icon={<span>🔍</span>}
          rightSectionWidth={50}
          rightSectionProps={{ style: { cursor: "pointer" } }}
          style={{ width: "100%", marginBottom: "2rem" }}
        />
        <CardGrid search={search} />
      </Container>
    </Flex>
  );
});

Projects.displayName = "Projects";

export default Projects;
