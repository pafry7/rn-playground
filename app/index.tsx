import { YStack, Text } from "tamagui";
import { Link } from "expo-router";

export default function Index() {
  return (
    <YStack flex={1} backgroundColor="#fff" space="$4" ai="center" jc="center">
      <Text color="#000">Home</Text>
      <Link href="/settings">
        <Text color="#000">Go settings</Text>
      </Link>
    </YStack>
  );
}
