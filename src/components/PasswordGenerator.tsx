import { useCallback, useState } from "react";
import generator from "generate-password";
import { Button, Stack } from "@mantine/core";

export const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  const generatePassword = useCallback(() => {
    const password = generator.generate({
      length: 16,
      numbers: true,
      symbols: true,
      excludeSimilarCharacters: true,
      strict: true,
    });

    setGeneratedPassword(password);
  }, []);

  return (
    <Stack>
      <Button onClick={generatePassword} size="xl">
        Generate Password
      </Button>

      <Button size="xl" style={{ fontSize: "16px" }}>
        {generatedPassword}
      </Button>
    </Stack>
  );
};
