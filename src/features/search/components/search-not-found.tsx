import Link from "next/link";
import { Button } from "@nextui-org/react";

export const SearchNotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 h-[calc(100dvh_-_12rem)] md:h-[calc(100dvh_-_9.5rem)]">
      <h1 className="uppercase">Busque una película o serie para comenzar</h1>
      <Button as={Link} color="primary" size="lg" href="/">
        Regresar al inicio
      </Button>
    </section>
  );
};
