// pages/login/[shop].js
import { useRouter } from 'next/router';
import Login from '../login';

export default function ShopLogin() {
  const router = useRouter();
  const { shop } = router.query;

  return <Login />;
}