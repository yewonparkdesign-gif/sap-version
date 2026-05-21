import { PageWrapper, PageHeader } from "@/components/layout/PageWrapper";
import { ContentRenderer } from "@/components/blocks/ContentRenderer";
import type { FoundationPage } from "@/types/content";

interface FoundationTemplateProps {
  page: FoundationPage;
}

export function FoundationTemplate({ page }: FoundationTemplateProps) {
  return (
    <PageWrapper prose>
      <PageHeader
        title={page.title}
        badge={page.badge}
        subtitle={page.subtitle}
        description={page.description}
        tags={page.tags}
        status={page.status}
        lastUpdated={page.lastUpdated}
        showDate={page.slug === "visual-direction"}
      />
      <ContentRenderer blocks={page.blocks} />
    </PageWrapper>
  );
}
