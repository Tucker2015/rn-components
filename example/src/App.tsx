import { Layout, Card } from 'rn-components';

export default function App() {
  return (
    <Layout isCenter isSafeArea padding={20}>
      <Card
        width={`95%`}
        description="This is a description"
        title="Card Title"
      />
    </Layout>
  );
}
