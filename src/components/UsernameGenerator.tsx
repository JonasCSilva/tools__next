import { useCallback, useState } from "react";
import generator from "generate-password";
import { Button, Stack } from "@mantine/core";

export const UsernameGenerator = () => {
  const [generatedUsername, setGeneratedUsername] = useState<string>("");

  const generateUsername = useCallback(() => {
    const username =
      generator.generate({
        length: 1,
        numbers: false,
        uppercase: false,
        excludeSimilarCharacters: true,
        strict: true,
      }) +
      generator.generate({
        length: 7,
        numbers: true,
        uppercase: false,
        excludeSimilarCharacters: true,
        strict: true,
      });

    setGeneratedUsername(username);
  }, []);

  return (
    <Stack>
      <Button onClick={generateUsername} size="xl">
        Generate Username
      </Button>
      <Button size="xl" style={{ fontSize: "16px" }}>
        {generatedUsername}
      </Button>
    </Stack>
  );
};
