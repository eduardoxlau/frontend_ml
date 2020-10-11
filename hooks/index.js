import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ROUTECHANGESTART, ROUTECHANGECOMPLETE } from "utils/constants";

export const useLoading = () => {
  const [loading, setLoding] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => setLoding(true);
    const end = () => setLoding(false);

    router.events.on(ROUTECHANGESTART, start);
    router.events.on(ROUTECHANGECOMPLETE, end);
    return () => {
      router.events.off(ROUTECHANGESTART, start);
      router.events.off(ROUTECHANGECOMPLETE, end);
    };
  }, []);
  return loading;
};
