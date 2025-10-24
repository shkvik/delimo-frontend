# 🧱 React Project Naming & Structure Guide (`kebab-case` convention)

This document defines naming conventions and folder structure  
for a scalable React (Vite / Chakra UI / Router) project.

---

## 📂 Folder Structure

```bash
src/
 ├── app/
 │    ├── app.tsx
 │    └── routes.tsx
 │
 ├── pages/
 │    ├── home/
 │    │    ├── index.tsx
 │    │    ├── components/
 │    │    └── hooks/
 │    └── profile/
 │         ├── index.tsx
 │         ├── components/
 │         └── hooks/
 │
 ├── features/
 │    ├── auth/
 │    │    ├── model/
 │    │    └── lib/
 │    ├── gifts/
 │    └── storage/
 │
 ├── shared/
 │    ├── ui/
 │    ├── api/
 │    ├── lib/
 │    ├── hooks/
 │    ├── types/
 │    └── config/
 │
 ├── widgets/
 │    ├── bottom-nav/
 │    ├── header/
 │    └── sidebar/
 │
 ├── assets/
 │
 └── main.tsx
```

---

## 🧩 Naming Rules

| Item                     | Naming Rule (all in `kebab-case`)             | Examples                                            |
|---------------------------|----------------------------------------------|-----------------------------------------------------|
| **Folders**               | `kebab-case`                                 | `bottom-nav`, `auth-form`, `use-profile-data`       |
| **React Components**      | `kebab-case`, with `.tsx` extension          | `bottom-nav.tsx`, `gift-card.tsx`                   |
| **Hooks**                 | `kebab-case`, must start with `use-`         | `use-auth.ts`, `use-gifts.ts`, `use-profile-data.ts`|
| **Providers / Services**  | `kebab-case`, all lowercase                  | `chakra-provider.tsx`, `router-provider.tsx`        |
| **API**                   | `kebab-case`, format `feature-name-api.ts`   | `gifts-api.ts`, `auth-api.ts`, `profile-api.ts`     |
| **Tests**                 | `file-name.test.tsx` or `.test.ts`           | `gift-card.test.tsx`, `use-auth.test.ts`            |
| **Styles**                | `file-name.module.css`                       | `gift-card.module.css`, `bottom-nav.module.css`     |
| **Types / Interfaces**    | `file-name.types.ts`                         | `auth.types.ts`, `gift.types.ts`                    |
| **Constants / Configs**   | `file-name.config.ts` or `.constants.ts`     | `theme.config.ts`, `routes.constants.ts`            |
| **Utils / Libs**          | `file-name.ts`                               | `format-date.ts`, `convert-units.ts`                |

---

## 🪝 Hooks

📄 **File:** `use-auth.ts`

```tsx
// ✅ Hooks always start with "use" and are written in camelCase inside code

import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return { isAuthenticated, login, logout };
};
```

**Rules:**
- File name: `use-auth.ts`
- Hook name inside file: `useAuth`
- Always starts with `use` and follows camelCase

---

## 🧭 Pages

📄 **File:** `home-page.tsx`

```tsx
import { Box, Heading } from "@chakra-ui/react";
import { BottomNav } from "@/widgets/bottom-nav";

export const HomePage = () => {
  return (
    <Box p={6}>
      <Heading>Welcome to the Home Page</Heading>
      <BottomNav />
    </Box>
  );
};
```

**Rules:**
- File name: `home-page.tsx`
- Component name inside file: `HomePage` (PascalCase)
- Each page exports a single top-level component

---

## 🧱 UI Components

📄 **File:** `gift-card.tsx`

```tsx
import { Box, Text, Image } from "@chakra-ui/react";

type GiftCardProps = {
  title: string;
  image: string;
  price: number;
};

export const GiftCard = ({ title, image, price }: GiftCardProps) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.700"
      borderRadius="md"
      p={3}
      textAlign="center"
    >
      <Image src={image} alt={title} borderRadius="md" />
      <Text fontWeight="bold" mt={2}>{title}</Text>
      <Text color="gray.400">${price}</Text>
    </Box>
  );
};
```

**Rules:**
- File name: `gift-card.tsx`
- Component name: `GiftCard` (PascalCase)
- One component per file

---

## 📱 Widgets

📄 **File:** `bottom-nav.tsx`

```tsx
import { Flex, Text, Image } from "@chakra-ui/react";

import gameIcon from "@/assets/icons/game.svg";
import profileIcon from "@/assets/icons/profile.svg";

export const BottomNav = () => {
  return (
    <Flex justify="space-around" align="center" py={2} bg="gray.900">
      <Flex direction="column" align="center">
        <Image src={gameIcon} alt="Game" boxSize="24px" />
        <Text fontSize="xs">Game</Text>
      </Flex>
      <Flex direction="column" align="center">
        <Image src={profileIcon} alt="Profile" boxSize="24px" />
        <Text fontSize="xs">Profile</Text>
      </Flex>
    </Flex>
  );
};
```

**Rules:**
- File name: `bottom-nav.tsx`
- Component name: `BottomNav`
- Used across multiple pages — belongs in `widgets/`

---

## 📘 Summary

| File Name (kebab-case) | Inside Code (Pascal / Camel Case) | Type           |
|--------------------------|----------------------------------|----------------|
| `use-auth.ts`           | `useAuth`                        | Hook           |
| `home-page.tsx`         | `HomePage`                       | Page component |
| `gift-card.tsx`         | `GiftCard`                       | UI component   |
| `bottom-nav.tsx`        | `BottomNav`                      | Widget         |

---

## 💡 Tips

- ✅ Use **`kebab-case`** for all file and folder names.  
- ✅ Use **`PascalCase`** for components and **`camelCase`** for hooks inside code.  
- ⚙️ One React component per file.  
- 🚫 Avoid `index.tsx` for small components — use descriptive names instead (`gift-card.tsx`).  
- 🧱 Pages and widgets can re-export internal components from `index.ts`.  
- 🧩 TypeScript will infer component return types automatically — explicit `(): JSX.Element` is optional.

---

> 🧠 **Rule of thumb:**  
> File system = `kebab-case`  
> Code = `PascalCase` (components) + `camelCase` (hooks, variables)
