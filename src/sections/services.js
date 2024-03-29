import SectionHeading from "components/section-heading";
import ServiceCard from "components/service-card";
import { Box, Flex } from "@chakra-ui/react";

const services = [
  {
    title: "Cloud Hosting",
    price: 0.63,
  },
  {
    title: "Web Hosting",
    price: 0.75,
  },
  {
    title: "VPS Hosting",
    price: 0.68,
  },
  {
    title: "Wordpress Hosting",
    price: 0.72,
  },
  {
    title: "Domains",
    price: 0.63,
  },
  {
    title: "Email Hosting",
    price: 0.56,
  },
  {
    title: "VPN Service",
    price: 0.69,
  },
  {
    title: "Image Cloud",
    price: 0.75,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Flex>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Didn’t find what you were looking for?"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: ["72px", null, null, null, "96px", null, "132px"],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(3, 1fr)",
      null,
      "repeat(4, 1fr)",
      "repeat(4, 300px)",
    ],
  },
};
