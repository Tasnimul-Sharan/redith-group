import { useRouter } from "next/router";
import ServiceDetails from "@/components/ServiceDetails";
import { serviceDetails } from "@/data/serviceDetails";

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) return <h1>404 | Service Not Found</h1>;

  return <ServiceDetails service={service} />;
}
