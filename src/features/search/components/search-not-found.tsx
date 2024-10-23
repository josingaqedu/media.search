import { Button } from "@nextui-org/react";

export const SearchNotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 h-[calc(100dvh_-_12rem)] md:h-[calc(100dvh_-_9.5rem)]">
      <h1 className="uppercase">Buscaqueda no encontrada</h1>
      <Button color="primary" size="lg">Regresar al inicio</Button>
    </section>
  );
};
