import { Input, VStack } from "native-base";

export default function InputBar() {
  return (
    <VStack
      my="4"
      space={5}
      w="100%"
      maxW="300px"
    >
      <Input
        placeholder="Ваше слово"
        width="100%"
        borderRadius="4"
        p="2"
        fontSize="14"
      />
    </VStack>
  );
}
