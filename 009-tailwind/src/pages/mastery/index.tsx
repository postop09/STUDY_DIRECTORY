import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Index = (props: any) => {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  }, []);

  return (
    <div>
      <h2>{router.query.name}</h2>
    </div>
  );
};

export default Index;
