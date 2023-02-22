import React from "react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

export default function GoogleMaps() {
  return (
    <>
      <Popover placement="top-start">
        <PopoverTrigger>
          <Button>Click me</Button>
        </PopoverTrigger>
        <PopoverContent shadow={"2xl"}>
          <PopoverHeader fontWeight="semibold">Popover placement</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
