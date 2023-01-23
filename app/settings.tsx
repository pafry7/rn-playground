import { YStack, Text, LinearGradient, Select, Adapt, Sheet } from "tamagui";
import { Link } from "expo-router";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
const items = [
  { name: "Apple" },
  { name: "Pear" },
  { name: "Blackberry" },
  { name: "Peach" },
  { name: "Apricot" },
  { name: "Melon" },
  { name: "Honeydew" },
  { name: "Starfruit" },
  { name: "Blueberry" },
  { name: "Rasberry" },
  { name: "Strawberry" },
  { name: "Mango" },
  { name: "Pineapple" },
  { name: "Lime" },
  { name: "Lemon" },
  { name: "Coconut" },
  { name: "Guava" },
  { name: "Papaya" },
  { name: "Orange" },
  { name: "Grape" },
  { name: "Jackfruit" },
  { name: "Durian" },
];

export default function Settings() {
  const [val, setVal] = useState("apple");
  return (
    <YStack
      flex={1}
      borderWidth={1}
      backgroundColor="#000"
      space="$4"
      ai="center"
      jc="center"
    >
      <Select id="food" value={val} onValueChange={setVal}>
        <Select.Trigger w={180} iconAfter={ChevronDown}>
          <Select.Value placeholder="Something" />
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet modal dismissOnSnapToBottom>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            ai="center"
            jc="center"
            pos="relative"
            w="100%"
            h="$3"
          >
            <YStack zi={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={["$background", "$backgroundTransparent"]}
              br="$4"
            />
          </Select.ScrollUpButton>

          <Select.Viewport minWidth={200}>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              {items.map((item, i) => {
                return (
                  <Select.Item
                    index={i}
                    key={item.name}
                    value={item.name.toLowerCase()}
                  >
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator ml="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton
            ai="center"
            jc="center"
            pos="relative"
            w="100%"
            h="$3"
          >
            <YStack zi={10}>
              <ChevronDown size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={["$backgroundTransparent", "$background"]}
              br="$4"
            />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>

      <LinearGradient
        width="$6"
        height="$6"
        br="$4"
        colors={["#FE6601", "#FF0077"]}
        start={[0, 1]}
        end={[0, 0]}
      />
      <Text color="#fff">Settings</Text>
      <Link href="/">
        <Text color="#fff">Go home</Text>
      </Link>
    </YStack>
  );
}
