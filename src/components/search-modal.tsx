"use client";

import { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

import { SearchIcon } from "lucide-react";

export const SearchModal = () => {
  const [query, setQuery] = useState<string>("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" variant="flat" isIconOnly={true} onClick={onOpen}>
        <SearchIcon size={24} />
      </Button>
      <Modal
        size="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent className="py-4">
          <>
            <ModalHeader className="flex flex-col gap-2">
              <p>Search</p>
              <Input
                autoFocus={true}
                startContent={
                  <SearchIcon size={24} className="text-default-400" />
                }
                placeholder="Search anything..."
                color="primary"
                variant="underlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                {/* {data.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center gap-4 p-2 cursor-pointer hover:bg-primary/10 hover:rounded-lg"
                    onClick={() => handleNavigation(result)}
                  >
                    <Image
                      src={`${API_IMG}/original${result.poster_path}`}
                      alt={result.title ?? result.name}
                      className="rounded-lg"
                      width={50}
                    />
                    <div>
                      <p className="text-small">
                        {result.title ?? result.name}
                      </p>
                      <p className="text-small uppercase">
                        {result.media_type} -{" "}
                        {result.release_date?.split("-")[0] ??
                          result.first_air_date?.split("-")[0]}
                      </p>
                    </div>
                  </div>
                ))} */}
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
