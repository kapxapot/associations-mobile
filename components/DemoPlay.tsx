import { Box, Center, VStack } from "native-base";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputBar from "./InputBar";

export default function DemoPlay() {
  const insets = useSafeAreaInsets();

  interface Word {
    display_name: string;
  }

  const [word, setWord] = useState<Word | null>();

  async function getWord() {
    try {
      const response = await fetch(
        "https://associ.ru/api/v1/play",
        {
          method: "POST"
        }
      );

      const json = await response.json();

      return json.new as Word;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWord().then(word => setWord(word));
  }, []);

  return (
    <Center
      flex={1}
      px="2"
      paddingTop={insets.top}
      paddingBottom={insets.bottom}
      paddingLeft={insets.left}
      paddingRight={insets.right}
    >
      <VStack flex={1}>
        <Box>
          Welcome to Associations Mobile!
        </Box>

        {word &&
          <Box>
            {word.display_name}
          </Box>
        }
      </VStack>

      <InputBar />
    </Center>
  );
}
