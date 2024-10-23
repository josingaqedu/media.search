"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

import { SearchIcon } from "lucide-react";

export const SearchModal = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [search, setSearch] = useState<string>(query || "");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClose();

    const query = search
      .trim()
      .replace(/\s/g, "+")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (!query) {
      setSearch("");
      return null;
    }

    router.push(`/search?q=${query}`);
  };

  return (
    <>
      <Button color="primary" variant="flat" isIconOnly={true} onClick={onOpen}>
        <SearchIcon size={24} />
      </Button>
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="opaque"
        placement="top"
        scrollBehavior="inside"
      >
        <ModalContent className="py-2">
          <ModalHeader>
            <form className="w-full" onSubmit={handleSearch}>
              <Input
                autoFocus={true}
                startContent={
                  <SearchIcon size={24} className="text-default-400" />
                }
                placeholder="Busca una película o serie"
                color="primary"
                variant="underlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
};
