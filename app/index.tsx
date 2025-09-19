import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function RootRedirect() {

  const router = useRouter();

  useEffect(() => {

    const timeout = setTimeout(() => {

      router.replace("/login"); 

    }, 50);

    return () => clearTimeout(timeout);
    
  }, []);

  return null;
}
