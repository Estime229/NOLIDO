import { REGISTERED } from '@/lib/session-status';

import { Layout } from '@/ui/components/layout/layout';

import { Seo } from '@/ui/components/seo/seo'






export default function Home() {
  return (

    <>
      <Seo title="Mon espace" description="Descrption.." />

      <Layout withSidebar>
        {/* Add some content here as children */}
        <div>
          This is the content of the Home page.
        </div>
      </Layout>

    </>

  );
}
