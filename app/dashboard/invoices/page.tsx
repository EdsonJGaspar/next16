import { Heading } from "@/components/web/heading";
import { Section } from "@/components/web/section";

export default function InvoicesPage() {
  return (
    <main>
      <h3>Envoices Page</h3>
      <section>
        <h2>Estudando contexto</h2>
        <Section level={1}>
          <Heading>Titulo</Heading>
          <Section level={2}>
            <Heading>Heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={3}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-sub-heading</Heading>
              <Section level={4}>
                <Heading>Sub-sub-sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </section>
    </main>
  );
}
